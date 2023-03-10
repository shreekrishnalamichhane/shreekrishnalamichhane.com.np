let theme_chooser = document.querySelector('#theme-chooser select');
let html = document.querySelector('html');
theme_chooser.addEventListener('change', e => {
    html.dataset.theme = e.target.value;
    localStorage.setItem('theme', e.target.value);
})

if (localStorage.getItem('theme')) {
    html.dataset.theme = localStorage.getItem('theme');
    theme_chooser.value = localStorage.getItem('theme');
}