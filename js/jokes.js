window.onload = function () {
    let url = 'https://api.chucknorris.io/jokes/random';

    function getData(url, callback) {

        fetch(url)
            .then(response => response.json())
            .then(data => {
                    callback(data);
                }
            ).catch(error => console.log('Klaida: ', error));
    };

    function addJokeToList(data) {
        let jokes = document.querySelector('.jokes');
        let joke = createJokeElement(data);
        jokes.appendChild(joke);
    }

    function closeJoke(event) {
        event.target.parentElement.remove();
    }

    function createJokeElement(data) {
        let li = document.createElement('li');
        li.classList.add('shadow-2xl', 'rounded-xl', 'p-4', 'bg-white', 'mb-4');

        let closeButton = document.createElement('button');
        closeButton.classList.add('close-button', 'btn');
        closeButton.innerText = 'X';
        
        let div = document.createElement('div');
        div.classList.add('flex', 'items-center', 'gap-x-6');
        
        let subDiv = document.createElement('div');

        let img = document.createElement('img');
        img.classList.add('h-16', 'w-16' ,'rounded-full');
        img.src = 'https://img.icons8.com/plasticine/256/chuck-norris.png';

        let p = document.createElement('p');
        p.classList.add('text-sm', 'font-semibold', 'leading-6', 'text-indigo-600');
        p.innerText = data.value;

        let h3 = document.createElement('h3');
        h3.classList.add('text-base', 'font-semibold', 'leading-7', 'tracking-tight', 'text-gray-900');
        h3.innerText = data.updated_at;

        div.appendChild(img);
            subDiv.appendChild(h3);
            subDiv.appendChild(p);
        div.appendChild(subDiv);
        li.appendChild(closeButton);
        li.appendChild(div);

        closeButton.addEventListener('click', closeJoke);

        return li;
    }

    let button = document.querySelector('.jokes_button');
    button.addEventListener('click', function () {
        getData(url, addJokeToList);
    });
};

