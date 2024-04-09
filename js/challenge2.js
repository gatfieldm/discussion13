document.addEventListener('DOMContentLoaded', function() {
    console.log(document.querySelector('textarea').value);
}
);
document.querySelector('input[type="checkbox"]').addEventListener('click', function() {
    if (this.checked) {
        document.querySelector('#home').value = document.querySelector('#billing').value;
        document.querySelector('#home').disabled = true;
    } else {
        document.querySelector('#home').value = '';
        document.querySelector('#home').disabled = false;
    }
}
);