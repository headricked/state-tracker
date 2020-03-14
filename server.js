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


app.set("port", (process.env.PORT || 5000));
let port = app.get("port");


app.get("/getPerson", getPerson);
// app.get("/getPerson/:id", getPerson);


app.listen(port, function () {
    console.log(`Now listening for connections on port: ${port}`)
});

function getPerson(req, res) {
    console.log("Getting person information...");

    let id = req.query.id;
    // let id = req.params.id;

    console.log(`Retrieving person with id ${id}`);


    getPersonFromDb(id, function (error, result) {

        console.log("Back from the getPersonFromDb function with result:", result);

        if (error || result == null || result.length != 1) {
            res.status(500).json({success:false, data:error});
        } else {
            res.json(result[0]);
        }

    });

    // let result = {
    //     id: 238,
    //     first: "John",
    //     last: "Smith",
    //     birthdate: "1950-02-05"
    // };

    // res.json(result);
}

function getPersonFromDb(id, callback) {
    console.log(`getPersonFromDb called with id: ${id}`);

    let sql = `SELECT id, first, last, birthdate FROM person WHERE id = $1::int`;

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