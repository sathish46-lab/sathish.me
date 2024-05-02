document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.querySelector(".theme-switch__checkbox");
    const navMenu = document.querySelector(".nav_menu");
  
    // Function to toggle dark mode
    function toggleDarkMode(darkMode) {
      document.body.classList.toggle("dark-mode", darkMode);
      if (darkMode) {
        localStorage.setItem("darkMode", "true");
      } else {
        localStorage.removeItem("darkMode");
      }
    }
    //scroll me blurr and stickey  asiba//
    window.addEventListener('scroll', function() {
      const header = document.querySelector('header');
      const scrollPosition = window.scrollY;
  
      if (scrollPosition > 0) {
          header.classList.add('sticky-header');
      } else {
          header.classList.remove('sticky-header');
      }
  });
  
    //scroll me shadow  asiba//
    window.onscroll = function() {headerShadow()};
   
    function headerShadow() {
      const navHeader =document.getElementById("myHeader");
  
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
  
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height="70px";
        navHeader.style.lineHeight = "70px";
      } else {
  
        navHeader.style.boxShadow = "none";
        navHeader.style.height="70px";
        navHeader.style.lineHeight = "70px";
      }
    }
  
    // Check local storage for dark mode preference//
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode === "true") {
      checkbox.checked = true;
      toggleDarkMode(true);
    }
  
    // Toggle dark mode when checkbox changes
    checkbox.addEventListener("change", function () {
      toggleDarkMode(this.checked);
    });
  
    // Toggle menu display
    const menuToggle = document.querySelector(".menu-toggle");
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("display-menu");
    });
  });