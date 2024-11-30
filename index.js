let titleButton1 = document.querySelector('.div-general-section5-main__button2');
let modalWindows1 = document.querySelector('.div-general-modal-windov-section5-main2');
let divMain2GeneralButton = document.querySelector('.icon-Group-8-1');

titleButton1.addEventListener('click', () => {
    modalWindows1.classList.add('active');
});

divMain2GeneralButton.addEventListener('click', (e) => {
    modalWindows1.classList.remove('active');
});