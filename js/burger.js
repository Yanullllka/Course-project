
    document.addEventListener("DOMContentLoaded", function() {
        const burgerBlock = document.getElementById("burgerBlock");
        const menuList = document.getElementById("menuList");

        burgerBlock.addEventListener("click", function() {
            menuList.classList.toggle("active"); // Переключаем класс активного состояния
        });
    });