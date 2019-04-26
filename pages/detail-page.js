function submitComment() {
    //getting the name and massage 
    const inputField = document.getElementById('name');
    const name = inputField.value;
    const textareaField = document.getElementById('msg');
    const msg = textareaField.value;

    //creating a new comment 
    const comment = document.createElement('section');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    //combine data with what we created
    h3.innerText = `${name} said:`
    p.innerText = msg;
    comment.classList.add("comment");
    
    //appednding
    comment.appendChild(h3);
    comment.appendChild(p);

    //posting the comments on the page
    const commentSection = document.getElementById('comments')
    commentSection.appendChild(comment);

    //clearing the fields
    inputField.value = null
    textareaField.value = null
    console.log(msg)
    
}