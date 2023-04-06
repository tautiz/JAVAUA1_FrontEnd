export class Navigation {
    constructor(loader = null) {
        if (!loader) throw new Error('Loader is required');
        this.loader = loader;
        let whereToAppend = document.querySelector('header > nav');
        this.loader.preloader.show(whereToAppend);

        // Nurodome kuriame elemente norime spausdinti savo meniu
        let topMenu = document.querySelector('header > nav > ul');
        let bottomMenu = document.querySelector('footer > nav > ul');

        this.loader.get('menu_footer.json', (data) => {
            console.log(data);
            this.generateMenu(data, bottomMenu);
        }, 'json');

        this.loader.get('menu.json', (data) => {
            console.log(data);
            this.generateMenu(data, topMenu);
        }, 'json');

        // Nustatome kuris puslapis šiuo metu yra aktyvus
        this.loadPage('home.html');

    }

    getPageName() {
        return document.location.href.split('#')[1];
    }

    generateMenu(menuData, menuPlace) {
        // Nustatome kuris puslapis šiuo metu yra aktyvus
        let activePage = this.getPageName();

        menuData.forEach(elem => {
            let newMenuItem = document.createElement('li');
            let link = document.createElement('a');

            if (elem.pavadinimas === activePage) {
                newMenuItem.classList.add('aktyvus');
            }

            let urlAddress = elem.nuoroda + '#' + elem.pavadinimas;
            link.setAttribute('href', urlAddress);

            link.innerHTML = elem.pavadinimas;

            newMenuItem.appendChild(link);
            newMenuItem.addEventListener('click', (event) => {
                event.preventDefault();
                this.loadPage(elem.nuoroda);
            });
            menuPlace.appendChild(newMenuItem);
        });
    }

    renderPageInMainTag(content) {
        let main = document.querySelector('main > .content');
        main.innerHTML = content;
    }

    loadPage(url) {
        let whereToAppend = document.querySelector('main > .content');
        this.loader.preloader.show(whereToAppend);
        this.loader.get(url, this.renderPageInMainTag);
    }
}