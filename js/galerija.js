window.onload = function (){
    let url = 'https://picsum.photos/v2/list?page=';
    let page = Math.floor(Math.random() * 33) + 1

    fetch(url + page).then( response => response.json() )
        .then( data => {
            let galerija = document.querySelector('.gallery');
            for (let i = 0; i < data.length; i++) {
                let img = document.createElement('img');
                img.src = data[i].download_url;
                img.alt = data[i].author;
                img.classList.add('gallery_item');
                galerija.appendChild(img);
            }
        }
    ).catch( error => console.log(error));
};