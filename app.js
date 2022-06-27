//add DomContentLoaded event for everything in the html to load before firing 
document.addEventListener('DOMContentLoaded',onPageLoad); 

//Runs on page load;
function onPageLoad (){ 
    allworks() 
    
}
function allworks(){
let clientID ="-2yT9-B7fKq2ROF16qevFLw9OeXkPFU93B7ssClGeh0";
let finalPoint=`https://api.unsplash.com/photos/random/?client_id=${clientID}`;


let imageItem=document.querySelector("#imageresult")


//add click event to imagebutton such that when clicked it displays a random image
//also display the camera used for each photo
let imageBtn=document.querySelector("#imgbtn")
let cameraModel=document.querySelector("#cameraModel")

imageBtn.addEventListener("click", showRandomImage)

function showRandomImage(){
    fetch(finalPoint)
 
.then(res=>res.json())

.then(/*data=>imageItem.src = data.urls.regular*/
       data=>{
           imageItem.src=data.urls.regular
           
           cameraModel.innerText=data.exif.make
        
       }

)

.catch(error=>console.log(error))

 }

  //add click event to submit button so that when clicked it submits a comment
 const submitBtn=document.querySelector("#submitbtn")
      
submitBtn.addEventListener("click",writeComment)


function writeComment(){

    const addComment=document.querySelector("#comment").value
    let newComment=document.createElement("li")
    
     newComment.textContent=addComment
     newComment.addEventListener("click",()=>newComment.remove())//enable user to delete a comment
     document.querySelector("#commentList").appendChild(newComment)

}

//add submit event to submit contact form and alert when successful
const contactForm=document.querySelector("#contactform")
contactForm.addEventListener("submit",(e)=>{
    e.preventDefault(); 
    setTimeout(() =>{
        alert ('Form submitted succefully!'), 2000});
})
}
