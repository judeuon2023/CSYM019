

function performAction(){

    // accessing element
    var circle_element = document.getElementById('circle')

    // excersie two changing the style of the button
    circle_element.style.backgroundColor = 'blue'
 
}

// run this function when the page complete loading
function onPageLoad(){

    var circle_element = document.getElementById('circle')
    circle_element.addEventListener('click', performAction)
    circle_element.style.opacity = 0.5
    
}


document.addEventListener('DOMContentLoaded', onPageLoad)