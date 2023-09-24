const itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : []; //? Creating a variable(array) to storage the items. then with JSON.parse we transforme the content into an object with the keyword: items. if not we display an empty array. The "getItem" function shows the items we have saved there.

console.log(itemsArray);

document.querySelector("#enter").addEventListener("click", () => {
  //? this function creates an event listener type click of the button created with the class #enter. it then reads the input we add on the input class #item and saves it in a variable called item. in the end it calls the function createItem with the argument that its read on the inputs.
  const item = document.querySelector("#item");

  createItem(item);
});
function displayItems() {
  //? Here im creating a function to display the items saved in the itemsArray. i use the loop for to read each item and then create a HTML for each item saved.
  let items = "";
  for (let i = 0; i < itemsArray.length; i++) {
    //? Here i will display the HTML i created as a list of items. imagine a empty space in the HTML and i write the content here and send it there.
    items += `<div class="item"> 
        <div class="input-controller">
          <textarea disabled>${itemsArray[i]}</textarea> 
          <div class="edit-controller">
            <i class="fa-solid fa-check deleteBtn"></i>
            <i class="fa-solid fa-pen-to-square editBtn"></i>
          </div>
        </div>
        <div class="update controller">
          <button class="saveBtn">Save</button>
          <button class="cancelBtn">Cancel</button>
        </div>
      </div>`;
  }
  //? div class="item" this works as a general div for the text area i will display 
  //?the disabled proprety doesnt let the user interact with the text area. I implement the itemsAray[i] to display the iterations of the for loop. i can use itemsArray in here because i save it as a constante.
  //? ICON check from "font awesome" i also add a class for delete button because this will erase all task checked
  //?CON edit from "font awesome" i also add a class for edit button because this will edit the input

  document.querySelector(".to-do-list").innerHTML = items; //? here im acessing the empty div #to-do-list i puting there the inf o want to display. 
  activateDeleteListeners(); //? im calling this function here because i want then to run as soon as i run the "displayItems" function.
  activateEditListeners();
  activateSaveListeners();
  activateCancelListeners();
}

function createItem(item) {
  //? This function will add the items we read on the "click button" #enter function and save it on local storage.
  itemsArray.push(item.value); //? Here im using "push" to add the value of the item read and storage it in the "itemsArray" array we created on the biginning.
  localStorage.setItem("items", JSON.stringify(itemsArray)); //? Here im using "JSON.stringify" to transform the the item.value into a string and save it into local storage with the "key" items in my itemsArray Object.
  location.reload(); // this refresh the page
}

window.onload = function () {
    displayItems();
};
