// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var taglineVanilla = document.querySelector(".tagline");
var taglineNum1 = document.querySelector(".tagline-1");
var taglineNum2 = document.querySelector(".tagline-2");

var randomButton = document.querySelector(".random-cover-button");
var homeButton = document.querySelector(".home-button");
var saveButton = document.querySelector(".save-cover-button");
var viewSavedbutton = document.querySelector(".view-saved-button");
var makeNewButton = document.querySelector(".make-new-button");

var homeView = document.querySelector(".home-view");
var savedView = document.querySelector(".saved-view");
var formView = document.querySelector(".form-view");

var userCoverOutput = document.querySelector(".user-cover");
var userTitleOutput = document.querySelector(".user-title");
var userDesc1Output = document.querySelector(".user-desc1");
var userDesc2Output = document.querySelector(".user-desc2");

var createBookButton = document.querySelector(".create-new-book-button");

var savedCoversSection = document.querySelector(".saved-covers-section")
// add new variable for each button on the main page

//document is everything, everything on the page is part of doc
//this one is just focused on the cover image

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];


// Add your event listeners here 👇
// document.addEventListener('load', getRandomCoverPageLoad)
window.addEventListener('load', getRandomCover)
randomButton.addEventListener('click', getRandomCover)
homeButton.addEventListener('click', displayHomeView)
saveButton.addEventListener('click' , saveCover)
viewSavedbutton.addEventListener('click', displaySavedView)
makeNewButton.addEventListener('click', displayFormView)

createBookButton.addEventListener('click', makeOwnCover)

//this is the one that activates on load, we'll have to do another for the clicks

// Create your event handlers and other functions here 👇
//event.preventDefault()
//use this when you've set up another function and it's not working even if we're sure,
//have it in your back pocket if things are working weird

//<element>.classList.add('hidden')
//<element>.classList.remove('hidden')

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomCover() {
  var image = covers[getRandomIndex(covers)]
  //image is a new variable made for this function
  //name of index, random function, specific element we want to access from array
  var title = titles[getRandomIndex(titles)]
  var descriptor1 = descriptors[getRandomIndex(descriptors)]
  var descriptor2 = descriptors[getRandomIndex(descriptors)]

//we instantiate it here:
  currentCover = new Cover(image, title, descriptor1, descriptor2)

  coverImage.src = currentCover.cover
  coverTitle.innerText = currentCover.title
  taglineNum1.innerText = currentCover.tagline1
  taglineNum2.innerText = currentCover.tagline2
//src is where the image it's defaulting to lives in the html
//repeat this for the other categories, check to see what those are, prob innerText
  }


  function displayFormView() {
    homeButton.classList.remove('hidden');
    formView.classList.remove('hidden');
    randomButton.classList.add('hidden');
    saveButton.classList.add('hidden');
    homeView.classList.add('hidden');
    savedView.classList.add('hidden');
  }

  function displaySavedView() {
    homeButton.classList.remove('hidden');
    savedView.classList.remove('hidden');
    randomButton.classList.add('hidden');
    saveButton.classList.add('hidden');
    homeView.classList.add('hidden');
    formView.classList.add('hidden');

      savedCoversSection.innerHTML = " ";
      for (var i = 0; i < savedCovers.length; i++) {

        //" " will come into play later when we want to delete

        savedCoversSection.innerHTML +=
        //+= is important for the for loop to work

        `<section

        class="mini-cover" id="${savedCovers[i].id}">

        <img class="mini-cover" src=${savedCovers[i].cover}>

          <h2 class="cover-title">
          ${savedCovers[i].title}</h2>

            <h3 class="tagline"
            >A tale of <span class="tagline-1"
            >${savedCovers[i].tagline1} </span>
            and <span class="tagline-2"
            >${savedCovers[i].tagline2} </span></h3>

          </section>`
        }
    //interpolation! html code block!
    //mini-cover class is from line 111 of styles.css
}

  function displayHomeView() {
    homeButton.classList.add('hidden');
    savedView.classList.add('hidden');
    randomButton.classList.remove('hidden');
    saveButton.classList.remove('hidden');
    formView.classList.add('hidden');
    homeView.classList.remove('hidden')
  }

  function makeOwnCover(event) { //put event back in parameters
     // prevents default action of browser
    event.preventDefault()
    userCoverAdd();
    userTitleAdd();
    userDesc1Add();
    userDesc2Add();

    currentCover = new Cover(userCoverAdd(), userTitleAdd(), userDesc1Add(),
    userDesc2Add());

    console.log(currentCover)

    displayHomeView()

    //formView.classList.add('hidden');
    //homeView.classList.remove('hidden')
    //randomButton.classList.remove('hidden');
  }

//other ones go here:
function userCoverAdd() {
var coverNew = userCoverOutput.value;
coverImage.src = coverNew;
covers.push(coverNew)
return coverNew
}

function userTitleAdd() {
var titleNew = userTitleOutput.value;
coverTitle.innerText = titleNew;
console.log(titles)
titles.push(titleNew)
console.log(titles)
return titleNew
}

function userDesc1Add() {
var desc1New = userDesc1Output.value;
taglineNum1.innerText = desc1New;
descriptors.push(desc1New)
return desc1New
}

function userDesc2Add() {
var desc2New = userDesc2Output.value;
taglineNum2.innerText = desc2New;
descriptors.push(desc2New)
return desc2New
}

function saveCover() {
    if (!savedCovers.includes(currentCover)) {
      savedCovers.push(currentCover);
    }
}

function findSavedMiniCover() {
  var savedMiniCovers = document.querySelectorAll(".mini-cover")
  for (var i = 0; i < savedMiniCovers.length; i++) {
    savedMiniCovers[i].addEventListener("dblclick", deleteSavedMiniCover)
  }
}



//assign that html element next




//instantiate the class for a new object instance
//we have an html element selected at the top
