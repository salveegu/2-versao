var btn_delete = document.getElementById('delete');

var box = document.getElementById('box');

   btn_delete.addEventListener('click',function(selectField) {

    selectField.preventDefault();
    selectField.closest('.box').remove();
 });