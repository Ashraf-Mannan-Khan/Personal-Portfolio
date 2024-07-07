let arrowright = document.getElementById('arrow-right');
let arrowdown = document.getElementById('arrow-down');

function hide() {
    arrowright.style.display = 'none';
    document.getElementById('container').style.display = 'none';
    arrowdown.style.display = 'inline-block';
}

function show() {
    arrowdown.style.display = 'none';
    document.getElementById('container').style.display = 'flex';
    arrowright.style.display = '';
}
function myFunction(x) {
    x.classList.toggle("change");
}
arrowright.onclick = hide;
arrowdown.onclick = show;