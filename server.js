const express = require('express')
const app = express()
const { Pool } = require('pg')
// const port = process.env.PORT

const connectionString = process.env.DATABASE_URL || "postgres://rhcyjmffmuvedh:b589ae9eee3237bbd30d84e6dcc9dde10a85624da2283302edbd51f892ad0b4d@ec2-35-168-54-239.compute-1.amazonaws.com:5432/d9f16r5fjgsps2?ssl=true";

const pool = new Pool({ connectionString: connectionString });

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/getPerson', getPerson);

app.listen(app.get('port'), function() {
    console.log('Server is listening on port', app.get('port'));
});


function getPerson(request, response) {
    const id = request.query.id;

    getPersonFromDb(id, function(error, result) {
        if (error || result == null || result.length != 1) {
            response.status(500).json({success: false, data: error});
        } else {
            const person = result[0];
            response.status(200).json(person);
        }
    });
}


function getPersonFromDb(id, callback) {
    console.log(`Getting person from DB with id: ${id}`);
    
    const sql = "SELECT id, firstName, lastName, dateOfBirth FROM person WHERE id = $1::int";
    
    const params = [id];

    pool.query(sql, params, function(err, result) {
        if (err) {
            console.log("Error in query: ")
            console.log(err);
            callback(err, null);
        }

        console.log("Found result: " + JSON.stringify(result.rows));

        callback(null, result.rows);
    })
}




// var sql = "SELECT * FROM person";

// pool.query(sql, function (err, result) {
//     // If an error occurred...
//     if (err) {
//         console.log("Error in query: ")
//         console.log(err);
//     }

//     // Log this to the console for debugging purposes.
//     console.log("Back from DB with result:");
//     console.log(result.rows);


// }); 