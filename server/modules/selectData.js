const connection = require('./mysql');
const errhandler = require('./errhandler');

const getBookAll = async (callback) => {
    const sql = `select * from book`;
    connection.query(sql, (err, result) => {
        if (errhandler.query(err, "selectErr.log")) callback({ success : false, msg : "데이터를 가져오는데 실패했습니다." });
        return callback({ success : true, msg : "데이터를 가져왔습니다.", data : result });
    });
}
const getBook = async (type, callback) => {
    type = type === 'Bestseller' ? 1 : 2;
    const sql = `select * from booktags inner join book on booktags.book = book.isbn where tag = ${type}`;
    connection.query(sql, (err, result) => {
        if (errhandler.query(err, "selectErr.log")) callback({ success : false, msg : "데이터를 가져오는데 실패했습니다." });
        callback({ success : true, msg : "데이터를 가져왔습니다.", data : result });
    });
}

module.exports = {
    getBookAll,
    getBook
}