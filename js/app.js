const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
const menuBody = document.querySelector('.menu__body');
const iconMenu = document.querySelector('.menu__icon');

if (iconMenu) {
  iconMenu.addEventListener('click', () => {
    document.body.classList.toggle('_lock')
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  })
}

if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  })

  function onMenuLinkClick(event) {
    const menuLink = event.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto)
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector("header").offsetHeight;

      if (iconMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock')
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
      }


      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      event.preventDefault();
    }
  }
}

//header fixed/scroll
window.onscroll = function showHeader() {
  const header = document.querySelector('.header__top-block');

  if (window.pageYOffset > 70) {
    header.classList.add('header__fixed');
  } else {
    header.classList.remove('header__fixed');
  }
}

//popup
//const popupLinks = document.querySelectorAll('.popup-link');
//const body = document.querySelector('body');
//const lockPadding = document.querySelectorAll('.lock-padding');

//const unlock = true;

//const timeout = 800;

//if (popupLinks.length > 0) {
//  for (const popupLink of popupLinks) {
//    popupLink.addEventListener('click', (e) => {
//      const popupName = popupLink.getAttribute('href').replace('#', '');
//      const currentPopup = document.getElementById(popupName);
//      popupOpen(currentPopup);
//      e.preventDefault();
//    });
//  }
//}

//const popupCloseIcon = document.querySelectorAll('.close-popup');
//if (popupCloseIcon.length > 0) {
//  const element = popupCloseIcon[i];
//  element.addEventListener('click', (e) => {
//    popupCloseIcon(element.closest('.popup'));
//    e.preventDefault();
//  })
//}

//function popupOpen(currentPopup) {
//  if (currentPopup && unlock) {
//    const popupActive = document.querySelector('.popup.open');
//    if (popupActive) {
//      popupCloseIcon(popupActive, false);
//    } else {
//      bodyLock();
//    }
//    currentPopup.classList.add('open');
//    currentPopup.addEventListener('click', (e) => {
//      if (!e.target.closest('.popup__content')) {
//        popupCloseIcon(e.target.closest('.popup'));
//      }
//    })
//  }
//}
//function popupClose(popupActive, doUnlock = true) {
//  if (unlock) {
//    popupActive.classList.remove('open');
//    if (doUnlock) {
//      bodyLock()
//    }
//  }
//}
//function bodyLock() {
//  const lockPaddingValue = `${window.innerWidth - document.querySelector('.wrapper').offsetWidth}px`

//  for (const el of lockPadding) {
//    el.style.paddingRight = lockPaddingValue;
//  }
//  body.style.paddingRight = lockPaddingValue;
//  body.classList.add('lock');

//  unlock = false;
//  setTimeout(() => {
//    unlock = true;
//  }, timeout)
//}

//function bodyUnlock() {
//  setTimeout(() => {
//    for (const el of lockPadding) {
//      el.style.paddingRight = '0px';
//    }
//    body.style.paddingRight = '0px';

//  })
//}

//line faq open/close

const faqBox = document.querySelectorAll('.section-faq__question');

faqBox.forEach((box) => {
  box.addEventListener('click', boxHandler);
});

function boxHandler(e) {
  e.preventDefault();
  const currentBox = e.target.closest('.section-faq__question');
  const currentContent = e.target.nextElementSibling;
  currentBox.classList.toggle('active-line');
  currentContent.style.maxHeight = currentBox.classList.contains('active-line') ? `${currentContent.scrollHeight}px` : 0;
}
