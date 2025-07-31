// Inisialisasi AOS
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });

    // Preloader
    window.addEventListener('load', function() {
      const preloader = document.getElementById('preloader');
      setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 500);
      }, 800);
    });

    // Navbar Mobile Toggle
    const toggleBtn = document.getElementById('toggleMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    const navbar = document.getElementById('navbar');

    toggleBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Navbar Hide on Scroll
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        navbar.style.transform = 'translateY(-100%)';
      } else {
        navbar.style.transform = 'translateY(0)';
      }

      lastScrollY = currentScrollY;
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('#mobileMenu a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });

    // Toggle dropdown departemen di mobile
    const mobileDepartemenBtn = document.getElementById('mobileDepartemenBtn');
    const mobileDepartemenMenu = document.getElementById('mobileDepartemenMenu');

    if (mobileDepartemenBtn && mobileDepartemenMenu) {
      mobileDepartemenBtn.addEventListener('click', () => {
        mobileDepartemenMenu.classList.toggle('hidden');
        mobileDepartemenBtn.querySelector('i').classList.toggle('fa-chevron-down');
        mobileDepartemenBtn.querySelector('i').classList.toggle('fa-chevron-up');
      });
    }

    // Initialize Swiper
    const swiper = new Swiper('.pengurus-swiper', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: true,
      spaceBetween: 30,
      slidesPerView: 1,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        }
      }
    });