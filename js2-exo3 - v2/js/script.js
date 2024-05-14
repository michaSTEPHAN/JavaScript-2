document.querySelectorAll('.carre').forEach(carre => {
    carre.addEventListener('click', () => {
        carre.classList.toggle('rotation1');
    })
})