const btn = document.querySelector('#btnModal');
const modal = document.querySelector('dialog');
const btnClose = document.querySelector('#btnModalClose');

btn.addEventListener('click', function() {
    modal.classList.add('open');
});

btnClose.addEventListener('click', function() {
    modal.classList.remove('open');
});
