var aboutButton = document.getElementById("aboutButton");
var projectsButton = document.getElementById("projectsButton");
var aboutPage = document.getElementById("aboutPage");
var projectsPage = document.getElementById("projectsPage");
var contactButton = document.getElementById("contactButton");
var contactPage = document.getElementById("contactPage");

aboutButton.addEventListener("click", function() {
  
  projectsPage.classList.remove("visible");
  projectsPage.classList.add("hidden");
  contactPage.classList.remove("visible");
  contactPage.classList.add("hidden");
  aboutPage.classList.remove("hidden");
  aboutPage.classList.add("visible");

  aboutButton.classList.add("navbarButtonIsSelected");
  projectsButton.classList.remove("navbarButtonIsSelected");
  contactButton.classList.remove("navbarButtonIsSelected");
  
});

projectsButton.addEventListener("click", function() {
  
  aboutPage.classList.remove("visible");
  aboutPage.classList.add("hidden");
  contactPage.classList.remove("visible");
  contactPage.classList.add("hidden");
  projectsPage.classList.remove("hidden");
  projectsPage.classList.add("visible");

  aboutButton.classList.remove("navbarButtonIsSelected");
  projectsButton.classList.add("navbarButtonIsSelected");
  contactButton.classList.remove("navbarButtonIsSelected");
  
});

contactButton.addEventListener("click", function() {
  
  aboutPage.classList.remove("visible");
  aboutPage.classList.add("hidden");
  projectsPage.classList.add("hidden");
  projectsPage.classList.remove("visible");
  contactPage.classList.add("visible");
  contactPage.classList.remove("hidden");

  aboutButton.classList.remove("navbarButtonIsSelected");
  projectsButton.classList.remove("navbarButtonIsSelected");
  contactButton.classList.add("navbarButtonIsSelected");
  
});