


app = {

  boutonPrev : document.getElementById("navigation_left"),
  boutonNext : document.getElementById("navigation_right"),
  positionSlide: 0,
  mainTitle: document.getElementById("main_title"),
  mainParagraphe: document.getElementById("main_paragraphe"),
  mainPhoto: document.querySelector(".main_photo"),

start() {
  app.positionSlide = 0;
  app.affiche();
  app.boutonPrev.addEventListener('click', app.previous);
  app.boutonNext.addEventListener('click', app.next);
},

affiche() {
  app.mainTitle.innerText= slide[app.positionSlide].title;
  app.mainParagraphe.innerText= slide[app.positionSlide].text;
  app.mainPhoto.classList.remove('slide1','slide2','slide3');
  app.mainPhoto.classList.add(`slide${app.positionSlide+1}`);
},

next(event) {
  console.log("click next");
  if (app.positionSlide < 2) {
    app.positionSlide ++;
  } else {
    app.positionSlide = 0 ;
  }
  console.log(app.positionSlide);
  app.affiche();
  },

previous(event) {
  console.log("click prev");
  if (app.positionSlide > 0) {
    app.positionSlide --;
  } else {
    app.positionSlide = 2 ;
  }
  console.log(app.positionSlide);

  app.affiche();
  },



}


document.addEventListener('DOMContentLoaded', app.start);



const slide = [
{
  title : "Discover innovative ways to decorate",
  text : `We provide unmatched quality, comfort, and style for property owners across the country. 
  Our experts combine form and function in bringing your vision to life. Create a room in your 
  own style with our collection and make your property a reflection of you and what you love.`,
  image : "./images/desktop-image-hero-1.jpg"
},
{
  title : "We are available all across the globe",
  text : `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
  store locator. Any questions? Don't hesitate to contact us today.`,
  image : "./images/desktop-image-hero-2.jpg"
},
 {
  title : "Manufactured with the best materials",
  text : `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
  to ensure that every product is made as perfect and as consistent as possible. With three decades of 
  experience in this industry, we understand what customers want for their home and office.`,
  image : "./images/desktop-image-hero-3.jpg"
}
];