const xlsx = require('xlsx');
const fs = require('fs');

const workbook = xlsx.readFile('./xlsx/aladin-category.xls');
let csv = xlsx.utils.sheet_to_csv(workbook.Sheets['Sheet1'], { FS: '\t' })

// csv 파일로 저장
// csv 구분자는 ,로 저장
// 기존 구분자는 \t로 저장되어 있음
csv = csv.replace(/\t/g, '\,');
// 3번째 컬럼까지만 저장
csv = csv.split('\n').map((line) => {
    const row = line.split(',');
    return row.slice(0, 2).join(',');
}).join('\n');




fs.writeFileSync('./csv/aladin-category.csv', csv);
