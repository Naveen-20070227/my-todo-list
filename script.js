var ul = document.getElementById("list-container");
var inputs = document.getElementById("inputs");

function add() {
    if (inputs.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item
    var item = document.createElement("li");

    // Set innerHTML safely with proper quotes
    item.innerHTML = `<input type="checkbox" onchange="this.nextElementSibling.classList.toggle('completed', this.checked)" class="task-checkbox">
                      <span class="task-text">${inputs.value}</span>
                      <button onclick="deleteItem(event)">X</button>`;

    // Append to ul
    ul.append(item);

    // Clear input
    inputs.value = "";
}

// Delete function
function deleteItem(event) {
    event.target.parentElement.remove();
}

inputs.addEventListener("keypress",function(e){
    if(e.key=="Enter"){
        add();
    }
})


