function getNavTemplate() {
  return /*html*/ `
    <div onclick="window.location.href='./index.html';" class="main_container--nav--logo">
         <svg           
          class="main_container--nav--logo"  
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 3487.01 1372.4">
          <g>
            <g>
              <path
                d="m304.75,628.2c12.04-6.69,22.33-14.62,30.86-23.76,19.83-21.24,29.74-47.2,29.74-77.88,0-24.08-5.91-46.03-17.7-65.85-11.81-19.83-28.92-35.64-51.34-47.44-22.42-11.79-49.68-17.7-81.77-17.7H0v499.87h213.12c35.4,0,65.73-6.37,90.98-19.11,25.25-12.75,44.61-30.1,58.06-52.04,13.45-21.95,20.18-46.61,20.18-73.99,0-35.87-11.45-66.08-34.34-90.63-11.86-12.71-26.27-23.2-43.25-31.47Zm-195-146.25h83.55c18.4,0,33.27,4.6,44.6,13.81,11.33,9.2,16.99,23.01,16.99,41.42s-5.66,32.92-16.99,42.12c-11.33,9.21-26.2,13.81-44.6,13.81h-83.55v-111.16Zm143.73,308c-12.28,12.74-29.27,19.11-50.98,19.11h-92.75v-131.69h92.75c14.62,0,27.01,2.83,37.17,8.49,10.15,5.67,18.06,13.46,23.72,23.37,5.66,9.91,8.5,21.24,8.5,33.98,0,18.41-6.14,33.99-18.41,46.74Z"
                fill="#fff" />
              <path
                d="m683.96,565.5c-25.97-14.63-55.94-21.95-89.92-21.95s-66.32,7.79-94.17,23.36c-27.86,15.58-49.92,36.94-66.2,64.08-16.29,27.15-24.43,57.95-24.43,92.4s8.25,65.38,24.78,92.75c16.52,27.38,39.3,48.75,68.33,64.08,29.03,15.33,62.18,23.01,99.48,23.01,28.78,0,55.22-4.95,79.3-14.87,24.07-9.91,44.6-24.78,61.6-44.6l-59.48-59.48c-10.39,11.81-22.42,20.66-36.11,26.55-13.7,5.91-29.03,8.85-46.02,8.85-18.41,0-34.34-3.89-47.79-11.68-13.46-7.79-23.85-18.87-31.16-33.28-2.43-4.78-4.46-9.9-6.08-15.34l246.46-.59c1.88-8.96,3.19-16.87,3.9-23.72.7-6.83,1.06-13.33,1.06-19.47,0-33.51-7.44-63.25-22.31-89.21-14.86-25.96-35.29-46.26-61.24-60.89Zm-167.86,119.52c1.46-4.96,3.24-9.64,5.36-14.02,6.84-14.17,16.52-25.14,29.03-32.93,12.51-7.79,27.26-11.68,44.26-11.68,16.04,0,29.61,3.43,40.71,10.27,11.08,6.84,19.47,16.76,25.13,29.73,2.38,5.47,4.31,11.53,5.77,18.2l-150.26.43Z"
                fill="#fff" />
              <path
                d="m915.48,634.53c6.13-3.54,15.33-5.31,27.61-5.31s25.85,2.6,39.3,7.79c13.45,5.2,25.6,14.16,36.46,26.9l61.6-62.3c-15.57-19.83-35.75-34.81-60.54-44.96-24.78-10.15-51.8-15.23-81.07-15.23s-52.16,4.73-72.92,14.16c-20.78,9.45-36.82,22.31-48.15,38.59-11.33,16.29-16.99,35.53-16.99,57.71,0,20.77,4,37.88,12.03,51.33,8.02,13.45,18.41,23.96,31.16,31.51,12.74,7.55,26.19,13.45,40.36,17.7,14.16,4.25,27.61,8.14,40.35,11.68,12.75,3.54,23.25,7.56,31.51,12.04,8.25,4.49,12.39,10.97,12.39,19.47,0,6.62-3.43,11.8-10.26,15.58-6.85,3.78-16.64,5.66-29.39,5.66-18.41,0-35.4-3.42-50.98-10.27-15.57-6.83-29.03-16.39-40.36-28.67l-61.59,62.31c11.79,12.74,26.07,23.96,42.83,33.63,16.75,9.68,34.93,17.11,54.52,22.3,19.58,5.19,39.53,7.79,59.83,7.79,42.95,0,77.05-9.91,102.31-29.74,25.25-19.82,37.88-46.49,37.88-80.01,0-21.7-4.01-39.29-12.03-52.74-8.04-13.46-18.41-24.19-31.16-32.22-12.74-8.02-26.2-14.39-40.36-19.12-14.16-4.71-27.61-8.73-40.35-12.03-12.75-3.3-23.14-7.08-31.16-11.33-8.03-4.25-12.04-9.92-12.04-17,0-6.6,3.07-11.68,9.21-15.22Z"
                fill="#fff" />
              <path
                d="m1694.31,843.76l-59.47-59.48c-10.39,11.81-22.43,20.66-36.11,26.55-13.7,5.91-29.03,8.85-46.03,8.85-18.41,0-34.34-3.89-47.79-11.68-13.45-7.79-23.84-18.87-31.15-33.28-2.43-4.78-4.47-9.9-6.09-15.34l246.47-.59c1.88-8.96,3.18-16.87,3.89-23.72.71-6.83,1.06-13.33,1.06-19.47,0-33.51-7.43-63.25-22.3-89.21-14.87-25.96-35.29-46.26-61.25-60.89-25.96-14.63-55.93-21.95-89.92-21.95s-66.32,7.79-94.17,23.36c-27.85,15.58-49.91,36.94-66.2,64.08-16.28,27.15-24.42,57.95-24.42,92.4s8.25,65.38,24.78,92.75c16.51,27.38,39.29,48.75,68.32,64.08,29.03,15.33,62.19,23.01,99.48,23.01,28.79,0,55.23-4.95,79.3-14.87,24.08-9.91,44.61-24.78,61.6-44.6Zm-221.26-172.76c6.84-14.17,16.52-25.14,29.03-32.93,12.5-7.79,27.26-11.68,44.25-11.68,16.04,0,29.62,3.43,40.71,10.27,11.09,6.84,19.47,16.76,25.14,29.73,2.38,5.47,4.3,11.53,5.77,18.2l-150.27.43c1.46-4.96,3.25-9.64,5.37-14.02Z"
                fill="#fff" />
              <path
                d="m1870.92,895.44h.08V381.4h-110.96v261.98h0v227.69c-.8,3.5-1.71,6.08-2.76,7.61-13.93,20.38-48.35,22.27-69.64,30.42-20.36,7.8-34.65,24.6-39.46,45.86-7.59,33.61,3.49,69.27,13.37,101.2,16.78,54.26,31.43,109.34,52.95,161.99,15.18,37.15,34.43,72.26,61.88,102.28,16,17.51,64.96,70.35,91.8,45.38,6.32-5.89,6.46-15.68,6.15-24.32-5.46-149.91-3.81-296.94-3.41-446.05Z"
                fill="#fff" />
              <path
                d="m2378.24,395.57l-198.25,499.87h115.41l33.25-90.63h195.93l32.79,90.63h117.54l-196.13-499.87h-100.54Zm-16.34,318.62l65.41-178.27,64.49,178.27h-129.9Z"
                fill="#fff" />
              <path
                d="m2996.7,567.62c-25.26-15.58-54.16-23.36-86.73-23.36-23.14,0-44.38,4.72-63.73,14.16-9.6,4.69-18.33,10.24-26.19,16.67v-23.75h-108.33v489.25h106.91v-168.51c8.22,6.61,17.42,12.28,27.61,16.99,19.35,8.96,40.59,13.45,63.73,13.45,32.57,0,61.47-7.78,86.73-23.36,25.25-15.58,45.07-36.82,59.48-63.72,14.39-26.91,21.59-57.59,21.59-92.05s-7.2-65.14-21.59-92.05c-14.41-26.9-34.23-48.14-59.48-63.72Zm-38.59,197.54c-6.61,12.28-15.69,21.95-27.26,29.03-11.57,7.08-25.13,10.62-40.71,10.62-14.63,0-27.85-3.54-39.65-10.62s-20.89-16.75-27.26-29.03c-6.37-12.26-9.56-26.19-9.56-41.77s3.3-30.2,9.92-42.48c6.6-12.27,15.68-21.83,27.26-28.68,11.56-6.83,24.89-10.26,40-10.26s28.43,3.43,40,10.26c11.57,6.85,20.65,16.41,27.26,28.68,6.61,12.28,9.92,26.44,9.92,42.48s-3.31,29.51-9.92,41.77Z"
                fill="#fff" />
              <path
                d="m3465.42,631.34c-14.41-26.9-34.23-48.14-59.48-63.72-25.26-15.58-54.16-23.36-86.73-23.36-23.14,0-44.38,4.72-63.73,14.16-9.6,4.69-18.33,10.24-26.19,16.67v-23.75h-108.33v489.25h106.91v-168.51c8.22,6.61,17.42,12.28,27.61,16.99,19.35,8.96,40.59,13.45,63.73,13.45,32.57,0,61.47-7.78,86.73-23.36,25.25-15.58,45.07-36.82,59.48-63.72,14.39-26.91,21.59-57.59,21.59-92.05s-7.2-65.14-21.59-92.05Zm-98.07,133.82c-6.61,12.28-15.69,21.95-27.26,29.03-11.57,7.08-25.13,10.62-40.71,10.62-14.63,0-27.85-3.54-39.65-10.62s-20.89-16.75-27.26-29.03c-6.37-12.26-9.56-26.19-9.56-41.77s3.3-30.2,9.92-42.48c6.6-12.27,15.68-21.83,27.26-28.68,11.56-6.83,24.89-10.26,40-10.26s28.43,3.43,40,10.26c11.57,6.85,20.65,16.41,27.26,28.68,6.61,12.28,9.92,26.44,9.92,42.48s-3.31,29.51-9.92,41.77Z"
                fill="#fff" />
              <path d="m2312.84,1195.8c-3.22,0-3.22,5,0,5s3.22-5,0-5Z" fill="#fff" />
              <polygon
                points="1277.29 409.02 1168.96 409.02 1168.96 551.33 1091.07 551.33 1091.07 643.38 1168.96 643.38 1168.96 895.44 1277.29 895.44 1277.29 643.38 1355.17 643.38 1355.17 551.33 1277.29 551.33 1277.29 409.02"
                fill="#fff" />
              <path
                d="m2039.24,0v252.75c0,6.19-5.08,11.19-11.29,11.07-6.09-.12-10.86-5.35-10.86-11.45V0h-19.47v252.75c0,6.19-5.06,11.18-11.27,11.07-6.1-.11-10.88-5.34-10.88-11.44V0h-19.47v252.37c0,6.09-4.76,11.33-10.86,11.45-6.21.12-11.29-4.87-11.29-11.07V0h-20.33l-20.81,250.33c0,48.87,3.9,86.09,15.23,112.67,14.74,34.55,22.94,71.54,22.94,109.1v423.34h110.95v-423.35c0-37.57,8.21-74.55,22.94-109.11,11.33-26.57,15.23-63.78,15.23-112.64L2059.57,0h-20.33Z"
                fill="#fff" />
            </g>
          </g>
        </svg>
      </div>
    `;
}

function getContainerHeadTemplate(menuDishes) {
  return /*html*/ `
      <div class="main_container--content--order_area--img_container_head">
        <img class="main_container--content--order_area--img_container_head--img" src="./assets/img/header.jpg" alt="Header Img" />
        <img onclick="useEasterEgg()" class="main_container--content--order_area--img_container_head--logo" src="./assets/img/dragon_header.png" alt="Logo Dragon" />
      </div>
      <div class="main_container--content--order_area--restaurant_info">
        <h1 class="main_container--content--order_area--restaurant_info--heading">The Spicy Dragon</h1>
        <p class="main_container--content--order_area--restaurant_info--opening_times">Öffnungszeiten</p>
        <p class="main_container--content--order_area--restaurant_info--opening_times">Mo-Do 10:00 - 23:00</p>
        <p class="main_container--content--order_area--restaurant_info--opening_times">Fr-So 10:00 - 00:00</p>
        <div class="main_container--content--order_area--restaurant_info--rating">
      <svg
        class="main_container--content--order_area--restaurant_info--rating--stars" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 576 512">        
        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
        <!--!Font Awesome Free 6.6.0 by @font-awesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
      </svg>
      <svg
        class="main_container--content--order_area--restaurant_info--rating--stars" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 576 512">        
        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
        <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
      </svg>
      <svg
        class="main_container--content--order_area--restaurant_info--rating--stars" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 576 512">        
        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
        <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
      </svg>
      <svg
        class="main_container--content--order_area--restaurant_info--rating--stars" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 576 512">        
        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
        <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
      </svg>
      <svg 
        class="main_container--content--order_area--restaurant_info--rating--stars" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 576 512">
        <path d="M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3 0 289.2zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z"/>
        <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
      </svg>
        </div>
      </div>
      <nav id="main_container--content--order_area--nav" class="main_container--content--order_area--nav">
        <div class="main_container--content--order_area--nav--menu_dishes">
          ${menuDishes}
        </div>
      </nav>      
  `;
}

function getCategoryNamesTemplate(index, menuDishes) {
  return /*html*/ `
    <a href="#dishesLink${index}">${menuDishes[index]}</a>
  `;
}

function getCategoryTemplate(index, heading) {
  return /*html*/ `
      <div class="main_container--content--order_area--main_dishes">      
      <div class="main_container--content--order_area--main_dishes--content">
        <img id="dishesLink${index}" src="./assets/img/${index}.jpg" alt="Img" class="main_container--content--order_area--main_dishes--img" />
        <h2 class="main_container--content--order_area--main_dishes--content--heading">${heading}</h2>
        <div id="dishes${index}" >
        </div>
      </div>
    </div>
    
  `;
}

function getDishesTemplate(index, dishesArray, dishType) {
  return /*html*/ `
  
    <div class="main_container--content--order_area--main_dishes--content--dishes">
      <h3 class="main_container--content--order_area--main_dishes--content--dishes--heading">${dishesArray[index].name}</h3>
      <p class="main_container--content--order_area--main_dishes--content--dishes--ingredients"> ● ${dishesArray[index].ingredients
        .join(" ● ")
        .replace(/, /g, " ")}</p>
      <span class="main_container--content--order_area--main_dishes--content--dishes--price">${dishesArray[index].price}€</span>
      <svg  onclick="updateBasketValue(${index},'${dishType}')" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
        <path
          d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
      </svg>
    </div> 
  `;
}

function renderFooterTemplate() {
  return /*html*/ `
    <img class="main_container--footer--player_1" src="./assets/img/player_1.png" alt="">
    <img class="main_container--footer--ball" src="./assets/img/ball.png" alt="">
    <img class="main_container--footer--player_1" src="./assets/img/player_2.png" alt="">
  `;
}

function renderBasketHeader() {
  return /*html*/ `
  <h1 class="main_container--content--basket--header_container--heading">Warenkorb</h1>
  <svg
    onclick="toggleBasket()"
    class="main_container--content--basket--header_container--close_button"
    id="basketClose" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 -960 960 960">
    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
  </svg>
  <div class="main_container--content--basket--header_container--switch_delivery">
  <button onclick="switchToDelivery()" id="delivery_button" class="main_container--content--basket--header_container--switch_delivery--button">
  <svg     
    class="main_container--content--basket--header_container--switch_delivery--button--icon"
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 -960 960 960">
    <path d="M200-80q-83 0-141.5-58.5T0-280q0-83 58.5-141.5T200-480q83 0 141.5 58.5T400-280q0 83-58.5 141.5T200-80Zm0-80q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm240-40v-200L312-512q-12-11-18-25.5t-6-30.5q0-16 6.5-30.5T312-624l112-112q12-12 27.5-18t32.5-6q17 0 32.5 6t27.5 18l76 76q28 28 64 44t76 16v80q-57 0-108.5-22T560-604l-32-32-96 96 88 92v248h-80Zm180-540q-33 0-56.5-23.5T540-820q0-33 23.5-56.5T620-900q33 0 56.5 23.5T700-820q0 33-23.5 56.5T620-740ZM760-80q-83 0-141.5-58.5T560-280q0-83 58.5-141.5T760-480q83 0 141.5 58.5T960-280q0 83-58.5 141.5T760-80Zm0-80q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/>
  </svg>
  <div class="main_container--content--basket--header_container--switch_delivery--button--info">
    <p>Lieferung</p>
    <p>15-40min</p>
  </div>
  </button>
  <button onclick="switchToPickup()" id="pickup_button" class="main_container--content--basket--header_container--switch_delivery--button">
  <svg 
    class="main_container--content--basket--header_container--switch_delivery--button--icon"
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 -960 960 960">
    <path d="M400-80v-280h-80v-240q0-33 23.5-56.5T400-680h160q33 0 56.5 23.5T640-600v240h-80v280H400Zm80-640q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720Z"/>
  </svg>
  <div class="main_container--content--basket--header_container--switch_delivery--button--info">
    <p>Abholung</p>
    <p>15min</p>
  </div>
  </button>
  </div>
`;
}

function basketPreOrderTemplate() {
  return /*html*/ `
    <div class="main_container--content--basket--summary_container--order_info">
      <h1 class="main_container--content--basket--summary_container--order_info--heading">Wähle dein Festmahl</h1>
      <p class="main_container--content--basket--summary_container--order_info--textarea">Stöbere durch unsere Speisekarte, stelle dein Menü zusammen und genieße deine Mahlzeit.</p>
    </div>
  `;
}

function renderBasketDishes(index, dishesArray, dishType, currentPrice) {
  return /*html*/ `
<div class="main_container--content--basket--dishes_container--dishes">
  <span class="main_container--content--basket--dishes_container--dishes--info">
    <div class="main_container--content--basket--dishes_container--dishes--info--name">${dishesArray[index].name}</div>
    <div class="main_container--content--basket--dishes_container--dishes--info--data">
      <div class="main_container--content--basket--dishes_container--dishes--info--data--value">
        <svg
          onclick="removeFromBasket(${index},'${dishType}')"
          class="main_container--content--basket--dishes_container--dishes--info--data--value--button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960">
          <path d="M200-440v-80h560v80H200Z" />
        </svg>
        ${dishesArray[index].basketValue}
        <svg
          onclick="updateBasketValue(${index},'${dishType}')"
          class="main_container--content--basket--dishes_container--dishes--info--data--value--button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960">
          <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
        </svg>
      </div>
      <div class="main_container--content--basket--dishes_container--dishes--info--data--price">
        <span class="main_container--content--basket--dishes_container--dishes--info--data--price--value">${currentPrice}</span>€
      </div>
      <svg
        onclick="clearBasket(${index},'${dishType}')"
        class="main_container--content--basket--dishes_container--dishes--info--data--value--button"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960">
        <path
          d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
      </svg>
    </div>    
  </span>
</div>
  `;
}

function renderBasketSummary(subtotal, deliveryCosts, overallPrice) {
  return /*html*/ `
    <div class="main_container--content--basket--summary_container--overall_price_container">
      <div class="main_container--content--basket--summary_container--overall_price_container--subtotal">
        <span>Zwischensumme:</span>
        <span>${subtotal}€</span>
      </div>
      <div class="main_container--content--basket--summary_container--overall_price_container--delivery_costs">
        <span>Lieferkosten:</span>
        <span class="main_container--content--basket--summary_container--overall_price_container--delivery_costs--span">
        <!-- !Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. -->
        <svg 
          id="EasterEggIcon"
          class="main_container--content--basket--summary_container--overall_price_container--delivery_costs--span--EasterEgg"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 512 512">
          <path fill="#cc0000" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
        </svg>
          ${deliveryCosts}€
        </span>
      </div>
      <div class="main_container--content--basket--summary_container--overall_price_container--overall_price">
        <span>Gesamt:</span> 
        <span>${overallPrice}€</span>
      </div>
      <button onclick="triggerOrder()" class="main_container--content--basket--summary_container--overall_price_container--pay_button">Bezahlen: ${overallPrice}€</button>
    </div>
    
  `;
}

function basketOrderedTemplate() {
  return /*html*/ `
    <div class="main_container--content--basket--summary_container--order_info">
      <h1 class="main_container--content--basket--summary_container--order_info--heading">Vielen Dank für deine Bestellung!</h1>
      <p class="main_container--content--basket--summary_container--order_info--textarea">Dein Essen wird schon bald frisch und heiß zu dir geliefert.</p>
      <img id="main_container--content--basket--summary_container--order_info--img" class="main_container--content--basket--summary_container--order_info--img" src="./assets/img/dragon_basket.png" alt="">
    </div>
  `;
}

function renderBasketButtonTemplate(overallPrice) {
  return /*html*/ `      
    <button onclick="toggleBasket()" class="main_container--basket" id="basketButton">Warenkorb:<p>${overallPrice}€</p></button>
  `;
}
