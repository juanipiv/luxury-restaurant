// JS:

const navBar = document.querySelector(".nav-bar");
// 'navIcon' no se usa en el evento principal
// const navIcon = document.getElementById("nav-icon");

// const menu_on = document.querySelector('.menu-on'); // No usar para el menú móvil

const menuMobile = document.querySelector(".menu_mobile"); // Elemento que debe aparecer

if (navBar && menuMobile) {
  navBar.addEventListener("click", function () {
    navBar.classList.toggle("open"); // CORRECCIÓN CLAVE: Usar 'menuMobile' y la clase 'grow'
    menuMobile.classList.toggle("grow"); /* Subir la página al abrir el menú */ // La clase 'visible_menu' ya no se usa, ya que 'grow' maneja la visibilidad y animación.
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const menuLinks = document.querySelectorAll("#menu_mobile_nav li a");

  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Al hacer clic en un enlace del menú, cerrar el menú.
      navBar.classList.remove("open"); // navBar tiene la clase 'open'
      menuMobile.classList.remove("grow"); // Ocultar el menú móvil // Eliminar líneas que ya no son necesarias: // navIcon.classList.remove("open "); // navBar ya es el navIcon // menu_on.classList.remove("visible_menu");
    });
  });
}
