let inp = document.querySelector('#input-box');
let addbtn = document.querySelector('#add-btn');
let ul = document.querySelector('ul');

function addtasks(){
    if (inp.value.trim() !== "") {
        // Create new list item
        let task = document.createElement('li');
        // console.dir(task);
        task.className = "li-item flex justify-between items-center bg-gray-50 border border-gray-300 rounded-lg px-6 py-3 shadow-lg transition hover:bg-gray-100 hover:shadow-xl hover:scale-105";

        // Add task text in span element
        let taskText = document.createElement('span');
        taskText.className = "font-medium text-gray-800";
        taskText.innerText = inp.value;
        task.appendChild(taskText);

        // Add delete button in the list item
        let deleteBtn = document.createElement('button');
        deleteBtn.className = "del-btn bg-red-500 text-white font-semibold px-4 py-2 rounded-lg transition transform hover:scale-105 hover:bg-red-600 active:scale-95";
        deleteBtn.innerText = "Delete";
        task.appendChild(deleteBtn);

        // Append  task to the list
        ul.appendChild(task);

        // Clear input box
        inp.value = "";

        // Add event listener on delete 
        deleteBtn.addEventListener("click", function () {
            task.remove();
        });

    } else {
        alert("Task cannot be empty!");
    }
}

addbtn.addEventListener("click", addtasks);

inp.addEventListener("keypress", function (event) {
    // console.dir(event);
    if (event.key === "Enter") {
        addtasks();
    }
});
