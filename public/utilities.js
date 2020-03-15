// add event listener to button
document.querySelector('#getStates').addEventListener('click', loadStates, false);

console.log('hello');

let url = 'https://nameless-waters-73580.herokuapp.com/getState?id=35';
// let joe = 'getState';

function loadStates() {
    console.log('fire off loadStates(url)');
    console.log(url);

    fetch(url)
        .then((response) => {
            // console.log(response);
            console.log(response.json([0].stateName.value));
            // return response.json();
        })
        .then((data) => {

            let table = '<table>';

            data.results.forEach(result => {
                table += '<tr>';
                table += '<td class="name">' + result.stateName + '</td>';
                table += '</tr>'
            })

            table += '</table>';

            document.getElementById('state').innerHTML = table;

        });
}
