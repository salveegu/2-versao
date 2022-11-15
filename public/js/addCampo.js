let contador = 0;

var btn_add = document.getElementById("add");

var formDiv = document.getElementById("createEletronicProductForm");

btn_add.addEventListener("click", function (btn) {
  btn.preventDefault();
  contador++;
  createFields();
});

function createFields() {
  // Inicio criação da classe Row ----------------> ROW
  var formRowDiv = document.createElement("div");
  formRowDiv.setAttribute("class", "form-row");
  formRowDiv.setAttribute("id",`row_div_${contador}`);
  //  Fim criação da classe Row ------------------>
console.log(formDiv);
  // Inicio da classe form-group       Grupo 1
  var formGroupDiv1 = document.createElement("div");
  formGroupDiv1.setAttribute("class", "form-group col-md-4");
  // Fim  da classe form-group


  // Inicio da classe form-group       Grupo 2
  var formGroupDiv2 = document.createElement("div");
  formGroupDiv2.setAttribute("class", "form-group col-md-4");
  // Fim  da classe form-group

  // Inicio da classe form-group       Grupo 3
  var formGroupDiv3 = document.createElement("div");
  formGroupDiv3.setAttribute("class", "form-group col-md-4");
  // Fim da classe form-group

  // Criação do label1 do nome da lampada 1
  var labelLampModel = document.createElement("label");
  labelLampModel.setAttribute("for", `nome${contador}`);
  var txtLabelLampModel = document.createTextNode("Nome do modelo da Lâmpada:");
  labelLampModel.appendChild(txtLabelLampModel);
  // Fim da Criação do label1 do nome da lampada 1

  // Criação do label2 tempo de uso da lampada 1
  var labelLampOnByDay = document.createElement("label");
  labelLampOnByDay.setAttribute("for", `hours${contador}`);
  var txtlabelLampOnByDay = document.createTextNode(
    "Por quantas horas ela fica ligada por dia:"
  );
  labelLampOnByDay.appendChild(txtlabelLampOnByDay);
  // FIM  Criação do label2 tempo de uso da lampada 1

  // Criação do label3 potencia da lampada 1
  var labelLampPower = document.createElement("label");
  labelLampPower.setAttribute("for", `lampPower${contador}`);
  var txtlabelLampPower = document.createTextNode(
    "Potência da lampâda em watts:"
  );
  labelLampPower.appendChild(txtlabelLampPower);
  // Fim da Criação do label3 potencia da lampada 1

  // Criação do input1 do nome da lampada 1
  var inputLampModel = document.createElement("input");
  inputLampModel.setAttribute("type", "text");
  inputLampModel.setAttribute("name", `nomeDaLampada${contador}`);
  inputLampModel.setAttribute("autocomplete", "off");
  inputLampModel.setAttribute("class", "form-control");
  inputLampModel.setAttribute("placeholder", "Nome");
  // FIM Criação do input1 do nome da lampada 1

  // Criação do input2 do tempo que a  lampada 1 fica ligada
  var inputLampOnByDay = document.createElement("input");
  inputLampOnByDay.setAttribute("type", "text");
  inputLampOnByDay.setAttribute("name", `hours${contador}`);
  inputLampOnByDay.setAttribute("autocomplete", "off");
  inputLampOnByDay.setAttribute("class", "form-control");
  inputLampOnByDay.setAttribute(
    "placeholder",
    "Horas"
  );
  //  FIM da Criação do input2 do tempo que a  lampada 1 fica ligada

  // Criação do input3 da potencia da  lampada 1
  var inputLampPower = document.createElement("input");
  inputLampPower.setAttribute("type", "text");
  inputLampPower.setAttribute("name", `lampPower${contador}`);
  inputLampPower.setAttribute("autocomplete", "off");
  inputLampPower.setAttribute("class", "form-control");
  inputLampPower.setAttribute("placeholder", "Potência em W");
  // FIm da Criação do input3 da potencia da  lampada 1
 

  formGroupDiv1.appendChild(labelLampModel);
  formGroupDiv1.appendChild(inputLampModel);

  formGroupDiv2.appendChild(labelLampOnByDay);
  formGroupDiv2.appendChild(inputLampOnByDay);

  formGroupDiv3.appendChild(labelLampPower);
  formGroupDiv3.appendChild(inputLampPower);

  
  formRowDiv.appendChild(formGroupDiv1);
  formRowDiv.appendChild(formGroupDiv2);
  formRowDiv.appendChild(formGroupDiv3);

  formDiv.appendChild(formRowDiv);
}
