function doesNotPassAllValidations(name,msg) {
    if (!name){
        alert('You forgot to fill in your name!')
        return true
    } else if (!msg){
        alert('You forgot to fill in your message!')
        return true
    } else if (msg.length > 50){
        alert("this is way to long! try less words")
        return true
    }  
    return false
    
    
    
}
function submitComment() {
    
    //getting the name and massage 
    const inputField = document.getElementById('name');
    const name = inputField.value[0].toUpperCase() + inputField.value.slice(1);
    

    
    const textareaField = document.getElementById('msg');
    const msg = textareaField.value;

    //validatation
    if (doesNotPassAllValidations(name,msg)) {
        console.log('no name or massage')
        return null
    }

    //creating a new comment 
    const comment = document.createElement('section');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    
    //combine data with what we created
    h3.innerText = `${name} said:`
    p.innerText = msg;
    comment.classList.add("comment");
    comment.classList.add("borderBox")
    
    //appednding
    comment.appendChild(h3);
    comment.appendChild(p);
    
    //posting the comments on the page
    const commentSection = document.getElementById('comments')
    commentSection.appendChild(comment);
    
    //clearing the fields
    inputField.value = null
    textareaField.value = null  
}
