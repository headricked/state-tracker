// add event listener to button
document.querySelector('#getStates').addEventListener('click', loadStates, false);

let url = 'https://nameless-waters-73580.herokuapp.com/getState?id=30';

function loadStates() {
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    let state = request.response.statename;
    document.getElementById("state").innerHTML = state;

    // request.onload = function () {
    //     console.log(request); // the request
    //     console.log(request.response); // the response object
    //     console.log(request.response.statename); // the property of the response object
    //     let state = request.response.statename;
    //     document.getElementById("state").innerHTML = state;
    // };

    request.send();
}