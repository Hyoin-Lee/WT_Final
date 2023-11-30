document.addEventListener('DOMContentLoaded', function () {
    let toggleBtn = document.getElementById('toggleBtn');
    let closeBtn = document.getElementById('closeBtn');
    let mobileMenu = document.getElementById('mobileMenu');
    let navLinks = document.getElementById('navLinks')
    let homeReload = document.getElementById("homeReload");

    toggleBtn.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
        toggleBtn.classList.add('hidden');

    });

    closeBtn.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
        toggleBtn.classList.toggle('hidden');
    });

    // Hide/show the navigation links and Resume button based on screen size
    window.addEventListener('resize', function () {
        if (window.innerWidth < 1024) {
            navLinks.classList.add('hidden');
        }
        else {
            navLinks.classList.remove('hidden');
        }
    });

    // home button reload
    homeReload.addEventListener('click', function (event) {
        event.preventDefault();
        location.reload();
    }) ;

});