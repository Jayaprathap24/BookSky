// selectpopupbox and popupoverlay
var popupoverlay=document.querySelector('.popup-overlay');
var popupbox=document.querySelector('.popupbox');
var addpopupbutton =document.querySelector('#popup-button');
addpopupbutton.addEventListener("click",function(event){
    popupoverlay.style.display="block";
    popupbox.style.display="block";

})
//select cancel button
var cancel=document.getElementById('cancel-button')
cancel.addEventListener('click',function(event){
    event.preventDefault()
    popupoverlay.style.display="none";
    popupbox.style.display="none";
})
// select container,adding,book-title,book-author,book-description,:
var container = document.querySelector('.container')
var adding = document.getElementById('adding')
var booktitle = document.getElementById('book-title')
var bookauthor = document.getElementById('book-author')
var description = document.getElementById('book-description')
adding.addEventListener('click',function(event){
    event.preventDefault()
    var div=document.createElement('div')
    div.setAttribute('class',"book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2> 
        <h5>${bookauthor.value}</h5>
        <p>${description.value}</p>
    <button onclick="delbook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none";
    popupbox.style.display="none";

})

function delbook(event){
    event.target.parentElement.remove()
}