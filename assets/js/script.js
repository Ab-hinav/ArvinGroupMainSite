const centralEu = document.querySelector('#key-markets .btn-dark');
const easternEu = document.querySelector('#key-markets .btn-primary');
const asia = document.querySelector('#key-markets .btn-secondary');

const panels = document.querySelectorAll('.panel');

console.log(centralEu);
console.log(panels);

centralEu.addEventListener('click', () => {
    panels.forEach(panel => panel.classList.add('hide'));

    panels[0].classList.toggle('hide');
    
});

easternEu.addEventListener('click', () => {
    panels.forEach(panel => panel.classList.add('hide'));

    panels[1].classList.toggle('hide');
});

asia.addEventListener('click', () => {
    panels.forEach(panel => panel.classList.add('hide'));

    panels[2].classList.toggle('hide');
});
