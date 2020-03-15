let express = require('express')
let app = express()
const { Pool } = require('pg')
// const port = process.env.PORT

const connectionString = process.env.DATABASE_URL || "postgres://rhcyjmffmuvedh:b589ae9eee3237bbd30d84e6dcc9dde10a85624da2283302edbd51f892ad0b4d@ec2-35-168-54-239.compute-1.amazonaws.com:5432/d9f16r5fjgsps2?ssl=true";

const pool = new Pool(
    {
        connectionString: connectionString
    }
);


// use the public directory as one where static files reside
app.use(express.static(__dirname + '/public'));

// views directory for the template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');



app.set("port", (process.env.PORT || 5000));
let port = app.get("port");


app.get("/getState", getState);
// app.get("/getState/:id", getState);


app.listen(port, function () {
    console.log(`Now listening for connections on port: ${port}`)
});

function getState(req, res) {
    console.log("Getting state name...");

    let id = req.query.id;
    // let id = req.params.id;

    console.log(`Retrieving state with id ${id}`);


    getStateFromDb(id, function (error, result) {

        console.log("Back from the getStateFromDb function with result:", result);

        if (error || result == null || result.length != 1) {
            res.status(500).json({success:false, data:error});
        } else {
            res.json(result[0]);
        }

    });}

function getStateFromDb(id, callback) {
    console.log(`getStateFromDb called with id: ${id}`);

    let sql = `SELECT stateName FROM us_states WHERE id = $1::int`;

    let params = [id];

    pool.query(sql, params, function (error, result) {
        if (error) {
            console.log("An error with the database occurred");
            console.log(error);
            callback(err, null);
        }

        console.log("Found database result: " + JSON.stringify(result.rows));
        callback(null, result.rows);
    });
}