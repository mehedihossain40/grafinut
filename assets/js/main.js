/***************************************************
==================== JS INDEX ======================
01. Service List Hover Animation

****************************************************/


(function ($) {
  "use strict";
  
  /* === strategy__list (index) === */
  document.querySelectorAll('.strategy__list a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth',
        });
      }

      document.querySelectorAll('.strategy__list a').forEach(a => a.classList.remove('active'));
      this.classList.add('active');
    });
  });




  // Magnific Popup or similar plugin
  $('.popup-video').magnificPopup({
    type: 'iframe'
  });


  // ==== Portfolio Section (Isotope) ====
  $(".portfolio-section .filter-items").imagesLoaded(function () {
    var $grid = $(".portfolio-section .filter-items").isotope({
      itemSelector: ".single-item",
      layoutMode: "fitRows",
      fitRows: { gutter: 34 },
    });

    $(".portfolio-section .project-filter li").on("click", function () {
      $(".portfolio-section .project-filter li").removeClass("active");
      $(this).addClass("active");

      var selector = $(this).attr("data-filter");
      $grid.isotope({ filter: selector });
      return false;
    });
  });


  // Text Invert With Scroll 
  const split = new SplitText(".text-invertt", {
    type: "lines"
  });
  split.lines.forEach((target) => {
    gsap.to(target, {
      backgroundPositionX: 0,
      ease: "none",
      scrollTrigger: {
        trigger: target,
        scrub: 1,
        start: 'top 60%',
        end: "bottom center",
      }
    });
  });

  // rr_title_anim 
  if (document.querySelectorAll(".animation").length > 0) {
    let animation = document.querySelectorAll(".animation");

    animation.forEach((animation) => {
      let split = new SplitText(
        animation.querySelector(".rr_title_animation"),
        { type: "chars, words" }
      ),
        tl = gsap.timeline({
          scrollTrigger: {
            trigger: animation,
            start: "top bottom",
            toggleActions: "play none none reverse",
            onEnter: () => {
              tl.timeScale(2.3);
            },
            onLeaveBack: () => {
              tl.timeScale(2.3).reverse();
            },
          },
        });

      tl.to(animation.querySelector(".sup_animation"), {
        opacity: 1,
        x: -50,
        ease: "back",
      }).from(split.chars, {
        opacity: 0,
        y: 50,
        rotation: 1,
        duration: 2,
        ease: "back",
        stagger: 0.05,
      });
    });
  }


  // GSAP title animation
  if (document.querySelectorAll(".rr_title_anim").length > 0) {
    if ($('.rr_title_anim').length > 0) {
      let splitTitleLines = gsap.utils.toArray(".rr_title_anim");
      splitTitleLines.forEach(splitTextLine => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: splitTextLine,
            start: 'top 90%',
            end: 'bottom 80%',
            scrub: false,
            markers: false,
            toggleActions: 'play none none '
          }
        });

        const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
        gsap.set(splitTextLine, { perspective: 400 });
        itemSplitted.split({ type: "lines" })
        tl.from(itemSplitted.lines, {
          duration: 1,
          delay: 0.3,
          opacity: 0,
          rotationX: -80,
          force3D: true,
          transformOrigin: "top center -50",
          stagger: 0.1
        });
      });
    }
  }


  //fade-top gsap animation
  if ($(".fade-wrapper").length > 0) {
    $(".fade-wrapper").each(function () {
      var section = $(this);
      var fadeItems = section.find(".fade-top");

      fadeItems.each(function (index, element) {
        var delay = index * 0.15;

        gsap.set(element, {
          opacity: 0,
          y: 150,
        });

        ScrollTrigger.create({
          trigger: element,
          start: "top 100%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
          scrub: 0.5,
          onEnter: function () {
            gsap.to(element, {
              opacity: 1,
              y: 0,
              duration: 1,
              delay: delay,
            });
          },
          once: true,
        });
      });
    });
  }

  // fade-left gsap animation
  if ($(".fade-wrapper").length > 0) {
    $(".fade-wrapper").each(function () {
      var section = $(this);
      var fadeItems = section.find(".fade-left");

      fadeItems.each(function (index, element) {
        var delay = index * 0.15;

        gsap.set(element, {
          opacity: 0,
          x: -150, 
        });

        ScrollTrigger.create({
          trigger: element,
          start: "top 100%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
          scrub: 0.5,
          onEnter: function () {
            gsap.to(element, {
              opacity: 1,
              x: 0,
              duration: 1,
              delay: delay,
            });
          },
          once: true,
        });
      });
    });
  }

  // fade-right gsap animation
if ($(".fade-wrapper").length > 0) {
  $(".fade-wrapper").each(function () {
    var section = $(this);
    var fadeItems = section.find(".fade-right");

    fadeItems.each(function (index, element) {
      var delay = index * 0.15;

      gsap.set(element, {
        opacity: 0,
        x: 150,
      });

      ScrollTrigger.create({
        trigger: element,
        start: "top 100%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
        scrub: 0.9,
        onEnter: function () {
          gsap.to(element, {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: delay,
          });
        },
        once: true,
      });
    });
  });
}


  // testimonial-active
  var testimonial_3_active = new Swiper(".testimonial-active", {
    slidesPerView: 2,
    spaceBetween: 24,
    loop: true,
    autoplay: true,
    speed: 600,
    navigation: {
      nextEl: ".rr-button-next",
      prevEl: ".rr-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
      1200: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
      1400: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
    },
  });

  // progress-outer

  document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".progress-outer");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const outer = entry.target;

            const bar = outer.querySelector(".progress-bar");
            const num = outer.querySelector(".progress-num");

            const value = bar.dataset.width;

            // text set
            num.textContent = value + "%";

            // animate bar
            bar.style.width = value + "%";

            // animate number position
            num.style.left = value + "%";

            observer.unobserve(outer); // ekbar animate hole ar na
          }
        });
      },
      { threshold: 0.3 }
    );

    items.forEach((item) => observer.observe(item));
  });


  $(function () {
    function setPlan($item, plan) {
      const isYearly = plan === "yearly";
  
      $item.find('.pricing__switch-label[data-plan="monthly"]').toggleClass("is-active", !isYearly);
      $item.find('.pricing__switch-label[data-plan="yearly"]').toggleClass("is-active", isYearly);
      $item.find(".pricing__toggle-input").prop("checked", isYearly);
      $item.find(".pricing__duration-value").text(isYearly ? "Annually" : "Monthly");
  
      const $priceWrap = $item.find(".pricing__price");
      const value = isYearly ? $priceWrap.data("annually") : $priceWrap.data("monthly");
  
      $priceWrap.find(".price").stop(true, true).fadeOut(150, function () {
        $(this).text(value).fadeIn(150);
      });
    }
  
    // Button click
    $(".pricing__switch-label").on("click", function () {
      const $item = $(this).closest(".pricing__item");
      setPlan($item, $(this).data("plan"));
    });
  
    // Toggle change
    $(".pricing__toggle-input").on("change", function () {
      const $item = $(this).closest(".pricing__item");
      setPlan($item, this.checked ? "yearly" : "monthly");
    });
  });



  /* === rr-btn-primary (index) === */
  const buttons = document.querySelectorAll(".rr-btn-primary");
  buttons.forEach(button => {
    const textEl = button.querySelector(".text");

    if (!textEl) return;

    const hasIcon = button.querySelector(".left-icon") || button.querySelector("i");
    if (hasIcon) {
      button.classList.add("has-icon");
    }

    const text = textEl.textContent;
    textEl.innerHTML = "";
    text.split("").forEach((char, index) => {
      const span = document.createElement("span");
      span.innerHTML = char === ' ' ? '&nbsp;' : char;
      const delay = (text.length - index) * 0.05;
      span.style.transitionDelay = `${delay}s`;
      textEl.appendChild(span);
    });

    button.addEventListener("mouseenter", () => {
      const spans = textEl.querySelectorAll("span");
      spans.forEach(span => {
        span.classList.remove("animate");
        void span.offsetWidth;
        span.classList.add("animate");
      });
    });
  });




  const select = document.querySelector(".custom-select");
  const selected = select.querySelector(".selected");
  const options = select.querySelectorAll(".dropdown li");

  selected.addEventListener("click", () => {
    select.classList.toggle("active");
  });

  options.forEach(option => {
    option.addEventListener("click", () => {
      selected.innerHTML = option.innerHTML + '<i class="fa-light fa-angle-down"></i>';
      select.classList.remove("active");
    });
  });

  // click outside close
  document.addEventListener("click", (e) => {
    if (!select.contains(e.target)) {
      select.classList.remove("active");
    }
  });


  var testimonial_active = new Swiper(".testimonial__active", {
    spaceBetween: 20,
    loop: true,
    autoplay: true,
    speed: 2000,
    navigation: {
      nextEl: ".rr-button-next",
      prevEl: ".rr-button-prev",
    },
    pagination: {
      el: ".testimonial-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      993: {
        slidesPerView: 3,
      },

      1400: {
        slidesPerView: 4,
        slidesPerGroup: 1,
      },
    },
  });


  if ($(".work-process__section").length > 0) {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
         return gsap.to(".work-process-panel-pin", {
              opacity: 1,
              scrollTrigger: {
                   trigger: ".work-process__section",
                   scrub: 1,
                   start: "top -30%",
                   end: "bottom 108%",
                   pin: ".work-process-panel-pin",
                   markers: false,
                   toggleActions: "play reverse play reverse",
              },
         });
    });
}

if (document.querySelectorAll(".progress-ring__circle").length > 0) {
  document.addEventListener("DOMContentLoaded", () => {
       const circle = document.querySelector(".progress-ring__circle");
       const stepCounter = document.getElementById("step-counter");
       const section = document.querySelector(".work-process__section");

       const totalSteps = 4;
       let currentStep = 1;
       const circumference = 830;

       function resetProgress() {
            circle.style.strokeDashoffset = circumference;
            stepCounter.textContent = `1/4`;
       }

       function updateProgress(step) {
            const progress = (step / totalSteps) * circumference;
            circle.style.strokeDashoffset = circumference - progress;
            stepCounter.textContent = `${step}/4`;
       }

       window.addEventListener("scroll", () => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const scrollPos = window.scrollY;
            const windowHeight = window.innerHeight;
            const maxScroll = sectionHeight - windowHeight;

            if (scrollPos < sectionTop + sectionHeight * 0.1) {
                 resetProgress();
                 return;
            }

            if (scrollPos > sectionTop + sectionHeight * 0.9) {
                 resetProgress();
                 return;
            }

            const relativeScroll = scrollPos - sectionTop;
            const step = Math.ceil(
                 (relativeScroll / maxScroll) * totalSteps
            );

            if (
                 step >= 1 &&
                 step <= totalSteps &&
                 step !== currentStep
            ) {
                 currentStep = step;
                 updateProgress(step);
            }
       });

       resetProgress();
  });
}


$(function () {
  function tick() {
    $(".office__time").each(function () {
      const tz = $(this).data("timezone");
      $(this).text(
        new Date().toLocaleTimeString("en-GB", { timeZone: tz, hour12: false })
      );
    });
  }
  tick();
  setInterval(tick, 1000);
});



(() => {
  const root = document.querySelector('.service-page');
  if (!root) return;

  const items = [...root.querySelectorAll('.service-page__item')];
  const OPEN = 'service-page__item--open';

  const collapsedHeight = (item) => {
    const head = item.querySelector('.service-page__head');
    const cs = getComputedStyle(item);
    const singleCol = cs.gridTemplateColumns.trim().split(/\s+/).length === 1;

    if (!singleCol) return head.offsetHeight;

    const headBottom = head.offsetTop + head.offsetHeight;
    return cs.boxSizing === 'border-box'
      ? headBottom + parseFloat(cs.paddingBottom)
      : headBottom - parseFloat(cs.paddingTop);
  };

  const hasTransition = (item) => parseFloat(getComputedStyle(item).transitionDuration) > 0;

  function setState(item, open, animate = true) {
    const collapsed = collapsedHeight(item);
    const animated = animate && hasTransition(item);

    item.classList.toggle(OPEN, open);
    item.style.setProperty('--collapsed', `${collapsed}px`);
    item.querySelector('.service-page__trigger').setAttribute('aria-expanded', open);
    item.querySelectorAll('[data-panel]').forEach((el) => { el.inert = !open; });

    if (!animated) {
      item.style.height = open ? 'auto' : `${collapsed}px`;
      return;
    }

    if (open) {
      item.style.height = `${item.offsetHeight}px`;
      item.offsetHeight; // reflow
      item.style.height = `${item.scrollHeight}px`;
    } else {
      item.style.height = `${item.offsetHeight}px`;
      item.offsetHeight; // reflow
      item.style.height = `${collapsed}px`;
    }
  }

  function toggle(item) {
    const willOpen = !item.classList.contains(OPEN);
    items.forEach((other) => {
      if (other !== item && other.classList.contains(OPEN)) setState(other, false);
    });
    setState(item, willOpen);
  }

  // animation shesh hole open item auto height
  items.forEach((item) => {
    item.addEventListener('transitionend', (e) => {
      if (e.target !== item || e.propertyName !== 'height') return;
      if (item.classList.contains(OPEN)) item.style.height = 'auto';
    });
  });

  function init() {
    items.forEach((item) => setState(item, item.classList.contains(OPEN), false));
    requestAnimationFrame(() => root.classList.add('is-ready'));
  }

  items.forEach((item) => {
    const trigger = item.querySelector('.service-page__trigger');
    const icon = item.querySelector('.service-page__icon');

    trigger.addEventListener('click', () => toggle(item));
    if (icon) {
      icon.style.cursor = 'pointer';
      icon.addEventListener('click', () => toggle(item));
    }
  });

  let t;
  window.addEventListener('resize', () => {
    clearTimeout(t);
    t = setTimeout(() => {
      items.forEach((item) => {
        const collapsed = collapsedHeight(item);
        item.style.setProperty('--collapsed', `${collapsed}px`);
        if (!item.classList.contains(OPEN)) item.style.height = `${collapsed}px`;
      });
    }, 150);
  });

  (document.fonts?.ready ?? Promise.resolve()).then(init);
})();


document.addEventListener("DOMContentLoaded", function () {
  ShowcaseSnapSlider();
});

function ShowcaseSnapSlider() {
  if ($('.rr-snap-slider-holder').length > 0) {

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1199px)", () => {
      const snapSlides = gsap.utils.toArray(".rr-snap-slide");

      snapSlides.forEach((slide, i) => {
        const imageWrappers = slide.querySelectorAll(".img-mask");
        const isLastSlide = i === snapSlides.length - 1;
        const isFirstSlide = i === 0;

        gsap.fromTo(
          imageWrappers,
          {
            yPercent: isFirstSlide ? 0 : -100
          },
          {
            yPercent: isLastSlide ? 0 : 100,
            scrollTrigger: {
              trigger: slide,
              scrub: true,
              start: isFirstSlide ? "top top" : "top bottom",
              end: isLastSlide ? "top top" : undefined,
            },
            ease: "none",
          }
        );
      });
    });
  }
}


new Swiper('.word-slider__swiper', {
  direction: 'vertical',
  slidesPerView: 5,
  centeredSlides: true,
  spaceBetween: 10,
  loop: true,
  loopAdditionalSlides: 5,
  speed: 700,
  allowTouchMove: false,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
});


document.addEventListener('DOMContentLoaded', () => {
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  console.log('canHover:', canHover);

  document.querySelectorAll('.work-section__item').forEach((item) => {
    const video = item.querySelector('.work-section__video');
    if (!video) return;

    item.addEventListener('mouseenter', () => {
      item.classList.add('is-playing');
      video.play().catch((err) => console.log('play error:', err));
    });

    item.addEventListener('mouseleave', () => {
      item.classList.remove('is-playing');
      video.pause();
      setTimeout(() => {
        if (!item.classList.contains('is-playing')) video.currentTime = 0;
      }, 400);
    });
  });
});


AOS.init({
  once: true
});


const thumbs = document.querySelectorAll('.testimonial__thumb');

function stopAllVideos() {
  thumbs.forEach(thumb => {
    const video = thumb.querySelector('.testimonial__player');
    video.pause();
    thumb.classList.remove('is-playing');
  });
}

thumbs.forEach(thumb => {
  const playBtn = thumb.querySelector('.testimonial__play');
  const video = thumb.querySelector('.testimonial__player');

  playBtn.addEventListener('click', e => {
    e.preventDefault();
    stopAllVideos();
    thumb.classList.add('is-playing');
    video.play();
  });

  // video shesh hole abar image + play icon dekhabe
  video.addEventListener('ended', () => {
    thumb.classList.remove('is-playing');
    video.currentTime = 0;
  });
});


(function () {
  const loader = document.querySelector("[data-loader]");
  const wordEl = document.querySelector("[data-loader-word]");
  if (!loader || !wordEl) return;

  const words = [
    "Ola", "Bonjour", "こんにちは", "স্বাগতম", "Merhaba", 
  ];

  function runLoader() {
    const tl = gsap.timeline();

    words.forEach((word, i) => {
      const isLast = i === words.length - 1;
      tl.add(() => (wordEl.textContent = word))
        .fromTo(
          wordEl,
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.15, ease: "power2.out" }
        )
        .to({}, { duration: isLast ? 0.6 : 0.12 });
    });

    tl.to(wordEl, { autoAlpha: 0, y: -20, duration: 0.3, ease: "power2.in" })
      .to(loader, { yPercent: -100, duration: 0.9, ease: "power4.inOut" })
      .set(loader, { display: "none" })
      .add(() => {
        document.documentElement.classList.remove("is-loading");
        if (window.ScrollTrigger) ScrollTrigger.refresh();
        window.dispatchEvent(new Event("loader:done")); // hero animation ekhan theke start korte paro
      });
  }

  window.addEventListener("load", runLoader);
})();

})(jQuery);


