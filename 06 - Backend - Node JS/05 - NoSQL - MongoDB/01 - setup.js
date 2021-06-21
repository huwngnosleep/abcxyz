// giống mysql, mongodb sử dụng driver là package mongodb
var _db
const mongoConnect = callback => {
    MongoClient.connect(
      'mongodb+srv://maximilian:9u4biljMQc4jjqbe@cluster0-ntrwp.mongodb.net/test?retryWrites=true'
    )
      .then(client => {
        console.log('Connected!');
        _db = client.db()
        callback(client);
      })
      .catch(err => {
        console.log(err);
      });
};

const getDb = () => {
    return _db
}