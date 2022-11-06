let contador = 0;

var btn_add = document.getElementById('add');

var formDiv = document.getElementById('createEletronicProductForm');


btn_add.addEventListener('click',function(btn){
    
    btn.preventDefault();
    contador++;
    createFields();
    
   
});


function createFields() {

      
    var formRowDiv = document.createElement('div').setAttribute('class','form-row');


// var formGroupDiv1 = document.createElement('div').setAttribute('class','form-group col-md-4');


// var formGroupDiv2 = document.createElement('div').setAttribute('class','form-group col-md-4');

// var formGroupDiv3 = document.createElement('div').setAttribute('class','form-group col-md-4');


// var labelLampModel = document.createElement('label').setAttribute('for',`nome${contador}`);

// var txtLabelLampModel = document.createTextNode('Digite o nome da lampada');

// labelLampModel.appendChild(txtLabelLampModel);


// var labelLampOnByDay = document.createElement('label').setAttribute('for',`hours${contador}`);


// var txtlabelLampOnByDay = document.createTextNode('Por quantas horas?');

// labelLampOnByDay.appendChild(txtlabelLampOnByDay);

// var labelLampPower = document.createElement('label').setAttribute('for',`lampPower${contador}`);



// var txtlabelLampPower = document.createTextNode('Potência da lâmpada?');

// labelLampOnByDay.appendChild(txtlabelLampPower);


// var inputLampModel = document.createElement('input').setAttribute('type','text').setAttribute('name', `nomeDaLampada${contador}`).setAttribute('autocomplete','off').setAttribute('class','form-control').setAttribute('placeholder','nome da lâmpada');


// var inputLampOnByDay = document.createElement('input').setAttribute('type','text').setAttribute('name', `hours${contador}`).setAttribute('autocomplete','off').setAttribute('class','form-control').setAttribute('placeholder','Por quantas horas ela fica ligada por dia:');


// var inputLampPower = document.createElement('input').setAttribute('type','text').setAttribute('name', `lampPower${contador}`).setAttribute('autocomplete','off').setAttribute('class','form-control').setAttribute('placeholder','potência da lâmpada');

        // formGroupDiv1.appendChild(labelLampModel).appendChild(inputLampModel);
       
        // formGroupDiv2.appendChild(labelLampOnByDay).appendChild(inputLampOnByDay);

        // formGroupDiv3.appendChild(labelLampPower).appendChild(inputLampPower);

        // formRowDiv.appendChild(formGroupDiv1).appendChild(formGroupDiv2).appendChild(formGroupDiv3);

       
        formDiv.appendChild(formRowDiv);
        
}