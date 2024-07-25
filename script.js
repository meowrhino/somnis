// script.js

function copyDreamToClipboard() {
    const title = document.getElementById('dreamTitle').value;
    const body = document.getElementById('dreamBody').value;

    const htmlContent = `<article>\n    <h2>${title}</h2>\n    <p>${body}</p>\n</article>`;

    const textarea = document.createElement('textarea');
    textarea.value = htmlContent;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    alert('El sueño se ha copiado al portapapeles como código HTML.');
}
