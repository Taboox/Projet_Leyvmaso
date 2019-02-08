/*var mysql = require('mysql');

var mySqlClient = mysql.createConnection({
	host: "obiwan2.univ-brest.fr",
	user: "zmalleglu",
	password: "ltmjmesh",
	database: "zfm1-zmalleglu",
});

var selectQuery = 'SELECt * FROM t_compte_cpt';

var sqlQuery = mySqlClient.query(selectQuery);

sqlQuery.on("result", function(row) {
	console.log('login: ' + row.pseudo);
	console.log('mdp: ' + row.mdp);
});

sqlQuery.on("end", function() {
	mySqlClient.end();
});

sqlQuery.on("error", function(error) {
	console.log(error);
});*/

const maria = require('mariadb');

const mariaClient = maria.createConnection({
            host: "obiwan2.univ-brest.fr",
            user: "zmalleglu",
            password: "ltmjmesh",
            database: "zfm1-zmalleglu",
        });

class CRUD_Maria {

    create(requete) {
        let selectQuery = requete;
        let sqlQuery = mariaClient.query(selectQuery);
    }

    update(requete) {
        let selectQuery = requete;
        let sqlQuery = mariaClient.query(selectQuery);
    }

    delete(requete) {
        let selectQuery = requete;
        let sqlQuery = mariaClient.query(selectQuery);
    }

    retrieve(requete) {
        let selectQuery = requete;
        let sqlQuery = mariaClient.query(selectQuery);
    }
}


let mongoDb = require("mongodb").MongoClient;

/*let mongoDbClient = mongoDb.createConnection({
    host: "obiwan2.univ-brest.fr",
    port: 27017,
    user: "master029",
    password: "7zip5kiz",
});*/

mongoDb.connect("mongodb://obiwan2.univ-brest.fr:27017/leyvmaso", function(err, db){
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

class CRUD_Mongo {

    create(requete) {
	mongoDb.connect("mongodb://obiwan2.univ-brest.fr:27017/leyvamso", function(err, db){
	  if (err) throw err;
	  let dbo = db.db("leyvmaso");
	  dbo.collection("").insertMany(requete, function(err, res) {
		    if (err) throw err;
		    console.log("Number of documents inserted: " + res.insertedCount);
		    db.close();
	  });
	  db.close();
	});
    }

    update(requete) {

    }

    delete(requete) {

    }

    retrieve(requete) {

    }
}

let neo4j = require("neo4j-driver").v1;

let driverNeo4j = neo4j.driver("obiwan2.univ-brest.fr:7474");
let sessionNeo4j = driver.session();

/*let neo4jClient = neo4j.createConnection({
    host: "obiwan2.univ-brest.fr",
    port: 7474,
    user: "master029",
    password: "7zip5kiz",

});*/

class CRUD_Neo4j {

    create(requete) {

    }

    update(requete) {

    }

    delete(requete) {

    }

    retrieve(requete) {

    }
}

class MainTest {
	
}

/*class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};*/
