// add event listener to button
document.querySelector('#getStates').addEventListener('click', loadStates, false);

let url = 'https://nameless-waters-73580.herokuapp.com/getState?id=35';

function loadStates() {
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';

    let state = JSON.parse(request.response);

    console.log(state);
    console.log(request);
    console.log(request.response);
    console.log(request.responseType);
    // console.log(request.response);
    // console.log(response.statename);
    // console.log(request.statename);
    // console.log('statename');

    // request.onload = function () {
    //     poemDisplay.textContent = request.response;
    // };

    request.send();

    // fetch(url).then(function (response) {
    //     response.text().then(function (text) {
    //         poemDisplay.textContent = text;
    //     });
    // });
}


// console.log('hello');

// let joe = 'getState';

/*
function loadStates() {
    console.log('fire off loadStates(url)');
    console.log(url);

    fetch(url)
        .then((response) => {
            // console.log(response);
            // console.log(response.json('stateName'));
            console.log(response.stateName);
            // return response.json();
        })
        // .then((data) => {

        //     let table = '<table>';

        //     data.results.forEach(result => {
        //         table += '<tr>';
        //         table += '<td class="name">' + result.stateName + '</td>';
        //         table += '</tr>'
        //     })

        //     table += '</table>';

        //     document.getElementById('state').innerHTML = table;

        // })
        // ;
}
*/