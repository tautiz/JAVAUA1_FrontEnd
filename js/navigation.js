let meniu = [
    {
        pavadinimas: 'Home',
        nuoroda: 'index.html'
    },
    {
        pavadinimas: 'About',
        nuoroda: 'about.html',
    },
    {
        nuoroda: 'services.html',
        pavadinimas: 'Services'

    },
    {
        pavadinimas: 'Contact',
        nuoroda: 'contact.html'
    }
];

let navigacija = document.querySelector('nav > ul');

let aktyvusPuslapis = document.location.href.split('#')[1];

for (let i = 0; i < meniu.length; i++) {
    let meniuElementas = document.createElement('li');
    let nuoroda = document.createElement('a');

    let elem = meniu[i];

    if (elem.pavadinimas === aktyvusPuslapis) {
        meniuElementas.classList.add('aktyvus');
    }

    let urlAdresas = elem.nuoroda + '#' + elem.pavadinimas;

    nuoroda.setAttribute('href', urlAdresas);
    nuoroda.innerHTML = elem.pavadinimas;

    meniuElementas.appendChild(nuoroda);

    navigacija.appendChild(meniuElementas);
}