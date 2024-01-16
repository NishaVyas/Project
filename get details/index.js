function handleFormSubmit(event) {
    event.preventDefault();
    let myObj = {
        username: event.target.username.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
    };
    axios.post("https://crudcrud.com/api/2d405189ab864bd4a38197c0b340c1c9/appoinmentData", myObj)
        .then((response) => {
            console.log(response);
            domContentLoader();
            event.target.username.value = "";
            event.target.email.value = "";
            event.target.phone.value = "";
        })
        .catch(err => console.error(err));

}
function domContentLoader(){
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
    
}
document.addEventListener('DOMContentLoaded',domContentLoader);
