window.onload = makeAjaxRequest; 
var xhr; 

function makeAjaxRequest(){
    
    // creating XMLHttp request object
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest(); 
    }else{
        if (window.ActiveXObject){
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
    }

    // configure Ajax Request
    if(xhr){
        xhr.open("GET", "counties.json", true); 
        xhr.send();
        xhr.onreadystatechange = showContents; 
    }else{
        document.getElementById('updatemessage').innerHTML = 'could not perform'; 
    }

}

// function to modify content
function showContents(){
    if(xhr.readyState == 4){
        if(xhr.status == 200){
            // get counties and process it 
            let data = JSON.parse(xhr.responseText); 
            let text= ""
            for(let i =0 ; i< data.counties.lenght; i++){
                text += "<tr><td>" + data.counties[i].name + "</td></tr>";
            }

            // update HTML content
            document.getElementById("countrylist").innerHTML = text
        }else{
            // display error message ... 
            document.getElementById("updatemessage").innerHTML = "An Error occured: " + xhr.status; 
        }
    }
}