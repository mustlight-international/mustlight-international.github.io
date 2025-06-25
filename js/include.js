function loadComponent(id, url) {
  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      return res.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(err => console.error('加载失败:', err));
}

document.addEventListener("DOMContentLoaded", function() {
  loadComponent('navbar', 'components/navbar.html');
  loadComponent('footer', 'components/footer.html');
});