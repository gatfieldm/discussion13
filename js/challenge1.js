
document.querySelector('h1').classList.add('heading');

// If the visitor double-clicks anywhere on the page an alert button should pop up with the current time.

document.addEventListener('dblclick', function() {
    alert(new Date());
}
);

document.querySelector('#toggle').addEventListener('click', function() {
    if (this.checked) {
        document.querySelector('#emailBox').classList.remove('hidden');
    } else {
        document.querySelector('#emailBox').classList.add('hidden');
    }
}
);