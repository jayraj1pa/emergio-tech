document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
  
    hamburger.addEventListener('click', function () {
      navList.classList.toggle('show');
    });
  
    navList.addEventListener('click', function () {
      navList.classList.remove('show');
    });
  });
  