let contador = 0;

var btn_delete = document.getElementById("delete");
const div_pai = document.querySelector("#createEletronicProductForm");
const div_filho = document.querySelector(`#createEletronicProductForm #row_div_${contador}`);

btn_delete.addEventListener("click",function(btn){

  btn.preventDefault();
  contador++;
  deleteFields();
});

function deleteFields(){

  div_pai.removeChild(div_filho);
}