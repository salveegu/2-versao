var btn_add = document.getElementById('add');
var box = document.getElementById('box');
// var form1 = document.getElementById('form1');

var contador=0;

btn_add.addEventListener('click',function(btn){
    
    btn.preventDefault();
    contador++;
    createFiel1();
    createField2();
    createField3();
   
});


function createFiel1(){

        var elemento = document.createElement('label');
        elemento.setAttribute('for','nome');
        elemento.textContent = 'Nome do modelo da Lâmpada:';
        
        box.appendChild(elemento);

        var elemento = document.createElement('input');
        elemento.setAttribute('type','text');
        elemento.setAttribute('name', `nomeDaLampada${contador}`);
        elemento.setAttribute('id',`idDaLampada${contador}`);
        elemento.setAttribute('autocomplete','off');
       elemento.setAttribute('class','form-control')
        box.appendChild(elemento);

}

function createField2(){

    var elemento = document.createElement('label');
    elemento.setAttribute('for','nome');
    elemento.textContent = 'Por quantas horas ela fica ligada por dia:';
    box.appendChild(elemento);

    var elemento = document.createElement('input');
    elemento.setAttribute('type','text');
    elemento.setAttribute('name',`tempoDaLampadaLigada${contador}`);
    elemento.setAttribute('id',`tempoDaLampadaLigada${contador}`);
    elemento.setAttribute('autocomplete','off');
    elemento.setAttribute('class','form-control')
    box.appendChild(elemento);

    
}

function createField3(){

    var elemento = document.createElement('label');
    elemento.setAttribute('for','nome');
    elemento.textContent = 'Por quantas horas ela fica ligada por dia:';
    box.appendChild(elemento);

    var elemento = document.createElement('input');
    elemento.setAttribute('type','text');
    elemento.setAttribute('name',`tempoDaLampadaLigada${contador}`);
    elemento.setAttribute('id',`tempoDaLampadaLigada${contador}`);
    elemento.setAttribute('autocomplete','off');
    elemento.setAttribute('class','form-control')
    box.appendChild(elemento);

    
}