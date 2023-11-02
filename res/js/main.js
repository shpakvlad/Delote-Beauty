/************************************************/
/*                     MENU                     */
/************************************************/
let menuBtn = document.querySelector("#menu-btn");
let closeMenuBtn = document.querySelector(".close-menu-btn");
let menu = document.querySelector(".menu");

/* ===== open ===== */
menuBtn.onclick = function (event) {
    menu.style.right = "0px";
    menu.style.width = "475px";
};

/* ===== close ===== */
closeMenuBtn.onclick = function (event) {
    menu.style.right = "-475px";
    menu.style.width = "0px";
};

/* ===== END ===== */
