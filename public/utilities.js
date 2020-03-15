// add event listener to button
document.querySelector('#getStates').addEventListener('click', loadStates, false);

let url = 'https://nameless-waters-73580.herokuapp.com/getState?id=35';

function loadStates() {
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';

    request.onload = function () {
        console.log(request.response);
        // console.log(request.response.statename);
        let state = request.response.statename;
        document.getElementById("state").innerHTML = state;
    };

    request.send();
}