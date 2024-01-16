function handleFormSubmit(event) {
    event.preventDefault();
    let myObj = {
        username: event.target.username.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
    };
    //let myObj_serial = JSON.stringify(myObj);
    //localStorage.setItem(myObj.email, myObj_serial);
    axios.post("https://crudcrud.com/api/2d405189ab864bd4a38197c0b340c1c9/appoinment",myObj)
    .then((response) => {console.log(response)
	 })
    .catch((err) => {console.log(err)});
}
	
	
	
    const string = `${myObj.username} - ${myObj.email} - ${myObj.phone}`;
    const newLi = document.createElement('li');

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        // Remove from screen
        newLi.remove();
        // Remove from local storage
        localStorage.removeItem(myObj.email);
    });

    // Create edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
        // Remove from screen
        newLi.remove();
        // Remove from local storage
        localStorage.removeItem(myObj.email);
        // Populate input fields with existing values
        document.getElementById('username').value = myObj.username;
        document.getElementById('email').value = myObj.email;
        document.getElementById('phone').value = myObj.phone;
    });

    // Append text, edit button, and delete button to the li
    const newLiText = document.createTextNode(string);
    newLi.appendChild(newLiText);
    newLi.appendChild(editButton);
    newLi.appendChild(deleteButton);

    const list = document.querySelector('ul');
    list.appendChild(newLi);
}

module.exports = handleFormSubmit;
