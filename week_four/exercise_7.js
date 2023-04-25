
// updating paragraph content 
function updateParagraph(){
  
    var paragraph_element = document.getElementById('paragraph');
    var input_element = document.getElementById('myinput');
    paragraph_element.firstChild.nodeValue = input_element.value;
}



// setting the html click listener
function loadHTMLcontent(){
   
    // var button_element = document.getElementById('mybutton');
    // button_element.addEventListener('click', callAlert);
    var input_element = document.getElementById('myinput');
    input_element.addEventListener('keyup', updateParagraph);

}



// loading document
document.addEventListener('DOMContentLoaded', loadHTMLcontent);