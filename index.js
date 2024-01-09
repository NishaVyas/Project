document.addEventListener('DOMContentLoaded', () => {
    // Load existing expenses from local storage
    loadExpenses();
});

function handleFormSubmit(event) {
    event.preventDefault();
    let myObj = {
        expenseamount: event.target.expenseamount.value,
        description: event.target.description.value,
        category: event.target.category.value,
    };
    let myObj_serial = JSON.stringify(myObj);
    localStorage.setItem(myObj.description, myObj_serial);

    updateExpenseList(); // Update the list when a new expense is added

    // Clear the form fields after adding an expense
    event.target.expenseamount.value = '';
    event.target.description.value = '';
    event.target.category.value = '';
}

function updateExpenseList() {
    const list = document.querySelector('ul');
    list.innerHTML = ''; // Clear the existing list

    // Iterate through local storage and add expenses to the list
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const storedItem = localStorage.getItem(key);
        const storedObj = JSON.parse(storedItem);

        const string = `${storedObj.expenseamount} - ${storedObj.description} - ${storedObj.category}`;
        const newLi = document.createElement('li');

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete Expense';
        deleteButton.addEventListener('click', () => {
            // Remove from screen
            newLi.remove();
            // Remove from local storage
            localStorage.removeItem(key);
        });

        // Create edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit Expense';
        editButton.addEventListener('click', () => {
            // Remove from screen
            newLi.remove();
            // Remove from local storage
            localStorage.removeItem(key);
            // Populate input fields with existing values
            document.getElementById('expenseamount').value = storedObj.expenseamount;
            document.getElementById('description').value = storedObj.description;
            document.getElementById('category').value = storedObj.category;
        });

        // Append text, edit button, and delete button to the li
        const newLiText = document.createTextNode(string);
        newLi.appendChild(newLiText);
        newLi.appendChild(editButton);
        newLi.appendChild(deleteButton);

        list.appendChild(newLi);
    }
}

function loadExpenses() {
    if (localStorage.length > 0) {
        updateExpenseList();
    }
}
