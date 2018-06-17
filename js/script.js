function init(){
    const author = document.getElementById('author');
    const info = document.getElementById('info');

    author.addEventListener('click', () => {
        info.classList.toggle('showInfo');
    });
}
init();