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

    // Initialize Partner Swiper
    const partnerSwiper = new Swiper('.partnerSwiper', {
      slidesPerView: 2,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
        1280: {
          slidesPerView: 6,
        }
      }
    });