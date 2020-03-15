// add event listener to button
document.querySelector('#getStates').addEventListener('click', loadStates, false);

let url = 'https://nameless-waters-73580.herokuapp.com/getState?id=35';

function loadStates() {
    // let request = new XMLHttpRequest();
    let response = await fetch(url);
    console.log(response);

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