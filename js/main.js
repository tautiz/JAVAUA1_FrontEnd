let laukelis = document.querySelector('#tekstas');

function saugoti() {
    let tekstas = laukelis.value;
    localStorage.setItem('duomenys', tekstas);
}

laukelis.addEventListener('keyup', function () {
    saugoti();
    gautiDuomenis();
}
);

function gautiDuomenis() {
    let duomenysIsStorage = localStorage.getItem('duomenys');
    document.getElementById('laukelioData').innerHTML = duomenysIsStorage;
}