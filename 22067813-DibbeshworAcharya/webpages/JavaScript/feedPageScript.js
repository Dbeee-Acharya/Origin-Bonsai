var content = document.querySelectorAll(".post-content"); //selects all elements with the class "post-content"

var x = 0; //x shows the current post number
var y = 4; //y shows the total number of posts

//nextSlide function scrolls to the next post
function nextSlide() {
    document.getElementById("post" + (x+1)).classList.remove("active"); //selects the current post and removes the active class which contains the display block
    x = (x + y + 1) % y; //this changes the value of x to the next post and reverts it to 1 if x exceeds the value of number of posts 

    document.getElementById("post" + (x+1)).classList.add("active") //selects the post next to the current oone and adds the current class 
}

//prevSlide function scrolls back to the previous slide
function prevSlide() {
    document.getElementById("post" + (x+1)).classList.remove("active"); //selects the current post and removes the active class
    x = (x + y - 1) % y //changes the value of x to the post previous to the current one and reverts it to 1 if x is less than 0

    document.getElementById("post" + (x+1)).classList.add("active"); //selects the previous post and adds the active class
}