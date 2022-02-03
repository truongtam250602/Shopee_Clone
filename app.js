


window.addEventListener("load", function(){
   // Scroll Infomation in Category
   const btnNextScrollInfor = document.querySelector(".next-scroll-user-info");
   const btnPrevScrollInfor = document.querySelector(".prev-scroll-user-info");
   const userInfo = document.querySelector(".user-shopee__user-information");
   const userShopee = this.document.querySelector(".category__user-shopee");
   btnNextScrollInfor.addEventListener("click", function(){
      btnNextScrollInfor.style = `display: none`;
      btnPrevScrollInfor.style = `display: block`;
      userInfo.style = `display: block; height: 124px`;
      userShopee.style = `height: 256px; transition: linear 0.1s; overflow: hidden`;
   })
   btnPrevScrollInfor.addEventListener("click", function(){
      btnPrevScrollInfor.style = `display: none`;
      btnNextScrollInfor.style = `display: block`;
      userInfo.style = `display: none; height: 0px`;
      userShopee.style = `height: 140px; transition: linear 0.1s; overflow: hidden`;
   })

   // Sroll ID on screen 

   // function myFunction() {
   //    var idFlashSale = document.getElementById("flash-sale");
   //    idFlashSale.scrollIntoView();
   // }
   // Active Menu

const categoryItems = document.querySelectorAll(".category-item");
const categoryItemsLink = document.querySelectorAll(".category-item__link");
categoryItemsLink.forEach((item) =>
   item.addEventListener("click", function() {
      categoryItemsLink.forEach((el) => el.classList.remove("category-item--active"));
      item.classList.add("category-item--active");
   })
);

// Select Theme (Light- Dark)

const btnLightMode = document.querySelector(".btn-light-mode");
const btnDarkMode = document.querySelector(".btn-dark-mode");
const themeContainer = document.querySelector(".shopee-container");
btnDarkMode.addEventListener("click", function(){
   btnDarkMode.style = `background-color: var(--primary-color); color: var(--white-color)`;
   btnLightMode.style = `background-color: #f0f0f0; color: #616161`;
   // themeContainer.style = `background-color: #01085E`;
});
btnLightMode.addEventListener("click", function(){
   btnDarkMode.style = `background-color: #f0f0f0`;
   btnLightMode.style = `color: var(--white-color)`;
   btnLightMode.style = `background-color: var(--primary-color)`;
   // themeContainer.style = `background-color: #f5f5f5`;
});

// List Banner 

// Section banner shopee
$(document).ready(function(){
   $('.list-banner__content').slick({
   infinite: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 4000,
   dots: true,
   prevArrow:`<button type='button' class='slick-prev pull-left'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
   nextArrow:`<button type='button' class='slick-next pull-right'><ion-icon name="chevron-forward-outline"></ion-icon></button>`
   });
});
//  Section logo MU 
$(document).ready(function(){
   $('.list-image-logo__MU').slick({
   infinite: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 3000
   });
});
   //  List Menu Froduct & List Flash Sale - Slick Slider
   
   const listItemsCarouselMenu = document.querySelector(".image-carousel-item-list__section-menu");
   const itemCarouselMenu = this.document.querySelectorAll(".image-carousel-item__menu");
   const nextBtn = document.querySelector(".next-slider-list");
   const prevBtn = document.querySelector(".prev-slider-list");
   const itemCarouselMenuWidth = itemCarouselMenu[0].offsetWidth;
   const itemCarouselMenuLength = itemCarouselMenu.length;
   let positionX = 0;
   let index = 8;
   const listItemsCarouselFlashSale = document.querySelector(".image-carousel-item-list__section-flash-sale");
   const itemCarouselFlashSale = this.document.querySelectorAll(".image-carousel-item__flash-sale");
   const nextBtnFlashSale = document.querySelector(".next-slider-list__flash-sale");
   const prevBtnFlashSale = document.querySelector(".prev-slider-list__flash-sale");
   const itemCarouselFlashSaleWidth = itemCarouselFlashSale[0].offsetWidth;
   const itemCarouselFlashSaleLength = itemCarouselFlashSale.length;
   let positionXFlashSale = 0;
   let indexFlashSale = 5;
   const listItemsCarouselTopSearch = document.querySelector(".image-carousel-item-list__section-top-search");
   const itemCarouselTopSearch = this.document.querySelectorAll(".image-carousel-item__top-search");
   const nextBtnTopSearch = document.querySelector(".next-slider-list__top-search");
   const prevBtnTopSearch = document.querySelector(".prev-slider-list__top-search");
   const itemCarouselTopSearchWidth = itemCarouselTopSearch[0].offsetWidth;
   const itemCarouselTopSearchLength = itemCarouselTopSearch.length;
   let positionXTopSearch = 0;
   let indexTopSearch = 5;
   nextBtn.addEventListener("click", function(){
      handleChangeSlide(1);
   });
   prevBtn.addEventListener("click", function(){
      handleChangeSlide(-1);
   });
   nextBtnFlashSale.addEventListener("click", function(){
      handleChangeSlide(2);
   });
   prevBtnFlashSale.addEventListener("click", function(){
      handleChangeSlide(-2);
   });
   nextBtnTopSearch.addEventListener("click", function(){
      handleChangeSlide(3);
   });
   prevBtnTopSearch.addEventListener("click", function(){
      handleChangeSlide(-3);
   });
   function handleChangeSlide(direction) {
      if(direction === 1) {
         if (index >= itemCarouselMenuLength ) {
            index = itemCarouselMenuLength ;
            return;
         }
         positionX = positionX - itemCarouselMenuWidth*6;
         listItemsCarouselMenu.style = `transform: translate(${positionX}px, 0px)`;
         index=index + 6;
         // console.log(index);
         if (index >= itemCarouselMenuLength) {
            prevBtn.style = `visibility: visible`;
            prevBtn.style = `opacity: 1`;
            nextBtn.style = `visibility: hidden`;
            nextBtn.style = `opacity: 1`;
            nextBtn.classList.add('carousel-arrow-hidden');
         }
         // console.log(itemCarouselMenuLength);
      }
      else if(direction === -1) {
         if (index <= 8) {
            index=8;
            return;
         } 
         positionX = positionX + itemCarouselMenuWidth*6;
         listItemsCarouselMenu.style = `transform: translate(${positionX}px, 0px)`;
         index=index - 6;
         // console.log(index);
         if (index <= 8) {
            nextBtn.style = `visibility: visible`;
            prevBtn.style = `visibility: hidden`;
         }
      }
      else if(direction === 2) {
         if (indexFlashSale >= itemCarouselFlashSaleLength ) {
            indexFlashSale = itemCarouselFlashSaleLength ;
            return;
         }
         positionXFlashSale = positionXFlashSale - itemCarouselFlashSaleWidth*4;
         listItemsCarouselFlashSale.style = `transform: translate(${positionXFlashSale}px, 0px)`;
         indexFlashSale = indexFlashSale + 4;
         console.log(indexFlashSale);
         if (5<= indexFlashSale < itemCarouselFlashSaleLength)
         {
            prevBtnFlashSale.style = `visibility: visible`;
         }
         if(indexFlashSale >= itemCarouselFlashSaleLength) {
            nextBtnFlashSale.style = `visibility: hidden`;          
         }
         console.log(itemCarouselFlashSaleLength);
      }
      else if(direction === -2) {
         if (indexFlashSale <= 5) {
            indexFlashSale = 5;
            return;
         } 
         positionXFlashSale = positionXFlashSale + itemCarouselFlashSaleWidth*4;
         listItemsCarouselFlashSale.style = `transform: translate(${positionXFlashSale}px, 0px)`;
         indexFlashSale=indexFlashSale - 4;
         console.log(indexFlashSale);
         if (5 < indexFlashSale < itemCarouselFlashSaleLength ) {
            nextBtnFlashSale.style = `visibility: visible`;
         }
         if (indexFlashSale <= 5) {
            nextBtnFlashSale.style = `visibility: visible`;
            prevBtnFlashSale.style = `visibility: hidden`;
         }
         console.log(itemCarouselFlashSaleLength);
      }
      else if(direction === 3) {
         if (indexTopSearch >= itemCarouselTopSearchLength ) {
            indexTopSearch = itemCarouselTopSearchLength ;
            return;
         }
         positionXTopSearch = positionXTopSearch - itemCarouselTopSearchWidth*4;
         listItemsCarouselTopSearch.style = `transform: translate(${positionXTopSearch}px, 0px)`;
         indexTopSearch = indexTopSearch + 4;
         console.log(indexTopSearch);
         if (5<= indexTopSearch < itemCarouselTopSearchLength)
         {
            prevBtnTopSearch.style = `visibility: visible`;
         }
         if(indexTopSearch >= itemCarouselTopSearchLength) {
            nextBtnTopSearch.style = `visibility: hidden`;          
         }
         console.log(itemCarouselTopSearchLength);
      }
      else if(direction === -3) {
         if (indexTopSearch <= 5) {
            indexTopSearch = 5;
            return;
         } 
         positionXTopSearch = positionXTopSearch + itemCarouselTopSearchWidth*4;
         listItemsCarouselTopSearch.style = `transform: translate(${positionXTopSearch}px, 0px)`;
         indexTopSearch=indexTopSearch - 4;
         console.log(indexTopSearch);
         if (5 < indexTopSearch < itemCarouselTopSearchLength ) {
            nextBtnTopSearch.style = `visibility: visible`;
         }
         if (indexTopSearch <= 5) {
            nextBtnTopSearch.style = `visibility: visible`;
            prevBtnTopSearch.style = `visibility: hidden`;
         }
         console.log(itemCarouselTopSearchLength);
      }
      
      
   }
   
// List // Carousel

   const imageCarouselMenu = this.document.querySelector(".iamge-carousel__section-mu-js");
   imageCarouselMenu.addEventListener("mousemove", function(){
      nextBtn.classList.add('carousel-arrow');
      prevBtn.classList.add('carousel-arrow');
   })
   imageCarouselMenu.addEventListener("mouseout", function(){
      nextBtn.classList.remove('carousel-arrow');
      prevBtn.classList.remove('carousel-arrow');
   })

   const imageCarouselFlashSale = this.document.querySelector(".image-carousel__section-flash-sale-js");

   imageCarouselFlashSale.addEventListener("mousemove", function(){
      nextBtnFlashSale.classList.add('carousel-arrow');
      prevBtnFlashSale.classList.add('carousel-arrow');
   })
   imageCarouselFlashSale.addEventListener("mouseout", function(){
      nextBtnFlashSale.classList.remove('carousel-arrow');
      prevBtnFlashSale.classList.remove('carousel-arrow');
   })

   const imageCarouselTopSearch = this.document.querySelector(".image-carousel__section-top-search-js");

   imageCarouselTopSearch.addEventListener("mousemove", function(){
      nextBtnTopSearch.classList.add('carousel-arrow');
      prevBtnTopSearch.classList.add('carousel-arrow');
   })
   imageCarouselTopSearch.addEventListener("mouseout", function(){
      nextBtnTopSearch.classList.remove('carousel-arrow');
      prevBtnTopSearch.classList.remove('carousel-arrow');
   })
   // Modal 
   
   const modalClose = document.querySelector(".modal-close-icon");
   const modalDefault = document.querySelector(".modal");
   const modalContainer = document.querySelector(".modal-container");
   modalClose.addEventListener("click", function(){
      modalDefault.classList.add('modal-close');
   })
   modalDefault.addEventListener("click", function(){
      modalDefault.classList.add('modal-close');
   })
   modalContainer.addEventListener('click', function(event)
   {
      event.stopPropagation();
   })

   
   // Section banner Shopee Mall
   
   $(document).ready(function(){
      $('.list-banner-shopee-mall__content').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      prevArrow:`<button type='button' class='slick-prev pull-left'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
      nextArrow:`<button type='button' class='slick-next pull-right'><ion-icon name="chevron-forward-outline"></ion-icon></button>`
      });
   });
   //  Section Shopee Mall
   $(document).ready(function(){
      $('.image-carousel-item-list__section-shopee-mall').slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow:`<button type='button' class='slick-prev pull-left'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
      nextArrow:`<button type='button' class='slick-next pull-right'><ion-icon name="chevron-forward-outline"></ion-icon></button>`
      });

   });
});
      
//  JS cho Login Logout
$(document).ready(function(){
   // Show Password
   $('#show__password').click(function(){
      $(this).toggleClass('btn-show-password');
      $(this).children('i').toggleClass('fa-eye-slash fa-eye');
      if($(this).hasClass('btn-show-password')){
         $(this).prev().attr('type','text');
      }
      else {
         $(this).prev().attr('type','password');
      }
   });
});

