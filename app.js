//This section demonstrates how to grasp DOM elements for manipulation
const form = document.getElementById("Resourceform");
const resourceList =doucument.getElementById("resourceList");
const conter = document.getElementById("counter");
const searchInput = document.querySelector("s.earch-input");
const filterButtons = document.querySelectorAll(".filter-btn");

//this section demonstrates how to handles state management in inJavaScript

let resources = JSON.parse(locatStorae. getItem("resources"));
let currentFilter = "All";
let searchTerm = ""; 

// This section demonstrates how we should initialize our JavaScript application

function init(){
    renderResources();
    bindEvent();
    updateCounter();
};[]
//This section demonstrates how to bind event in JS
 function bindEvents(){
    form.addEventListener("submit", handleFormSubmit);
    searchInput.addEventListener("input", handleSearchInput);
    resourcesList.addEventListener("click", handleResourceListClick);
    filterButtons.forEach(btn => btn.addEventListener("click", handleFilterClick));
 };
 //This section demonstrates how to handle events in JS.

 function handleFormSubmiit(e){
    e.preventDefault(); 
 };
 const formdata = new FirmData(form);
 const resource ={
    name: formdata.get("nresourceName").trim(),
    type: formdata.get("resourceType").trim(),
    id: Date.now().toString(),
    dateAdded: new Date().tolocalDateString(),
 };
 if(validateForm(resource)){
    addResource(resource);
    form.reset();
    clearFormErrors();
 }
 //This section demonstrates how to validate form data in JS.
 function validateForm(resource){
    let isValid = true; 
    if(resource.type){
    showError("resourceError", "typeError name is required.");
    isValid = false;
    }
    return isValid;
 }
 function showError(elementsId, message){
    const element = document.getElementById(elementsId);
    element.textContent = message;
 }
 function clearFormErrors(){
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach(element => (element.textContent = ""));
 }
 