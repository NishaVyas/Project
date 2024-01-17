function handleFormSubmit(event) {
    event.preventDefault();
    let myObj = {
        username: event.target.username.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
    };
    const userId = event.target.getAttribute('data-user-id');
    if (userId) {
        // Edit existing user
        axios.put(`https://crudcrud.com/api/2d405189ab864bd4a38197c0b340c1c9/appoinmentData/${userId}`, myObj)
            .then((response) => {
                console.log(response);
                domContentLoader(); // Update the website with new user details
                event.target.reset(); // Clear the form
                event.target.removeAttribute('data-user-id');
            })
            .catch((err) => {
                console.error(err);
            });
    } else {
        // Add new user
        axios.post("https://crudcrud.com/api/2d405189ab864bd4a38197c0b340c1c9/appoinmentData", myObj)
            .then((response) => {
                console.log(response);
                domContentLoader(); // Update the website with new user details
                event.target.reset(); // Clear the form
            })
            .catch(err => console.error(err));
    }
}
function domContentLoader(){
    const list = document.querySelector('ul');
    list.innerHTML = ''; 
    axios.get("https://crudcrud.com/api/2d405189ab864bd4a38197c0b340c1c9/appoinmentData")
        .then((response) => {
            const data = response.data;
            data.forEach((userObj)=>{
                if(userObj.username&& userObj.email&& userObj.phone){
                   showUserDetails(userObj);
                }
           });
        })
        .catch((err) => {
            console.log(err);
        });
}
function showUserDetails(userObj){

    const string = `${userObj.username} - ${userObj.email} - ${userObj.phone}`;
    const list = document.querySelector('ul');
    const newLi = document.createElement('li');
    const newLiText = document.createTextNode(string);
    newLi.appendChild(newLiText);
    list.appendChild(newLi);

    const deleteButton = document.createElement('button');
    const deleteButtonText = document.createTextNode('Delete');
    deleteButton.appendChild(deleteButtonText);
    deleteButton.className = 'delete-button';
    newLi.appendChild(deleteButton);

    const editButton = document.createElement('button');
    const editButtonText = document.createTextNode('Edit');
    editButton.appendChild(editButtonText);
    editButton.className = 'edit-button';
    newLi.appendChild(editButton);


    newLi.addEventListener('click',function(event){
        if(event.target.classList.contains('delete-button')){
            const userToDelete = event.target.parentElement;
            userToDelete.remove();
            axios.delete(`https://crudcrud.com/api/2d405189ab864bd4a38197c0b340c1c9/appoinmentData/${userObj._id}`)
               .then((response) => {
                    console.log(response);
                })
               .catch((err) => {
                    console.log(err);
                });
        }
    });

    editButton.addEventListener('click', function () {
        document.getElementById('username').value = userObj.username;
        document.getElementById('email').value = userObj.email;
        document.getElementById('phone').value = userObj.phone;
        document.querySelector('form').setAttribute('data-user-id', userObj._id);
    });
    
}
document.addEventListener('DOMContentLoaded',domContentLoader);
