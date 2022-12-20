console.log("Se lee el archivo");
class Line{
    constructor(type,size){
        this.type = type;
        this.size = size;
    }
}
let lines = [];

const generateLines = ()=>{
 lines.push(new Line("Segundo Examen de Ingreso FCyT 2-2022",139));
 lines.push(new Line("Primer Examen de Ingreso FCyT 2-2022",132));
 lines.push(new Line("Tercer Examen de Ingreso FCyT 2-2022",145));
 lines.push(new Line("Segundo Examen de Ingreso FCyT 1-2022",85));
 lines.push(new Line("Primer Examen de Ingreso FCyT 2-2021",105));
 lines.push(new Line("Segundo Examen de Ingreso FCyT 2-2021",105));
 lines.push(new Line("Primer Examen de Ingreso FCyT 2-2021",139));
 lines.push(new Line("Tercer Examen de Ingreso FCyT 1-2020",75));
 lines.push(new Line("Segundo Examen de Ingreso FCyT 2-2020",90));
 lines.push(new Line("Primer Examen de Ingreso FCyT 2-2020",139));
 lines.push(new Line("Segundo Examen de Ingreso FCyT 2-2019",38));
 lines.push(new Line("Primer Examen de Ingreso FCyT 2-2019",124));
 lines.push(new Line("Tercer Examen de Ingreso FCyT 1-2019",88));
 lines.push(new Line("Segundo Examen de Ingreso FCyT 1-2019",60));
 lines.push(new Line("Primer Examen de Ingreso FCyT 1-2019",75));
 lines.push(new Line("Segundo Examen de Ingreso FCyT 2-2018",69));
 lines.push(new Line("Primer Examen de Ingreso FCyT 2-2018",99));
 lines.push(new Line("Tercer Examen de Ingreso FCyT 1-2018",139));
 lines.push(new Line("Segundo Examen de Ingreso FCyT 2-2017",102));

}

function fillTable(){

    let cont=1;
    generateLines();
    for(l of lines){
        document.getElementById('tablaExamenes').insertRow(-1).innerHTML = 
                `<tr><td class="w3-center">${cont++}</td><td>${l.type}</td>`+
                `<td class="w3-center">${l.size} KB</td>`+
                `<td class='w3-center'><a class='w3-button w3-center' href = 'docs/examen de ingreso.pdf' target="_blank" >Descargar</a></td></tr>`;
                
    }
}
function mostrarExamenesPasados(){
    console.log("mostrarExamenesPasados");
    document.getElementById('examenIngreso').style.display='none';
    document.getElementById('cronograma').style.display='none';
    document.getElementById('examenesPasados').style.display='inline';

}
function mostrarExamenIngreso(){
    console.log("mostrarExamenIngreso");
    document.getElementById('cronograma').style.display='none';
    document.getElementById('examenesPasados').style.display='none';
    document.getElementById('examenIngreso').style.display='inline';

}
function mostrarCronograma(){
    console.log("mostrarCronograma");
    document.getElementById('examenIngreso').style.display='none';
    document.getElementById('examenesPasados').style.display='none';
    document.getElementById('cronograma').style.display='inline';

}

let idActual = "admisionRegular";

function cambiarPantalla(idNuevo){
    document.getElementById("admisionRegular").style.display='none';
    
    document.getElementById(idNuevo).style.display = 'block';
    
    idActual = idNuevo;
    
}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


  function mostrar(){
    document.getElementById("BoxSubT").style.display='block';
}


function mostrar_buscador(){
    document.getElementById("contenidoB").style.display='block';
    inputBus.focus();
    if (inputbus.value === ""){
        boxBus.style.display = "none";
    }
}

function ocultar_buscador(){
    document.getElementById("contenidoB").style.display='none';
    document.getElementById("boxB").style.display='none';
    document.getElementById("BoxSubT").style.display='none';
}

document.getElementById("inputB").addEventListener("keyup", buscador);
function buscador(){
    document.getElementById("boxB").style.display='block';
    document.getElementById("boxB").style.background='red;'
}

document.getElementById("inputB").addEventListener("keyup", buscador_interno);

function buscador_interno(){


    filter = document.getElementById("inputB").value.toUpperCase();
    li = document.getElementById("boxB").getElementsByTagName("li");
    for (i = 0; i < li.length; i++){

        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){

            li[i].style.display = "";
            document.getElementById("boxB").style.display = "block";

            if (document.getElementById("inputB").value === ""){
                document.getElementById("boxB").style.display = "none";
            }

        }else{
            li[i].style.display = "none";
        }

    }
}