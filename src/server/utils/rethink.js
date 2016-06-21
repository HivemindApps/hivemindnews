var r = require('rethinkdb');

var port = process.env.RETHINK_PORT || 28015;
var host = process.env.RETHINK_HOST || 'localhost';

var connection = null;
r.connect({ host: host, port: port }, function(err, conn) {
  if (err) throw err;
  console.log("** RethinkDB connected to host ", host);
  console.log("** RethinkDB listening on port", port);
  connection = conn;

  r.dbList().contains('hivemindnews')
    .do(function(databaseExists) {
      return r.branch(
        databaseExists, { dbs_created: 0 },
        r.dbCreate('hivemindnews')
      );
    }).run(conn, function(err, res) {
      if (err) throw err;
      console.log(JSON.stringify(res));
    });

});
