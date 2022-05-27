document.getElementById('btn').onclick = function(){add()}
// document.getElementById('delt').onclick = function(){deleteRow(r)()}

function add(){
    var nomArticle = document.getElementById("nomArticle").value
    var quntiter = document.getElementById("quntiter").value
    var prix = document.getElementById("prix").value
    // console.log(nomArticle)
    // console.log(quntiter)
    // console.log(prix)
    var cell, ligne;
    // on récupère l'identifiant (id) de la table qui sera modifiée
    var tableau = document.getElementById("TableA");
    // nombre de lignes dans la table (avant ajout de la ligne)
    var nbLignes = tableau.rows.length;
    ligne = tableau.insertRow(-1); // création d'une ligne pour ajout en fin de table
                                   // le paramètre est dans ce cas (-1)
                                   // création et insertion des cellules dans la nouvelle ligne créée
    cell = ligne.insertCell(0); // création et insertion de la cellule 0
    cell.innerHTML =`<strong>${nbLignes}</strong>` ; // ajout du texte dans la cellule 0

    // création et insertion des cellules dans la nouvelle ligne créée
    cell = ligne.insertCell(1); // création et insertion de la cellule 0
    cell.innerHTML = nomArticle ; // ajout du texte dans la cellule 0

    cell = ligne.insertCell(2); // création insertion de la cellule 1
    cell.innerHTML = quntiter ; // ajout du texte dans la cellule 1

    cell = ligne.insertCell(3); // création insertion de la cellule 2
    cell.innerHTML = prix; // ajout du texte dans la cellule 2

    cell = ligne.insertCell(4); // création insertion de la cellule 2
    cell.innerHTML = `<button class="btn btn-danger" onclick="deleteRow(this)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
  </svg></button>`; // ajout du texte dans la cellule 2
    
//    console.log(parseInt(document.getElementById("d1").textContent)+1)
 }

 function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("TableA").deleteRow(i);
  }
