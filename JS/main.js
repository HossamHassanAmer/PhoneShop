
// Slide Show //

var imgs = document.querySelector(".slide-show-image");
var imageIndex = 0;
let images = [
  "./imgs/Slide-Show/slide1.jpg", "./imgs/Slide-Show/slide2.jpg",
  "./imgs/Slide-Show/slide3.jpg", "./imgs/Slide-Show/slide4.jpg",
  "./imgs/Slide-Show/slide5.jpg"
];

function changeImage() {
  imgs.setAttribute("src", images[imageIndex]);
  imageIndex++;
  if (imageIndex >= images.length) {
    imageIndex = 0;
  }
}

setInterval(changeImage, 3000);

// basket--> Add Card-+

let span = document.querySelector(".basket");
let count = 0;
function increment() {
  count++;
  span.innerHTML = count;
  console.log('run');
}


// Cards 

let cards = document.getElementById('cards');

let cardImages = [
  { title: 'Lorem ipsum', brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: './imgs/Iphone/IPhone1.jpg', type: 'Iphone' },
  { title: 'Lorem ipsum', brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: './imgs/Iphone/IPhone2.jpg', type: 'Iphone' },
  { title: 'Lorem ipsum', brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: './imgs/Iphone/IPhone3.jpg', type: 'Iphone' },
  { title: 'Lorem ipsum', brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: './imgs/Iphone/IPhone4.jpg', type: 'Iphone' },
  { title: 'Lorem ipsum', brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: './imgs/Iphone/IPhone5.jpg', type: 'Iphone' },
  { title: 'Lorem ipsum', brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: './imgs/Iphone/IPhone6.jpg', type: 'Iphone' },
  { title: 'Lorem ipsum', brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: './imgs/Iphone/IPhone7.jpg', type: 'Iphone' },
  { title: 'Lorem ipsum', brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: './imgs/Iphone/IPhone8.jpg', type: 'Iphone' },

  { title: 'Lorem ipsum', brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: './imgs/Samsung/Samsung1.jpg', type: 'Samsung' },
  { title: 'Lorem ipsum', brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: './imgs/Samsung/Samsung2.jpg', type: 'Samsung' },
  { title: 'Lorem ipsum', brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: './imgs/Samsung/Samsung3.jpg', type: 'Samsung' },
  { title: 'Lorem ipsum', brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: './imgs/Samsung/Samsung4.jpg', type: 'Samsung' },
  { title: 'Lorem ipsum', brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: './imgs/Samsung/Samsung5.jpg', type: 'Samsung' },
  { title: 'Lorem ipsum', brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: './imgs/Samsung/Samsung6.jpg', type: 'Samsung' },
  { title: 'Lorem ipsum', brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: './imgs/Samsung/Samsung7.jpg', type: 'Samsung' },
  { title: 'Lorem ipsum', brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: './imgs/Samsung/Samsung8.jpg', type: 'Samsung' },

  { title: 'Lorem ipsum', brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: './imgs/Xiaomi/Xiaomi1.jpg', type: 'Xiaomi' },
  { title: 'Xiaomi', brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: './imgs/Xiaomi/Xiaomi2.jpg', type: 'Xiaomi' },
  { title: 'Lorem ipsum', brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: './imgs/Xiaomi/Xiaomi3.jpg', type: 'Xiaomi' },
  { title: 'Lorem ipsum', brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: './imgs/Xiaomi/Xiaomi4.jpg', type: 'Xiaomi' },
  { title: 'Lorem ipsum', brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: './imgs/Xiaomi/Xiaomi5.jpg', type: 'Xiaomi' },
  { title: 'Lorem ipsum', brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: './imgs/Xiaomi/Xiaomi6.jpg', type: 'Xiaomi' },
  { title: 'Lorem ipsum', brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: './imgs/Xiaomi/Xiaomi7.jpg', type: 'Xiaomi' },
  { title: 'Lorem ipsum', brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', image: './imgs/Xiaomi/Xiaomi8.jpg', type: 'Xiaomi' },
]

function compare(item1,item2){
  return 0.5-Math.random()
}

function drawCard(item){
  cards.innerHTML += cardTemplate.innerHTML
  .replace("{{image}}", item.image)
  .replace("{{title}}", item.title)
  .replace("{{brief}}", item.brief)
  .replace("{{type}}", item.type);
}


let cardTemplate = document.getElementById("card-temp");
cardImages.sort(compare).forEach((item) => {
  drawCard(item);
})



//filter it

function filter(type){
  let filtredImages = [];
  filtredImages = cardImages.filter((item) => {
    return item.type == type || type == 'all';
  })



  cards.innerHTML = "";

  filtredImages.forEach((item) => {
    drawCard(item);
  })
}




// arrow-up

let up = document.querySelector(".up");

up.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};






