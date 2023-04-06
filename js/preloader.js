export class Preloader  {
    constructor() {
        this.createPreloader();
    }

    show(inElement = null) {
        if (!this.element) this.createPreloader();
        if (!inElement) inElement = document.body;
        inElement.prepend(this.element);
    }

    hide() {
        setTimeout(() => {
            this.element.remove();
        }, 2000);
    }

    createPreloader() {
        let preloaderDiv = document.createElement('div');
        preloaderDiv.className = 'lds-ellipsis';
        preloaderDiv.innerHTML = '<div></div><div></div><div></div><div></div>';
        this.element = preloaderDiv;
    }
}