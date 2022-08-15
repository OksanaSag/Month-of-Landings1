// popup

const bicyclesIcon = document.querySelector(".bicycles__icon");
const dropdown = document.querySelector(".bicycles__dropdown");
bicyclesIcon.addEventListener("click", (evt) => {
  open(dropdown);
});
function open(evt) {
  evt.classList.add("bicycles__dropdown_position_open");
}
function remove(evt) {
  evt.classList.remove("bicycles__dropdown_position_open");
}




const buttonAdd = document.querySelector(".header__button");
const buttonClose = document.querySelector(".header__button-x");
const popups = document.querySelector(".header__popup");

let currentMode = window.matchMedia("(max-width: 572px)").matches;
function openPopup(popup) {
    popup.classList.add("header__popup_opened");
  }
  function closePopup(popup) {
    popup.classList.remove("header__popup_opened");
  }

buttonAdd.addEventListener("click", (evt) => {
    openPopup(popups);
});
buttonClose.addEventListener("click", (evt) => {
    closePopup(popups);
});


// dark/light

const togglePopup = document.querySelector("#togglePopup");
const toggleFooter = document.querySelector("#toggleFooter");
const dark = document.querySelector(".page");

function relay (){
    dark.classList.toggle("theme-button__dark-theme");
};
togglePopup.addEventListener("click", relay);
toggleFooter.addEventListener("click", relay);

// arrows

const slidesContainer = document.querySelector(".road__images");
const slide = document.querySelector(".road__image");
const slidesRoadImages = document.querySelector("#roadImages");
const slideGravel = document.querySelector("#roadImage");
const slidesRoadImagesTT = document.querySelector("#roadImagesTT");
const slideTT = document.querySelector("#roadImageTT");
const prevButton = document.querySelector("#arrowLeft");
const nextButton = document.querySelector("#arrowRight");
const prevButtonGravel = document.querySelector("#arrowLeftGravel");
const nextButtonGravel = document.querySelector("#arrowRightGravel");
const prevButtonTT = document.querySelector("#arrowLeftTT");
const nextButtonTT = document.querySelector("#arrowRightTT");
let slides = document.getElementsByClassName("bicycles__card_highway");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});
nextButtonGravel.addEventListener("click", () => {
    const slideWidth = slideGravel.clientWidth;
    slidesRoadImages.scrollLeft += slideWidth;
  });
  
  prevButtonGravel.addEventListener("click", () => {
    const slideWidth = slideGravel.clientWidth;
    slidesRoadImages.scrollLeft -= slideWidth;
  });
  nextButtonTT.addEventListener("click", () => {
    const slideWidth = slideTT.clientWidth;
    slidesRoadImagesTT.scrollLeft += slideWidth;
  });
  
  prevButtonTT.addEventListener("click", () => {
    const slideWidth = slideTT.clientWidth;
    slidesRoadImagesTT.scrollLeft -= slideWidth;
  });

  // кнопки вид покрытия
      const roadHighway = document.querySelector("#roadHighway");
      const roadGravel = document.querySelector("#roadGravel");
      const roadTT = document.querySelector("#roadTT");
      const bikeFix = document.querySelector("#rimBikeFix");



      const bicyclesButtons = document.querySelector(".bicycles__buttons");
      const marginMinus = document.querySelector(".margin_minus");
      const marginMinusBig = document.querySelector(".margin_minusBig");

      //const bikeFixMiddle = document.querySelector(".flex-element__rim-bike-fix_position_middle");
      //const bikeFixHigh = document.querySelector(".flex-element__rim-bike-fix_position_high");
      //const bikeFixLow = document.querySelector(".flex-element__rim-bike-fix_position_low");

      const Highway = document.querySelector("#bicyclesCardsHighway");
      const Gravel = document.querySelector("#bicyclesCardsGravel");
      const TT = document.querySelector("#bicyclesCardsTT");

      const tabHighway = document.querySelector(".bicycles__button_highway");
      const tabGravel = document.querySelector(".bicycles__button_gravel");
      const tabTT = document.querySelector(".bicycles__button_TT");
      const tabs = document.querySelectorAll(".bicycles__button");

      Highway.classList.add("bicycles_checked");
      roadHighway.classList.add("road_checked");
      tabHighway.classList.add("bicycles__button_checked");
      tabHighway.addEventListener("click", () => {
       
          slides = document.getElementsByClassName("bicycles__card_highway");

          if(currentMode)
           showSlides(1);
          else
            showAll();
          
        
        
        bicyclesButtons.classList.remove("margin_minus");
        bicyclesButtons.classList.remove("margin_minusBig");


        Highway.classList.add("bicycles_checked");
        Gravel.classList.remove("bicycles_checked");
        TT.classList.remove("bicycles_checked");
        roadHighway.classList.add("road_checked");
        roadGravel.classList.remove("road_checked");
        roadTT.classList.remove("road_checked");
        tabHighway.classList.add("bicycles__button_checked");
        tabTT.classList.remove("bicycles__button_checked");
        tabGravel.classList.remove("bicycles__button_checked");
        remove(dropdown);
      });
      tabGravel.addEventListener("click", () => {
        slides = document.getElementsByClassName("bicycles__card_gravel");
        if(currentMode)
          showSlides(1);
        else
          showAll();
        bicyclesButtons.classList.remove("margin_minusBig");
        bicyclesButtons.classList.add("margin_minus");

        Highway.classList.remove("bicycles_checked");
        Gravel.classList.add("bicycles_checked");
        TT.classList.remove("bicycles_checked");
        roadHighway.classList.remove("road_checked");
        roadGravel.classList.add("road_checked");
        roadTT.classList.remove("road_checked");
        tabGravel.classList.add("bicycles__button_checked");
        tabTT.classList.remove("bicycles__button_checked");
        tabHighway.classList.remove("bicycles__button_checked");
        remove(dropdown);
      });
      tabTT.addEventListener("click", () => {
        slides = document.getElementsByClassName("bicycles__card_TT");
        if(currentMode)
        showSlides(1);
       else
         showAll();
        bicyclesButtons.classList.add("margin_minusBig");
        bicyclesButtons.classList.remove("margin_minus");

        Highway.classList.remove("bicycles_checked");
        Gravel.classList.remove("bicycles_checked");
        TT.classList.add("bicycles_checked");
        roadHighway.classList.remove("road_checked");
        roadGravel.classList.remove("road_checked");
        roadTT.classList.add("road_checked");
        tabTT.classList.add("bicycles__button_checked");
        tabHighway.classList.remove("bicycles__button_checked");
        tabGravel.classList.remove("bicycles__button_checked");
        remove(dropdown);
      });
  

      //слайдер {

const dot1 = document.querySelector(".bicycles__slider-dot1");
const dot2 = document.querySelector(".bicycles__slider-dot2");
const dot3 = document.querySelector(".bicycles__slider-dot3");
const image2 = document.querySelector(".bicycles__card_gravel");
const image = document.querySelector(".bicycles__card_highway");




const dots = document.getElementsByClassName("bicycles__slider-dot");

const pageWidth = document.documentElement.scrollWidth

window.addEventListener("resize", function() {

  if (window.matchMedia("(max-width: 572px)").matches) {
    if (!currentMode)
    {
      currentMode = true;
      showSlides(1);
    }
    console.log("Screen more than 572px");
  } else {
    if (currentMode)
    {
      currentMode = false;
      showAll();
    }
    console.log("Screen less than 572px");
  }
  });
  

let slideIndex = 1;
if(currentMode)
  showSlides(slideIndex);
else
  showAll();

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showAll()
{
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "flex";  
  }
}

function showSlides(n) {
  let i;
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
}


//input
const applicantForm = document.querySelector('.footer__form');
const input = document.querySelector(".footer__input");
const inputButton = document.querySelector(".footer__input-button");
input.addEventListener("click", () => {
  inputButton.classList.add("display-block");
});
inputButton.addEventListener("click", () => {
  inputButton.classList.remove("display-block");
});  
applicantForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  input.value = 'Круто!';
});



