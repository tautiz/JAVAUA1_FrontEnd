function gautiMeniuSarasa(meniuVieta) {
    let meniu = [];
    // Kuriame elemente yra UL tagas
    let kurYraMeniu = meniuVieta.parentElement.parentElement.tagName;

    // Pagal tevini taga grazinti atitinkama meniu
    switch (kurYraMeniu) {
        case 'HEADER':
            meniu = [
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
                    nuoroda: 'Chuck_jokes.html',
                    pavadinimas: 'Chuck jokes'

                },
                {
                    pavadinimas: 'Contact',
                    nuoroda: 'contact.html'
                },
                {
                    pavadinimas: 'Settings',
                    nuoroda: 'user_settings.html'
                }
            ];
            break;
        case 'FOOTER':
            meniu = [
                {
                    pavadinimas: 'Apie',
                    nuoroda: 'about.html',
                },
                {
                    nuoroda: 'services.html',
                    pavadinimas: 'Paslaugos'

                },
                {
                    nuoroda: 'products.html',
                    pavadinimas: 'Produktai'

                },
                {
                    pavadinimas: 'Kontaktai',
                    nuoroda: 'contact.html'
                },
                {
                    pavadinimas: 'Privatumas',
                    nuoroda: 'contact.html'
                },
                {
                    pavadinimas: 'Sąlygos',
                    nuoroda: 'contact.html'
                },
                {
                    pavadinimas: 'Pagalba',
                    nuoroda: 'contact.html'
                },
                {
                    pavadinimas: 'Karjera',
                    nuoroda: 'contact.html'
                },
                {
                    pavadinimas: 'DUK',
                    nuoroda: 'contact.html'
                },
                {
                    pavadinimas: 'Blogas',
                    nuoroda: 'contact.html'
                }
            ];
            break;
    }

    return meniu;
}

function gautiPuslapioPavadinima() {
    return document.location.href.split('#')[1];
}

function generuotiMeniu(meniuDuomenys, meniuVieta){
    // Nustatome kuris puslapis šiuo metu yra aktyvus
    let aktyvusPuslapis = gautiPuslapioPavadinima();

    // arr.forEach(value => {
    //     console.log(value); // output: 1 2 3 4 5 6
    // });

    meniuDuomenys.forEach(elem => {
        let naujasMeniuElementas = document.createElement('li');
        let nuoroda = document.createElement('a');

        if (elem.pavadinimas === aktyvusPuslapis) {
            naujasMeniuElementas.classList.add('aktyvus');
        }

        let urlAdresas = elem.nuoroda + '#' + elem.pavadinimas;
        nuoroda.setAttribute('href', urlAdresas);

        nuoroda.innerHTML = elem.pavadinimas;

        naujasMeniuElementas.appendChild(nuoroda);

        meniuVieta.appendChild(naujasMeniuElementas);
    });
}

// Nurodome kuriame elemente norime spausdinti savo meniu
let meniuVietaTop = document.querySelector('header > nav > ul');
let meniuVietaBottom = document.querySelector('footer > nav > ul');

// Gauname Menių sarasa, pagal tai kuris elementas yra tevinis, meniuVietaTop elemento atžvilgiu
let meniuSarasasTop = gautiMeniuSarasa(meniuVietaTop);
let meniuSarasasBottom = gautiMeniuSarasa(meniuVietaBottom);

generuotiMeniu(meniuSarasasTop, meniuVietaTop);
generuotiMeniu(meniuSarasasBottom, meniuVietaBottom);
