// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        const headerOffset = 80
        const elementPosition = target.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset
  
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    })
  })
  
  // Form submission handler
  document.querySelector(".contact-form").addEventListener("submit", function (e) {
    e.preventDefault()
    const phoneInput = this.querySelector('input[type="tel"]')
    const phone = phoneInput.value.trim()
  
    if (phone) {
      alert(`Gracias por tu interés. Te contactaremos al ${phone} en los próximos 30 minutos.`)
      phoneInput.value = ""
    } else {
      alert("Por favor, ingresa tu número de teléfono.")
    }
  })
  
  // Button click handlers
  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", function (e) {
      if (this.textContent.includes("Solicitar Cotización")) {
        e.preventDefault()
        window.open(
          "https://wa.me/56950032901?text=Bienvenido%20a%20XGPS%20Chile%2C%20mi%20nombre%20es%20carlos%2C%20en%20que%20puedo%20ayudarte!%20%C2%BFNecesitas%20una%20cotizacion%20de%20instalacion%20de%20gps%3F",
          "_blank",
        )
      } else if (this.textContent.includes("Ver Demo")) {
        e.preventDefault()
        alert("Demo disponible próximamente. ¡Contáctanos para una demostración personalizada!")
      } else if (this.textContent.includes("Llamar:")) {
        e.preventDefault()
        window.location.href = "tel:+5551234567"
      } else if (this.textContent.includes("WhatsApp")) {
        e.preventDefault()
        window.open(
          "https://wa.me/56950032901?text=Bienvenido%20a%20XGPS%20Chile%2C%20mi%20nombre%20es%20carlos%2C%20en%20que%20puedo%20ayudarte!%20%C2%BFNecesitas%20una%20cotizacion%20de%20instalacion%20de%20gps%3F",
          "_blank",
        )
      }
    })
  })
  
  // Header background on scroll
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header")
    if (window.scrollY > 100) {
      header.style.background = "rgba(255, 255, 255, 0.98)"
    } else {
      header.style.background = "rgba(255, 255, 255, 0.95)"
    }
  })
  
  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)
  
  // Observe elements for animation
  document.querySelectorAll(".service-card, .testimonial-card, .benefit-item").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
  
  // Menú hamburguesa para móvil
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
    });
    // Cerrar el menú al hacer click en un enlace
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('open');
      });
    });
  }
  