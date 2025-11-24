var temp;

function jump(x){
    var id = x.id;

    if(id == "AM"){
        document.getElementById("Bio").scrollIntoView();
    }

    if(id == "WE"){
        document.getElementById("Experience").scrollIntoView();
    }

    if(id == "HB"){
        document.getElementById("Hobbies").scrollIntoView();
    }

    if(id == "SC"){
        document.getElementById("FaceBook").scrollIntoView();
    }
}