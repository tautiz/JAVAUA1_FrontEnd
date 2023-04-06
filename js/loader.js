export class Loader {
    constructor(preloader = null) {
        if (!preloader) throw new Error('Preloader is required');
        this.preloader = preloader;
    }
    get(url, callback, format = 'text') {
        fetch(url)
            .then(response => {
                if (format === 'json') {
                    return response.json();
                } else {
                    return response.text();
                }
            })
            .then(data => {
                this.preloader.hide();
                console.log('Gavau duomenis ir kvieciu Callback f-ja :' + callback.name);
                console.debug(data);
                callback(data);
                console.log('Baigesi Callback f-ja');
            })
            .catch(this.displayError);
    }

    displayError(klaida) {
        console.error(klaida);
        let element = document.createElement('div');
        element.className = 'error';
        element.innerHTML = '<h1>Klaida: ' + klaida.message + '</h1>';
        document.querySelector('main > .content').prepend(element);
    }
}