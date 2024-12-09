"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var burgerBlock = document.getElementById("burgerBlock");
  var menuList = document.getElementById("menuList");
  burgerBlock.addEventListener("click", function () {
    menuList.classList.toggle("active"); // Переключаем класс активного состояния
  });
});