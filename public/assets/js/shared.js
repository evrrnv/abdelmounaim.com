(function () {
    var header = document.querySelector("header");
    var menu = document.getElementById("menu");

    menu.addEventListener("click", function () {
        header.classList.toggle("open");
    });
})();
