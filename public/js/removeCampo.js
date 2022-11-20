var btn_delete = document.getElementById("delete");

btn_delete.addEventListener("click",function (btn) {

  btn.preventDefault();
  deleteFields();
}); 

function deleteFields(){

 
  var lineNumbers = document.querySelectorAll('.additional-row').length;

  var lastElement = document.getElementsByClassName('additional-row')[lineNumbers - 1];

  lastElement.remove();

}