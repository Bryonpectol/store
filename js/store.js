import { items } from "../js/storedata.js";

const mainContainer = document.createElement("div");
mainContainer.className = "container";

let DivElement;

const allCars = items.map(myCar => {
  let carsYeah = items.find(CAR => {
    return CAR.name === myCar.name;
  });

  return {
   
    mAKE: carsYeah.name,
    Store: carsYeah.link,
    Price: carsYeah.price,
    Img: carsYeah.img,
    storeName: carsYeah.storeName,
    new: carsYeah.new,
    discounT: carsYeah.discount,
    
  };
});

allCars.forEach(myCar => {
  
    let makeElement = document.createElement("p");
    DivElement = document.createElement("div");
    let storeLink = document.createElement("a");
    let priceElement = document.createElement("p");
    let Discount;
    let ImgElement = document.createElement("img");

    DivElement.className = "card";
    
    makeElement.className = "box";
    priceElement.className = "box";
    storeLink.className = "boxlink";

    Discount = myCar.discounT;
    

    if(Discount == false) {
        priceElement.style.color = "teal";
    }
    if(Discount == true) {
        priceElement.style.color = "red";
    }

  
    makeElement.textContent = myCar.mAKE;
    ImgElement.src = myCar.Img;
    storeLink.textContent = myCar.storeName;
    storeLink.href = myCar.Store;
    storeLink.setAttribute("target", "_blank");
    priceElement.textContent = myCar.Price;
    

    DivElement.appendChild(ImgElement);
    DivElement.appendChild(makeElement);
    DivElement.appendChild(storeLink);
    DivElement.appendChild(priceElement);

    mainContainer.appendChild(DivElement);

  });
  
  document.body.appendChild(mainContainer);
  
  console.log(items);