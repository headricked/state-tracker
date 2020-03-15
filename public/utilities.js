// add event listener to button
document.querySelector('#getStates').addEventListener('click', loadStates, false);

const https = require('https');


function loadStates() {
    let url = "https://www.reddit.com/r/popular.json";
    https.get(url, (res) => {
        let body = "";

        res.on("data", (chunk) => {
            body += chunk;
        });

        res.on("end", () => {
            try {
                let json = JSON.parse(body);
                // do something with JSON
                console.log(json);
            } catch (error) {
                console.error(error.message);
            };
        });

    }).on("error", (error) => {
        console.error(error.message);
    });
}

console.log('hello');

let url = 'https://nameless-waters-73580.herokuapp.com/getState?id=35';
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