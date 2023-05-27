const connection = require('./mysql');
const errhandler = require('./errhandler');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: ".env.development" });

const apiAladin = `http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=${process.env.ALADIN}`

const getBooks = async (type) => {
    const url = `${apiAladin}&QueryType=${type}&MaxResults=100&start=1&SearchTarget=Book&Version=20131101&output=js`;
    const res = await axios.get(url);
    const data = res.data;
    console.log(data);
    const items = data.item;
    return items;
}

const saveImage = async (items) => {
    items.map(async (item) => {
        try {            
            const { cover, isbn13 } = item;
            const url = cover;
            const filename = path.join(__dirname, `../public/images/books/${isbn13}.jpg`);
    
            const response = await axios.get(url, { responseType: 'stream' });
            const writer = fs.createWriteStream(filename);
            response.data.pipe(writer); 
    
            return new Promise((resolve, reject) => {
                writer.on('finish', resolve);
                writer.on('error', reject);
            });
        } catch (err) {
            console.log(err);
        }
    });
}

const insertBooks = async (items) => {
    let sql = `INSERT INTO book (title, author, isbn, description, image, genre) VALUES `;
    items.map((item) => {
        const { title, author, isbn13, description, isbn, categoryId } = item;
        let temp = sql + `("${title}", "${author}", "${isbn13}", "${description}", "${isbn13}.jpg", "${categoryId}")`;
        connection.query(temp, (err, result) => {
            if(errhandler.query(err, "bookinsertErr.log")) return;
        });
    });
}

const updateTags = async (items, type) => {
    // 1 : 베스트 셀러, Bestseller
    // 2 : 신간, ItemNewAll
    type = type === 'Bestseller' ? 1 : 2;
    const sql = `insert into booktags (book, tag) values `;
    items.map((item) => {
        const { isbn13 } = item;
        let temp = sql + `("${isbn13}", "${type}")`;
        connection.query(temp, (err, result) => {
            if (errhandler.query(err, "taginsertErr.log")) return;
        });
    })
}


const updateData = async (type) => {
    const items = await getBooks(type);
    console.log(items)
    await saveImage(items);
    await insertBooks(items);
    updateTags(items, type);
}

module.exports = updateData;