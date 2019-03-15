const mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'customers_restaurants'
});

connection.connect((err) => {
  if(err) {throw err;}
  console.log('database is connected')
});


module.exports = (app) => {
  let tableArray = [];
  let waitingArray = [];
  console.log(waitingArray)
  app.get("/api/tables", (req, response) => {
    let query = `SELECT * FROM tables`;
    connection.query(query, (err, res) => {
      if(err) {throw err;}
      tableArray = [];
      for(let i in res) {
        let data = res[i];
        tableArray.push(data)
      }
      response.json(tableArray)
  });
  console.log(tableArray)
});

  app.get("/api/waitlist", (req, response) => {
    let query = `SELECT * FROM waiting_tables`;
    connection.query(query, (err, res) => {
      if(err) {throw err;}
      waitingArray = [];
      for(let i in res) {
        let data = res[i];
        waitingArray.push(data)
      }
      response.json(waitingArray)
  });
  });

  app.post('/api/tables', (req, res) => {
      let data = req.body;
      let query = `
      INSERT INTO tables(customer_name, customer_email, customer_id, phone_number)
      VALUES('${data.customerName}', '${data.customerEmail}', '${data.customerID}', '${data.phoneNumber}');
      `;
      let query_2 = `
      INSERT INTO waiting_tables(customer_name, customer_email, customer_id, phone_number)
      VALUES('${data.customerName}', '${data.customerEmail}', '${data.customerID}', '${data.phoneNumber}');
      `;
      if(tableArray.length < 5) {
        connection.query(query, (err, res) => {

          if(err) {throw err;};
          tableArray = [];
          for(let i in res) {
            let data = res[i];
            tableArray.push(data)
          }
        }); 
        res.json(data)
      } else {
        connection.query(query_2, (err, res) => {
          if(err) {throw err;};
          waitingArray = [];
          for(let i in res) {
            let data = res[i];
            waitingArray.push(data)
          }
        }); 
        waitingArray.push(data)
        res.json(data)
      }
  });



};