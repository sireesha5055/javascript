
function changeTitle() {
  document.title = "Don't forget to come back!";
}

// Function to reset the title when the user returns to the page
function resetTitle() {
  document.title = "Menu";
}

// Adding event listener to trigger the function when the visibility changes
document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === 'hidden') {
    changeTitle();
  } else {
    resetTitle();
  }
});
//items 
const menu = [
  {
    id: 1,
    title: "full of AndraTiffin",
    price: 200,
    category: "BreakFast",
    img: "./Images/menu-iten.jpg",
    desc: " Dosa: A savory South Indian crepe made from fermented rice and lentil batter. Crispy and golden-brown, it pairs perfectly with coconut chutney and tangy sambar for a delicious breakfast option."

  },
  {
    id: 2,
    title: "Chicken Biriyani",
    price: 350,
    category: "Lunch",
    img: "./Images/menuitem3.jpg",
    desc: " A fragrant and flavorful rice dish infused with aromatic spices, tender chicken pieces, and fragrant basmati rice. A true culinary delight, each spoonful of this classic Indian dish is packed with savory goodness and a burst of exquisite flavors. Served with cooling raita, chicken biryani is a hearty and satisfying choice that will transport your taste buds to the streets of India"

  },
  {
    id: 3,
    title: "Bonda",
    price: 40,
    category: "BreakFast",
    img: "./Images/menuitem8.jpg",
    desc: "Crispy and bite-sized South Indian fritters made from fermented rice and lentil batter. These golden delights are seasoned with a blend of spices, offering a burst of flavor in every bite. Perfectly paired with spicy chutneys or tangy sauces, punugulu make for an irresistible snack or appetizer that will leave you craving for more ."

  },
  {
    id: 5,
    title: "Puri",
    price: 50,
    category: "BreakFast",
    img: "./Images/menuitem1.jpg",
    desc: " A fluffy and deep-fried Indian bread made from unleavened wheat dough. These golden orbs puff up beautifully when cooked, resulting in a light and airy texture. Served piping hot, puris are a delightful accompaniment to savory dishes like spicy potato curry or sweet treats like creamy halwa. Enjoyed across India, puris are a beloved part of traditional breakfast spreads and festive meals."

  },
  {
    id: 6,
    title: "Full of Veg Andra Bojanam",
    price: 100,
    category: "Lunch",
    img: "./Images/menuitem2.jpg",
    desc: "A traditional Andhra meal featuring a delightful array of dishes like rice, dal, sambar, rasam, stir-fried vegetables, pickles, and papad. Known for its bold flavors and spices, it offers a satisfying and hearty dining experience"

  },
  {
    id: 7,
    title: "Nonveg Thali full of Tradition",
    price: 250,
    category: "Lunch",
    img: "./Images/menuitem7.jpg",
    desc: "A hearty spread featuring chicken curry, egg curry, ragi sangati (finger millet balls), chapati, mutton curry, fish curry, dal (pappu), and rasam. This flavorful assortment promises a fulfilling meal with a mix of traditional and savory dishes "

  },
  {
    id: 8,
    title: "Idly ",
    price: 50,
    category: "BreakFast",
    img: "./Images/menuitem4.webp",
    desc: " Soft and fluffy steamed rice cakes made from fermented rice and lentil batter. A staple of South Indian cuisine, idly is served with a side of coconut chutney and tangy sambar, offering a light and nutritious breakfast or snack option."

  },
  {
    id: 9,
    title: "Nonveg Curries of Tradition",
    price: 550,
    category: "Lunch",
    img: "./Images/menuitem6.webp",
    desc: " Indulge in a variety of tantalizing non-vegetarian curries, featuring a selection of four flavorful options. Choose from classics like chicken curry, mutton curry, fish curry, or egg curry, each expertly crafted with aromatic spices and rich, savory flavors. Perfect for satisfying your cravings and delighting your taste buds with a diverse array of culinary delights.",
  },
  {
    id: 10,
    title: "MilkShake",
    price: 120,
    category: "Snacks",
    img: "./Images/menuitem10.jpg",
    desc: "A creamy and indulgent beverage made by blending fresh milk with your choice of flavorings such as chocolate, vanilla, strawberry, or banana. Satisfyingly smooth and refreshing, milkshakes are perfect for quenching your thirst and satisfying your sweet tooth in equal measure. Enjoy it as a delicious treat any time of the day!"
  },
  {
    id: 11,
    title: "Chicken Burger",
    price: 190,
    category: "Snacks",
    img: "./Images/menuitem11.jpg",
    desc: "A mouthwatering delight featuring a juicy chicken patty sandwiched between soft burger buns. Grilled to perfection and layered with crisp lettuce, ripe tomatoes, and tangy pickles, this burger offers a symphony of flavors and textures in every bite. Served with a side of golden fries, it's a satisfying choice for burger lovers craving a savory twist. ",
  },
  {
    id: 12,
    title: " Godzilla MilkShake",
    price: 220,
    category: "Snacks",
    img: "./Images/menuitem12.jpg",
    desc: " Prepare for a flavor explosion with our monstrous Godzilla Milkshake! This towering treat features a decadent blend of creamy vanilla ice cream, rich chocolate sauce, crunchy chocolate chunks, and a swirl of whipped cream, all topped with a cherry on top. Sip, slurp, and savor the ultimate indulgence that's sure to satisfy even the mightiest appetite!"
  },
];
const sectionCenter = document.querySelector(".section-center");
const btnContainer=document.querySelector(".btn-container");
//load items 
window.addEventListener('DOMContentLoaded', function () {
  displayMenuItems(menu);
  displayMenuButtons();
});
// filterbuttons 


function displayMenuItems(menuItems){
  let displayMenu = menuItems.map(function(item) {
    //console.log(item);
    return `<article class="menu-item">
          <img src=${item.img}  alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title} </h4>
              <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
          </div>
        </article>` ;
  });
  displayMenu = displayMenu.join('');//without "" marks unknown comas are come 
  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons(){
  const categories = menu.reduce(
    function ( values , item){
      if (!values.includes(item.category)){
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category){
      return `<button type=:button" class="filter-btn" data-id = ${category}>
            ${category}
            </button>`;
    })
    .join("");


    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        // console.log(e.currentTarget.dataset);
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          // console.log(menuItem.category);
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "all") {
          displayMenuItems(menu);
        } else {
          displayMenuItems(menuCategory);
        }
      });
    });
  }

