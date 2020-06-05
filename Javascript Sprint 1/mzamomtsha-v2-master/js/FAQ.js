// create an array that stores the button elements of the FAQ section

var questions = document.getElementsByClassName("Expand");

//Create a for loop that loops through the questions array(The button elements in the array)

//the variable 'i' declared in the for loop contains the index of the questions array starting from 0 and increments by 1

//The counter 'i' is used to loop through the array while assigning each item an onclick event with function

/*The function declares a variable 'content' that stores the next element(the div after the button) after the current
button element in the array*/

/* an if statement is used to check if the max height of the next element(the div after the button) after the button
 element in the array is true or has a true value. if it has a true value(anything greater than 0) the max height of
 the next element after the button is set to null. If it has a false value(0 or null) the else block gets executed,
 which sets the max height of the element after the current button element in the array to the scroll height of the content
 with in the element.A 'px' is appended since it is a styling unit of CSS*/

for (var i = 0; i < questions.length; i++){
  questions[i].onclick = function(){
    var content = this.nextElementSibling;
    if(content.style.maxHeight){
      content.style.maxHeight = null;
    }else{
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}
