const fs = require('fs');
const path = require('path');

const queryFile = path.join(__dirname, "../logs");

const queryErr = (err, file) => {
    if (err) {
        var errmessage = new Date().toLocaleString() + " : " + err + "\n";
        var tempPath = path.join(queryFile, file);
        fs.appendFileSync(tempPath, errmessage, 'utf8');
        return true;
    }
    return false;
} 

module.exports = {
    query:queryErr
}