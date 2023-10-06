document.addEventListener("DOMContentLoaded", function() {
  AOS.init();

  // *********************************   slider  ******************************************


  const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 40,

    pagination: {
      el: ".swiper-pagination",
      type: "bullets"
    },
    // autoplay: {
    //   delay: 5000
    // },
    breakpoints: {
      769: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      
    }
  });

  if (window.innerWidth <= 768) {
    const swiper3 = new Swiper("#swiper3", {
      slidesPerView: 1,
      spaceBetween: 40,
  
      pagination: {
        // el: ".swiper-pagination",
        type: "bullets",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        hideOnClick: false
      },
      autoplay: {
        delay: 5000
      },

    });
  }
  
    const swiper2 = new Swiper("#swiper2", {
      slidesPerView: 1,
      spaceBetween: 40,

      pagination: {
        el: ".swiper-pagination",
        type: "bullets"
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        // hideOnClick: true
      },
      autoplay: {
        delay: 5000
      }
    });

  //  *************************   Slider 360  **************************************************

  const slider = document.querySelector(".modal__360-wrap");
  const prevBtn = document.querySelector(".modal__360-prev");
  const nextBtn = document.querySelector(".modal__360-next");
  const playBtn = document.querySelector(".modal__360-play");
  const images = document.querySelectorAll(".modal__360-img");

  let currentIndex = 0;
  let intervalId = null;
  let isPlaying = false;

  function showSlide(index) {
    images.forEach(image => (image.style.display = "none"));
    images[index].style.display = "block";
  }

  function goToPrev(event) {
    event.preventDefault();
    if (currentIndex === 0) {
      currentIndex = images.length - 1;
    } else {
      currentIndex--;
    }
    showSlide(currentIndex);
  }

  function goToNext(event) {
    event.preventDefault();
    if (currentIndex === images.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    showSlide(currentIndex);
  }

  function togglePlay(event) {
    event.preventDefault();
    if (!isPlaying) {
      // если проигрывание не запущено
      intervalId = setInterval(() => {
        goToNext(event);
      }, 100);
      playBtn.innerHTML = '<img src="./img/360/360/pause.svg" alt="pause" />';
      isPlaying = true;
    } else {
      // если проигрывание запущено
      clearInterval(intervalId);
      playBtn.innerHTML = '<img src="./img/360/play.svg" alt="play" />';
      isPlaying = false;
    }
  }

  prevBtn.addEventListener("click", goToPrev);
  nextBtn.addEventListener("click", goToNext);
  playBtn.addEventListener("click", togglePlay);

  showSlide(currentIndex);

  // **************************************  accordion  *****************************************

  let accordion = document.querySelector(".answerblock__items");
  let tab = document.querySelectorAll(".answerblock__item");
  let answer = document.querySelectorAll(".answerblock__item-text");
  let plus = document.querySelectorAll(".answerblock__icon");
  let close = document.querySelectorAll(".answerblock__icon-close");
  let title = document.querySelectorAll(".answerblock__item-title ");

  accordion.addEventListener("click", e => {
    const target = e.target.closest(".answerblock__item");

    if (target) {
      tab.forEach((item, index) => {
        if (item === target && target.classList.toggle("active")) {
          answer[index].classList.add("active");
          title[index].classList.add("active-item");
          tab[index].classList.add("answerblock__item-active");
          plus[index].style.display = "none";
          close[index].style.display = "block";
        } else {
          answer[index].classList.remove("active");
          title[index].classList.remove("active-item");
          tab[index].classList.remove("answerblock__item-active");
          plus[index].style.display = "block";
          close[index].style.display = "none";
        }
      });
    }
  });

  // tabs

  const itemLeft = document.querySelectorAll(".shooting__video-item");
  const img = document.querySelectorAll(".shooting__video-play");

  itemLeft.forEach((item, index) => {
    item.addEventListener("mouseover", () => {
      img.forEach(i => {
        i.classList.remove("active");
      });
      img[index].classList.add("active");
    });
  });

  //**************************  tabs pay answer *****************************

  // tabs 4 режима

  const itemTop = document.querySelectorAll(".tabs__item");
  const imgBlock = document.querySelectorAll(".tabs__container");

  itemTop.forEach((item, index) => {
    item.addEventListener("mouseover", () => {
      itemTop.forEach(item => {
        item.classList.remove("active-tab");
      });
      item.classList.add("active-tab");
      imgBlock.forEach(i => {
        i.classList.remove("active");
      });
      imgBlock[index].classList.add("active");
    });
  });

  // tabs интерфейс

  const itemIntLeft = document.querySelectorAll(".interface__item");
  const imgIntBlock = document.querySelectorAll(".interface__img");

  itemIntLeft.forEach((item, index) => {
    item.addEventListener("mouseover", () => {
      imgIntBlock.forEach(i => {
        i.classList.remove("active");
      });
      imgIntBlock[index].classList.add("active");
    });
  });

  //tabs slider

  const itemSlide = document.querySelectorAll(".item-slide");
  const slideBlock = document.querySelectorAll(".examination .swiper");

  console.log(itemSlide);
  console.log(slideBlock);

  itemSlide.forEach((item, index) => {
    item.addEventListener("mouseover", () => {
      itemSlide.forEach(item => {
        item.classList.remove("active-tab");
      });
      item.classList.add("active-tab");
      slideBlock.forEach(i => {
        i.classList.remove("active");
      });
      slideBlock[index].classList.add("active");
    });
  });

  // alert

  const alertTabs = document.querySelectorAll(".alert__tab");
  const alertImgBlock = document.querySelectorAll(".alert__animation");

  alertTabs.forEach((item, index) => {
    item.addEventListener("mouseover", () => {
      alertTabs.forEach(item => {
        item.classList.remove("active-tab");
      });
      item.classList.add("active-tab");

      alertImgBlock.forEach(item => {
        item.classList.remove("active");
      });
      alertImgBlock[index].classList.add("active");
    });
  });

  //hover доставка и ответы

  const itemHover = document.querySelectorAll(".answer__pay");
  const sectionHover = document.querySelectorAll(".section__hover");

  itemHover.forEach((item, index) => {
    item.addEventListener("mouseover", () => {
      itemHover.forEach(item => {
        item.classList.remove("active-tab");
      });
      item.classList.add("active-tab");
      sectionHover.forEach(item => {
        item.classList.remove("active");
      });
      sectionHover[index].classList.add("active");
    });
  });

  // переключатель checkbox

  const toggleCheckbox = document.querySelector('input[type="checkbox"]');
  const briefly = document.querySelector(".charachterisitc__wrapper");
  const detail = document.querySelector(".elevanth__tabl-wrapper");
  const brieflyActive = document.querySelector(".characteristic__briefly");
  const detailActive = document.querySelector(".characteristic__detail");

  toggleCheckbox.addEventListener("change", () => {
    if (toggleCheckbox.checked) {
      brieflyActive.classList.remove("_active");
      detailActive.classList.add("_active");
      briefly.style.display = "none";
      detail.style.display = "block";
    } else {
      brieflyActive.classList.add("_active");
      detailActive.classList.remove("_active");
      briefly.style.display = "block";
      detail.style.display = "none";
    }
  });

  // бургер меню

  const navbarMenu = document.querySelector(".navbar");
  const buttonBurger = document.querySelector(".header__burger");
  const buttonBurgerClose = document.querySelector(".header__burger-close");
  const menuLinks = document.querySelectorAll(".menu__list a");

  buttonBurger.addEventListener("click", () => {
    navbarMenu.classList.add("navbar__visible");
    buttonBurger.style.display = "none";
    buttonBurgerClose.style.display = "block";
  });

  buttonBurgerClose.addEventListener("click", () => {
    navbarMenu.classList.remove("navbar__visible");
    buttonBurger.style.display = "block";
    buttonBurgerClose.style.display = "none";
  });

  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      navbarMenu.classList.remove("navbar__visible");
      buttonBurger.style.display = "block";
      buttonBurgerClose.style.display = "none";
    });
  });

  // загрузка страниц при скролле

  let page = 1;
  let perPage = 8;

  function loadMoreData() {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "load_data.php", true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        //добавляем новые данные в контейнер
        document.getElementById("data-container").innerHTML += xhr.responseText;

        page++;
      }
    };
    xhr.send("page=" + page + "&perPage" + perPage);
  }
  window.onscroll = function() {
    // Вычисляем высоту страницы и расстояние до конца страницы
    var scrollTop =
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : (document.documentElement ||
            document.body.parentNode ||
            document.body).scrollTop;
    var windowHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    var documentHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );

    var bottomOffset = documentHeight - (scrollTop + windowHeight);

    // Если расстояние до конца страницы меньше 100 пикселей, загружаем новые данные
    if (bottomOffset < 100) {
      loadMoreData();
    }
  };

  const cursor = document.querySelector(".cursor");

  document.addEventListener("mousemove", function(e) {
    cursor.style.cssText =
      "left: " + e.clientX + "px; top: " + e.clientY + "px;";
  });

  document.addEventListener("mouseover", function(e) {
    if (e.target.closest("button, a")) {
      cursor.classList.add("_over");
    }
  });

  document.addEventListener("mouseout", function(e) {
    if (e.target.closest("button, a")) {
      cursor.classList.remove("_over");
      cursor.style.display = "none"; // добавили скрытие курсора
    }
  });

  document.addEventListener("mousedown", function(e) {
    if (e.target.closest("button, a")) {
      cursor.classList.add("click");
      cursor.classList.remove("_over");
      setTimeout(function() {
        cursor.classList.remove("click");
        cursor.classList.add("_over");
      }, 500);
    }
  });

  document.addEventListener("mouseenter", function(e) {
    cursor.style.display = "block"; // добавили отображение курсора
  });

  // ==========================================================================
  // ====================   Плавный скролл по якорям  =========================
  // ==========================================================================

  document.querySelectorAll("a.scroll").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  const inputMask = new Inputmask("+7 (999) 999-99-99");
  const forms = document.querySelectorAll(".form__element");

  forms.forEach(form => {
    const telSelector = form.querySelector('input[type="tel"]');
    inputMask.mask(telSelector);

    new window.JustValidate(`#${form.id}`, {
      rules: {
        tel: {
          required: true,
          function: () => {
            const phone = telSelector.inputmask.unmaskedvalue();
            return Number(phone) && phone.length === 10;
          }
        }
      },
      submitHandler: async function(form) {
        const formData = new FormData(form);

        try {
          const response = await fetch(form.action, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData)
          });

          if (response.ok) {
            console.log("Отправлено");

            // Отправка почты
            const mailData = new FormData();
            mailData.append("name", formData.get("name"));
            mailData.append("phone", formData.get("phone"));
            mailData.append("type", "mail");

            const mailResponse = await fetch("mail.php", {
              method: "POST",
              headers: { "Content-Type": "multipart/form-data" },
              body: mailData
            });

            if (mailResponse.ok) {
              console.log(await mailResponse.text());
            }

            // Показываем модальное окно с сообщением об успехе
            const modalThanksWrapper = document.querySelector(
              ".modal__thanks-wrapper"
            );
            modalThanksWrapper.style.display = "block";
          } else {
            console.error("Ошибка при отправке формы");
          }
        } catch (error) {
          console.error(error);
        }

        form.reset();
      }
    });
  });

  const lastForms = document.querySelector(".purchase__button");
  const form4 = document.querySelector("#form4");

  lastForms.addEventListener("click", () => {
    // Получим данные формы
    const formData = new FormData(form4);

    // Отправим данные на сервер через AJAX запрос
    fetch(form4.action, {
      method: "POST",
      body: formData
    })
      .then(response => {
        if (response.ok) {
          // Показываем модальное окно с сообщением об успехе
          const modalThanksWrapper = document.querySelector(
            ".modal__thanks-wrapper"
          );
          modalThanksWrapper.style.display = "block";
        }
      })
      .catch(error => {
        // Показываем модальное окно с сообщением об ошибке
        console.log("Ошибка при отправке формы");
      });
  });

  // Найдем кнопку закрытия модального окна
  const closeButtons = document.querySelectorAll(".thanks__close");
  Array.from(closeButtons).forEach(button => {
    button.addEventListener("click", () => {
      const modalThanksWrapper = document.querySelector(
        ".modal__thanks-wrapper"
      );
      modalThanksWrapper.style.display = "none";
    });
  });

  const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
      const trigger = document.querySelectorAll(triggerSelector);
      const modal = document.querySelector(modalSelector);
      const close = modal.querySelectorAll(closeSelector);

      trigger.forEach(item => {
        item.addEventListener("click", e => {
          e.preventDefault();
          modal.style.display = "block";
          document.body.style.overflow = "hidden";
        });
      });

      close.forEach(item => {
        item.addEventListener("click", e => {
          e.preventDefault();
          modal.style.display = "none";
          document.body.style.overflow = "";
        });
      });

      modal.addEventListener("click", e => {
        if (e.target === modal) {
          modal.style.display = "none";
          document.body.style.overflow = "";
        }
      });
    }

    const callBtn = document.querySelector(".header__button");
    const callModal = document.querySelector(".modal__call-wrapper");
    const callModalClose = document.querySelector(
      ".modal__call-wrapper .popup-close"
    );

    // bindModal(
    //   ".header__button",
    //   ".modal__call-wrapper",
    //   ".modal__call-wrapper .popup-close"

    // bindModal(
    //   ".additional__link",
    //   ".modal__additional-wrapper",
    //   ".modal__additional-wrapper .popup-close"
    // );
    bindModal(
      ".adapter__left-scheme",
      ".modal__adapter-wrap",
      ".modal__adapter-wrap .popup-close"
    );
    bindModal(".cartreader__button", ".offer", ".offer .popup-close");
    bindModal(".adapter__button", ".offer", ".offer .popup-close");
    bindModal(".certificate__one", ".modal", ".modal .popup-close");
    bindModal(".promotion__button", ".offer", ".offer .popup-close");
    bindModal(".button__hero", ".offer", ".offer .popup-close");
    bindModal(".memory__button", ".offer", ".offer .popup-close");
    bindModal(".additional__button", ".offer", ".offer .popup-close");
    bindModal(".step__button", ".offer", ".offer .popup-close");
    bindModal(".burger__button", ".offer", ".offer .popup-close");
    bindModal(".button__video ", ".offer", ".offer .popup-close");
    bindModal(
      ".review360__button",
      ".modal__360",
      ".modal__360 .modal__360-close"
    );
  };

  modals();

  const modalPromotion = () => {
    const buttonProm = document.querySelectorAll(".offer__wrap-link");
    const modalsProm = document.querySelectorAll(".modal__promotion-one");
    const offer = document.querySelector(".offer");

    let scrollTopPosition;

    const openModal = modal => {
      scrollTopPosition = window.pageYOffset; // сохраняем текущее положение страницы
      modal.style.display = "block";
      offer.style.overflow = "hidden"; // скрываем скролл на блоке offer
      document.addEventListener("keydown", closeModalOnESC);
    };

    const closeModal = modal => {
      modal.style.display = "none";
      offer.style.overflow = "auto"; // показываем скролл на блоке offer
      window.scrollTo(0, scrollTopPosition); // устанавливаем сохраненное положение страницы
      document.removeEventListener("keydown", closeModalOnESC);
    };

    const closeModalOnESC = event => {
      if (event.keyCode === 27) {
        const openModal = document.querySelector(
          '.modal__promotion-one[style*="display: block"]'
        );
        closeModal(openModal);
      }
    };

    document.addEventListener("click", event => {
      const target = event.target;

      // Проверяем, был ли клик на кнопке открытия модального окна
      for (let i = 0; i < buttonProm.length; i++) {
        if (target === buttonProm[i]) {
          event.preventDefault();
          openModal(modalsProm[i]);
          return;
        }
      }

      // Проверяем, был ли клик на кнопке закрытия модального окна
      if (target.classList.contains("button__promotion-close")) {
        console.log("Клик на кнопке закрытия модального окна");
        const modal = target.closest(".modal__promotion-one");
        closeModal(modal);
        console.log("Функция closeModal выполнена");
      }

      // Проверяем, был ли клик вне модального окна
      for (let i = 0; i < modalsProm.length; i++) {
        if (target === modalsProm[i]) {
          closeModal(target);
          return;
        }
      }
    });
  };

  modalPromotion();

  const modalAdditional = () => {
    const buttonAdditionalList = document.querySelectorAll(".additional__link");
    const modalAdditionalList = document.querySelectorAll(
      ".modal__additional-wrapper"
    );

    const openModal = modal => {
      modal.style.display = "block";
      document.addEventListener("keydown", closeModalOnESC);
    };

    const closeModal = modal => {
      modal.style.display = "none";
      document.removeEventListener("keydown", closeModalOnESC);
    };

    const closeModalOnESC = event => {
      if (event.keyCode === 27) {
        const openModal = document.querySelector(
          '.modal__additional-wrapper[style*="display: block"]'
        );
        closeModal(openModal);
      }
    };

    document.addEventListener("click", event => {
      const target = event.target;

      // Проверяем, был ли клик на кнопке открытия модального окна
      for (let i = 0; i < buttonAdditionalList.length; i++) {
        if (target === buttonAdditionalList[i]) {
          event.preventDefault();
          openModal(modalAdditionalList[i]);
          return;
        }
      }

      // Проверяем, был ли клик на кнопке закрытия модального окна
      if (target.classList.contains("popup-close")) {
        console.log("Клик на кнопке закрытия модального окна");
        const modal = target.closest(".modal__additional-wrapper");
        closeModal(modal);
        console.log("Функция closeModal выполнена");
      }

      // Проверяем, был ли клик вне модального окна
      for (let i = 0; i < modalAdditionalList.length; i++) {
        if (target === modalAdditionalList[i]) {
          closeModal(target);
          return;
        }
      }
    });
  };

  modalAdditional();

  // комплектующие

  const itemsComplect = document.querySelectorAll(".equipment__item");
  const itemImg = document.querySelectorAll(".img__equipment");
  const itemImgBlock = document.querySelectorAll(".img__equipment-block");

  itemsComplect.forEach((item, index) => {
    item.addEventListener("mouseover", () => {
      itemImg[index].style.display = "none";
      itemImgBlock[index].style.display = "block";
    });

    item.addEventListener("mouseout", () => {
      itemImg[index].style.display = "block";
      itemImgBlock[index].style.display = "none";
    });
  });

  // modal additional
  //   ".additional__link",
  //   ".modal__additional-wrapper",
  //   ".modal__additional-wrapper .popup-close"

  // const buttonAdditional = document.querySelectorAll(".additional__link");
  // const modalAdditionalOverlay = document.querySelectorAll(".modal__additional-wrapper");
  // const modalAdditional = document.querySelector(".modal__additional");
  // const overlay = document.querySelector(".overlay");
  // let activeModal = null;

  // buttonAdditional.forEach(button => {
  //   button.addEventListener("click", event => {
  //     event.preventDefault();
  //     const index = event.target.getAttribute("data-index");
  //     const modal = document.querySelector(`.modal__additional-wrapper[data-index="${index}"]`);
  //     if (modal) {
  //       showModal(modal);
  //     }
  //   });
  // });

  // function showModal(modal) {
  //   modal.style.display = "block";
  //   overlay.style.display = "block";

  //   // Add event listeners to close buttons
  //   const closeButtons = modal.querySelectorAll(".popup-close");
  //   closeButtons.forEach(button => {
  //     button.addEventListener("click", () => {
  //       hideModal(modal);
  //     });
  //   });

  //   overlay.addEventListener("click", outsideClickHandler);
  //   document.addEventListener("keydown", keyDownHandler);

  //   activeModal = modal;
  // }

  // function hideModal(modal) {
  //   modal.style.display = "none";
  //   overlay.style.display = "none";

  //   // Remove event listeners from close buttons
  //   const closeButtons = modal.querySelectorAll(".popup-close");
  //   closeButtons.forEach(button => {
  //     button.removeEventListener("click", () => {
  //       hideModal(modal);
  //     });
  //   });

  //   overlay.removeEventListener("click", outsideClickHandler);
  //   document.removeEventListener("keydown", keyDownHandler);

  //   activeModal = null;
  // }

  // function outsideClickHandler(event) {
  //   if (event.target == overlay && activeModal !== null) {
  //     hideModal(activeModal);
  //   }
  // }

  // function keyDownHandler(event) {
  //   if (event.key === "Escape" && activeModal !== null) {
  //     hideModal(activeModal);
  //   }
  // }

  // ************************  АНИМАЦИЯ *****************************

  let index = 0;

  // Функция, вызываемая при появлении элемента в области видимости
  const handleIntersection = (entries, observer) => {
    const items = document.querySelectorAll(".tabs__item");
    const images = document.querySelectorAll(".tabs__container");

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        items.forEach(item => item.classList.remove("active-tab"));

        items[index].classList.add("active-tab");

        images.forEach(image => image.classList.remove("active"));

        images[index].classList.add("active");
      } else {
        items.forEach(function(item, i) {
          if (item.classList.contains("active-tab")) {
            index = i;
          }
        });

        items.forEach(item => item.classList.remove("active-tab"));
        images.forEach(image => image.classList.remove("active"));
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersection);
  const targetElement = document.querySelector("#mode");
  observer.observe(targetElement);

  window.addEventListener("scroll", function() {
    index = 0;
  });

  // *******************************************************************************************

  const alertAnimation = () => {
    // Функция, вызываемая при появлении элемента в области видимости
    const handleIntersection = (entries, observer) => {
      const items = document.querySelectorAll(".alert__tab");
      const images = document.querySelectorAll(".alert__animation");

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          items.forEach(item => item.classList.remove("active-tab"));
          items[index].classList.add("active-tab");
          images.forEach(image => image.classList.remove("active"));
          images[index].classList.add("active");
        } else {
          let activeTab = document.querySelector(".active-tab");
          let activeImage = document.querySelector(".alert__animation.active");

          // Удаление классов только если элементы не активны
          if (
            !activeTab ||
            !activeTab.closest(".alert") ||
            !activeImage ||
            !activeImage.closest(".alert")
          ) {
            items.forEach(item => item.classList.remove("active-tab"));
            images.forEach(image => image.classList.remove("active"));
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection);
    const targetElement = document.querySelector(".alert");
    observer.observe(targetElement);

    window.addEventListener("scroll", function() {
      index = 0;
    });
  };
  alertAnimation();

  //*******************************  Анимация машинок и аварии *********************************

  const protections = document.querySelectorAll(
    ".protection__defender, .protection__bang-img, .protection__sign-img"
  );

  const handleProtection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log("protection is visible");
        document
          .querySelector(".protection__cars")
          .classList.add("custom-active");
      } else {
        console.log("protection is not visible");
        document
          .querySelector(".protection__cars")
          .classList.remove("custom-active");
      }
    });
  };

  const observerProtection = new IntersectionObserver(handleProtection);

  const protection = document.querySelector("#protection");

  observerProtection.observe(protection);
});
