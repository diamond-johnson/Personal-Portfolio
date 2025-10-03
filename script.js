// ========================== toggle icon navbar =============================
let menuIcon = document.queryselector('#menu-icon');
let navbar = document.queryselector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}