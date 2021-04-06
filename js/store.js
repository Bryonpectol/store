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
    
  };
});

allCars.forEach(myCar => {
  
    let makeElement = document.createElement("p");
    DivElement = document.createElement("div");
    let storeLink = document.createElement("a");

    DivElement.className = "card";
    
    makeElement.className = "box";
  
    makeElement.textContent = myCar.mAKE;
    storeLink.textContent = myCar.storeName;
    storeLink.href = myCar.Store;
    storeLink.setAttribute("target", "_blank");
    
    DivElement.appendChild(makeElement);
    DivElement.appendChild(storeLink);
    mainContainer.appendChild(DivElement);

  });
  
  document.body.appendChild(mainContainer);
  
  console.log(items);