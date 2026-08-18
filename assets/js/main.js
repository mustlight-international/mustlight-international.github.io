/* 玛斯莱特官网 — 交互脚本（轻量） */
(function () {
  "use strict";

  // 移动端导航展开 / 收起
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // 点击导航项后自动收起（移动端）
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // 滚动时为头部加阴影（可选增强）
  var header = document.querySelector(".header");
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 8) header.style.boxShadow = "0 6px 20px rgba(15,27,45,0.08)";
      else header.style.boxShadow = "none";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
})();
