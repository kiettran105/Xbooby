let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

//config param
let countItem = items.length;
let itemActive = 0;
//event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//auto run slider
let refreshInterval = setInterval(() => {
    next.click();
},10000)
//event prev button
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem -1;
    }
    showSlider();
}


function showSlider(){
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');
    //active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
    //clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() =>{
        next.click();
    }, 10000)
}
//click thumbnail 
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () =>{
        itemActive = index;
        showSlider();
    })
})
//popup screen
const popupScreen = document.querySelector(".popup-screen");
const saleOff = document.querySelector(".Sale-off");
const closeBtn = document.querySelector(".close-btn");

window.addEventListener("load", () => {
    setTimeout(() => {
      popupScreen.classList.add("active");
    }, 1); //Popup the screen in 02 seconds after the page is loaded.
  });

  closeBtn.addEventListener("click", () => {
    popupScreen.classList.remove("active"); //Close the popup screen on click the close button.
    //Create a cookie for a day (to expire within a day) on click the close button.
    document.cookie = "WebsiteName=testWebsite; max-age=" + 24 * 60 * 60; //1 day = 24 hours = 24*60*60
  });

  //Use the created cookie to hide or show the popup screen.
  const WebsiteCookie = document.cookie.indexOf("WebsiteName=");

  if(WebsiteCookie != -1){
    popupScreen.style.display = "none"; //Hide the popup screen if the cookie is not expired.
  }
  else{
    popupScreen.style.display = "flex"; //Show the popup screen if the cookie is expired.
  }
$(document).ready(function(){
    $('.toggle').click(function(){
        $('.slidebar').toggleClass('active');
        $('.toggle').toggleClass('close');
    })
})




         