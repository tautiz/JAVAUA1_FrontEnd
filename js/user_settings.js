window.onload = function (){
    /** --- Funkciju ir kintamuju deklaracijos ---  */
    const defaultExpirationTime = 'Fri, 31 Dec 9999 23:59:59 GMT';
    const defaultColor = 'red';

    function setCookie(key, value, date){
        document.cookie = key + '=' + value + ';SameSite=None;Secure;Expiration=' + date;
    }

    function getCookie(key){
        const cookie = document.cookie || '';
        let cookieData = cookie.match(new RegExp('(^| )(?<key>' + key + ')=(?<value>[^;]+)'));
        return cookieData ? cookieData.groups.value : null;
    }

    function changeColorScheme(color) {
        if (typeof color == 'object'){
            color = color.target.value;
        }

        document.body.style.backgroundColor = color;
    }

    function saveColor(){
        let colorScheme = document.querySelector('#color-scheme').value;
        setCookie('colorScheme', colorScheme, defaultExpirationTime);
    }

    function setDefaultColor(){
        setCookie('colorScheme', defaultColor, defaultExpirationTime);
        changeColorScheme(defaultColor);
    }

    /** Paimame iš sausainėlių 'colorScheme' reiksme, jei jos nera gauname 'null' */
    const cookieColorScheme = getCookie('colorScheme') || defaultColor;

    /** Pakeiciame svetaines fono spalva pagal sausainėliuose esancia reiksme */
    changeColorScheme(cookieColorScheme);

    /** --- Event listeneriai mygtukams--- */
    const saveButton = document.querySelector('#save-color');
    saveButton.addEventListener('click', saveColor);

    const defaultButton = document.querySelector('#default-color');
    defaultButton.addEventListener('click', setDefaultColor);

    const colorSchemeInput = document.querySelector('#color-scheme');
    colorSchemeInput.addEventListener('input', changeColorScheme);

    /** Jei turime spalva, tai ji bus pasirinkta ir nustatyta Input laukeliui atvaizduoti */
    colorSchemeInput.value = cookieColorScheme || defaultColor;
};