import connection from "./../configs/connectDB";

let getHomepage = (req, res) => {
  let data = [];
  connection.query("SELECT * FROM `users`", function (err, results, fields) {
    results.map((row) => {
      data.push({
        id: row.id,
        email: row.email,
        addres: row.addres,
        firstName: row.firstName,
        lastName: row.lastName,
      });
    });

    return res.render("index.ejs", { dataUser: JSON.stringify(data) });
  });
};

module.exports = {
  getHomepage,
};
