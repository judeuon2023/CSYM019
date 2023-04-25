
function loadFunction(){
    head_element = document.getElementById('heading')
    head_element.firstChild.nodeValue = "New Heading"


    paragraph_element = document.getElementById('paragraph')
    paragraph_element.firstChild.nodeValue = "New Paragraph"
}


document.addEventListener('click', loadFunction)