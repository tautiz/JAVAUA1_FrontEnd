function createUserElement (data) {
    console.log('createUserElement()');
  var user = document.createElement('div');
  user.className = 'user';
  let fullName = data.first_name + ' ' + data.last_name + ' ' + data.email

  user.innerHTML = '<img src="' + data.avatar + '" alt="' + fullName + '" class="user-avatar">&nbsp;<span>' + fullName + '</span>';

  return user;
}

function getUsers(url, callback) {
  fetch(url)
    .then(response => response.json())
    .then(duomenys => {
        console.log('Gavau duomenis ir kvieciu Callback f-ja');
        callback(duomenys);
        console.log('Baigesi Callback f-ja');
        salintiPreloaderi();
    }).catch(err => {console.error(err); rodytiKlaida();});
}

function salintiPreloaderi() {
    console.log('Salinu preloaderi');
    document.getElementById('preloader').style.display = 'none';
}

function rodytiKlaida() {
    let elementas = document.createElement('div');
    elementas.className = 'error';
    elementas.innerHTML = '<h1>Klaida</h1>';
    document.querySelector('main').prepend(elementas);
}

function appendToUsersElement(duomenys) {
    console.log('appendToUsersElement()');
    let users = document.getElementById('users');
    if (!users) return console.error('Nerastas elementas su id="users"');
    users.innerHTML = '';

    duomenys.data.forEach(user => {

        let naujasVartotojas = createUserElement(user);

        users.appendChild(naujasVartotojas);
        console.log('Pridetas vartotojas');
    });
}

const url = 'https://reqres.in/api/users?delay=3';

console.log('Pradedu uzklausa');
getUsers(url, appendToUsersElement);
console.log('Baigesi JS kodas');
