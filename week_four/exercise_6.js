
// updating header content
function updateHeader(){
    var head_element = document.getElementById('heading')
    head_element.firstChild.nodeValue = "New Heading"
}


// updating paragraph content 
function updateParagraph(){
  
    var paragraph_element = document.getElementById('paragraph')
    paragraph_element.firstChild.nodeValue = "New Paragraph"
}


// setting the html click listener
function loadHTMLcontent(){
    var head_element = document.getElementById('heading')
    head_element.addEventListener('click', updateHeader)

   var paragraph_element = document.getElementById('paragraph')
    paragraph_element.addEventListener('click', updateParagraph)
}



// loading document
document.addEventListener('DOMContentLoaded', loadHTMLcontent)