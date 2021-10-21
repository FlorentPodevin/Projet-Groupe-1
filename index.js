function consulterr(){
    let date = document.getElementById("start").value
    if ( date == ""){
        alert("veuillez selection une date")
    }
    else{
        alert("Vous avez 3 Formations de disponible");
        window.open("./formationdist.html")
    }
}

function envoyerr(){
    let nom = document.getElementById("name").value;
    let prenom = document.getElementById("sname").value;
    let mail = document.getElementById("mailuser").value;

    if (nom == "" || prenom == "" || mail == ""){
        alert("Veuillez renseigner tous les champs");
    }
    else {
        alert("Le catalague de nos formations vient de vous être envoyé à votre adresse mail");
    }
}

function message(){
    let nom2 = document.getElementById("name2").value;
    let prenom2 = document.getElementById("sname2").value;
    let mail2 = document.getElementById("mailuser2").value;
    let mess = document.getElementById("textmessage").value;

    if (nom2 == "" || prenom2 == "" || mail2 == "" || mess == ""){
        alert("Veuillez renseigner tous les champs");
    }
    else {
        alert("Message envoyé, il sera traité dans les plus bref délai");
    }
}

function admin(){
    alert("Vous devez avoir les droits administrateur pour rajouter une formation");
    window.open("./espaceclient.html")
}

function login(){
    let nom3 = document.getElementById("name3").value;
    let prenom3 = document.getElementById("sname3").value;
    let mail3 = document.getElementById("mailuser3").value;

    if (nom3 == "" || prenom3 == "" || mail3 == ""){
        alert("Veuillez renseigner tous les champs");
    }
    else if (nom3 == "admin" && prenom3 =="admin" && mail3 == "admin@admin.com"){
        alert("Bienvenue Administrateur");
        window.open("./listeformation.html")
    }
    else {
        alert("Bienvenue User")
        window.open("./index.html");
    }
}