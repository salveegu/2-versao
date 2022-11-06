const btn_delete = document.getElementById('delete');

const box = document.getElementById('box');

btn_delete.addEventListener('click', (selectField) => {
  selectField.preventDefault();
  selectField.closest('.box').remove();
});
