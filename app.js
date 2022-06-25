let clientID ="-2yT9-B7fKq2ROF16qevFLw9OeXkPFU93B7ssClGeh0";
let finalPoint=`https://api.unsplash.com/photos/random/?client_id=${clientID}`;


let imageItem=document.querySelector("#imageresult")


//add click event to imagebutton such that when clicked it displays a random image
let imageBtn=document.querySelector("#imgbtn")

imageBtn.addEventListener("click", showRandomImage)

function showRandomImage(){
    fetch(finalPoint)
 
.then(res=>res.json())

.then(data=>imageItem.src = data.urls.regular)

.catch(error=>console.log(error))

 }

  //add click event to submit button so that when clicked it submits a comment
 const submitBtn=document.querySelector("#submitbtn")
      
submitBtn.addEventListener("click",writeComment)

function writeComment(){
    const addComment=document.querySelector("#comment").value
    let newComment=document.createElement("li")
    
     newComment.textContent=addComment
     document.querySelector("#commentList").appendChild(newComment)

}
