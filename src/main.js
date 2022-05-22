/*
            Arlequin Enterprises LLC Presents:
            ***ROMANCE NOVEL COVER GENERATOR***
            By Anthony Shellman and Emma Russell
*/

//                  ***QUERY SELECTORS***


// Cover-Related Query Selectors
  var coverImage = document.querySelector(".cover-image");
  var coverTitle = document.querySelector(".cover-title");
  var taglineVanilla = document.querySelector(".tagline");
  var taglineNum1 = document.querySelector(".tagline-1");
  var taglineNum2 = document.querySelector(".tagline-2");

// Button Query Selectors
  var randomButton = document.querySelector(".random-cover-button");
  var homeButton = document.querySelector(".home-button");
  var saveButton = document.querySelector(".save-cover-button");
  var viewSavedbutton = document.querySelector(".view-saved-button");
  var makeNewButton = document.querySelector(".make-new-button");
  var createBookButton = document.querySelector(".create-new-book-button");

// Page View Mode Query Selectors
  var homeView = document.querySelector(".home-view");
  var savedView = document.querySelector(".saved-view");
  var formView = document.querySelector(".form-view");

// Make Your Own Cover Query Selectors
  var userCoverOutput = document.querySelector(".user-cover");
  var userTitleOutput = document.querySelector(".user-title");
  var userDesc1Output = document.querySelector(".user-desc1");
  var userDesc2Output = document.querySelector(".user-desc2");

// Saved Covers Query Selectors
  var savedCoversSection = document.querySelector(".saved-covers-section");

// Provided Saved Covers Array
  var savedCovers = [
    new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
  ];

//                  ***EVENT LISTENERS***

// Load-Based Event Listener
  window.addEventListener('load', getRandomCover)

// Click-Based Event Listeners
  randomButton.addEventListener('click', getRandomCover)
  homeButton.addEventListener('click', displayHomeView)
  saveButton.addEventListener('click' , saveCover)
  viewSavedbutton.addEventListener('click', displaySavedView)
  makeNewButton.addEventListener('click', displayFormView)
  createBookButton.addEventListener('click', makeOwnCover)


//                     ***FUNCTIONS***

// Provided Randomizer Function
  function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  };

// Random Cover Function
  function getRandomCover() {
    var image = covers[getRandomIndex(covers)];
    var title = titles[getRandomIndex(titles)];
    var descriptor1 = descriptors[getRandomIndex(descriptors)];
    var descriptor2 = descriptors[getRandomIndex(descriptors)];

    currentCover = new Cover(image, title, descriptor1, descriptor2);

    coverImage.src = currentCover.cover;
    coverTitle.innerText = currentCover.title;
    taglineNum1.innerText = currentCover.tagline1;
    taglineNum2.innerText = currentCover.tagline2;
  };

// Page View Functions
  function displayFormView() {
    changeHomeView();
    formView.classList.remove('hidden');
    homeView.classList.add('hidden');
    savedView.classList.add('hidden');
  };

  function displaySavedView() {
    changeHomeView()
    savedView.classList.remove('hidden');
    homeView.classList.add('hidden');
    formView.classList.add('hidden');

    savedCoversSection.innerHTML = "";
      for (var i = 0; i < savedCovers.length; i++) {
      savedCoversSection.innerHTML +=
      `<section
      class="mini-cover" id="${savedCovers[i].id}">
      <img class="mini-cover" src=${savedCovers[i].cover}>
      <h2 class="cover-title"> ${savedCovers[i].title}</h2>
      <h3 class="tagline" >A tale of <span class="tagline-1"
      >${savedCovers[i].tagline1} </span> and <span class="tagline-2"
      >${savedCovers[i].tagline2} </span></h3>
      </section>`
      };
    findSavedMiniCover();
  };

  function displayHomeView() {
    homeButton.classList.add('hidden');
    savedView.classList.add('hidden');
    randomButton.classList.remove('hidden');
    saveButton.classList.remove('hidden');
    formView.classList.add('hidden');
    homeView.classList.remove('hidden');
  };

  function changeHomeView() {
    randomButton.classList.add("hidden");
    viewSavedbutton.classList.remove("hidden");
    homeButton.classList.remove("hidden");
  };

// Make Own Cover Functions
  function makeOwnCover(event) {
    event.preventDefault();
    userCoverAdd();
    userTitleAdd();
    userDesc1Add();
    userDesc2Add();

    currentCover = new Cover(userCoverAdd(), userTitleAdd(), userDesc1Add(),
    userDesc2Add());
    displayHomeView();
  };

  function userCoverAdd() {
    var coverNew = userCoverOutput.value;
    coverImage.src = coverNew;
    covers.push(coverNew);
    return coverNew;
  };

  function userTitleAdd() {
    var titleNew = userTitleOutput.value;
    coverTitle.innerText = titleNew;
    titles.push(titleNew);
    return titleNew;
  };

  function userDesc1Add() {
    var desc1New = userDesc1Output.value;
    taglineNum1.innerText = desc1New;
    descriptors.push(desc1New);
    return desc1New;
  };

  function userDesc2Add() {
    var desc2New = userDesc2Output.value;
    taglineNum2.innerText = desc2New;
    descriptors.push(desc2New);
    return desc2New;
  };

// Save Cover Function
  function saveCover() {
    if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
    };
  };

// Cover Removal Functions
  function findSavedMiniCover() {
    var savedMiniCovers = document.querySelectorAll(".mini-cover");
    for (var i = 0; i < savedMiniCovers.length; i++) {
      savedMiniCovers[i].addEventListener("dblclick", deleteSavedMiniCover);
    };
  };

  function deleteSavedMiniCover(event) {
    event.preventDefault();
    for (var i = 0; i < savedCovers.length; i++) {
      if (event.target.parentNode.id === `${savedCovers[i].id}`) {
        savedCovers.splice(i, 1);
      };
    };
    displaySavedView();
  };

/*
THANK YOU FOR READING!
COPYRIGHT ARLEQUIN ENTERPRISES LLC 2022
A SUBSIDIARY OF COOL GUY INC.
*/
