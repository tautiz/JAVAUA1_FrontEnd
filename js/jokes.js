window.onload = function () {
    const url = 'https://api.chucknorris.io/jokes/random';

    function getData(url, callback) {

        fetch(url)
            .then(response => response.json())
            .then(data => {
                callback(data);
            })
            .catch(error => console.log('Klaida: ', error));
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
        img.classList.add('h-16', 'w-16', 'rounded-full');
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


    const postUrl = 'https://reqres.in/api/users';

    function postData(url, data, callback) {

        let options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                callback(data);
            })
            .catch(error => console.log('Klaida: ', error));
    }

    function deleteData(url, callback) {

        let options = {
            method: 'DELETE',
        };

        fetch(url, options)
            .then(response => {
                if (response.ok) {
                    callback();
                } else {
                    console.log('Klaida: ', response);
                }
            })
            .catch(error => console.log('Klaida: ', error));
    }

    function successMessage() {
        let mainTagas = document.querySelector('main');
        let zinute = document.createElement('div');

        zinute.classList.add('bg-green-100', 'border-l-4', 'border-green-500', 'text-green-700', 'p-4', 'shadow-md', 'mb-4');

        zinute.innerText = 'Sėkmingai ištrinta';

        mainTagas.appendChild(zinute);
    }

    let duomenysSaugojimui = {name: 'Chuck', job: 'Norris'};

    console.log(duomenysSaugojimui);
    console.log(JSON.stringify(duomenysSaugojimui));

    postData(postUrl, duomenysSaugojimui, console.log);


    const deleteUrl = 'https://reqres.in/api/users/';
    let userioId = 2;

    deleteData(deleteUrl + userioId, successMessage)
};

