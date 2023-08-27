const mysql = require('mysql2/promise');

const repository = mysql.createPool(process.env.CONNECTION_STRING);

// POPULATE DATABASE
async function insertAll(arrNames) {
    const resCreate = await repository.query('CREATE TABLE IF NOT EXISTS people (id INT(11) NOT NULL AUTO_INCREMENT, name VARCHAR(150) NOT NULL, favorite BOOLEAN NOT NULL, PRIMARY KEY (id))');
    if(resCreate[0].warningStatus == 0){
        arrNames.forEach(element => {
            const resInsert = repository.query(`INSERT INTO people (id,name,favorite) VALUES (0, '${element}', 0)`);
        });
        return "Banco de Dados baixado com sucesso!";
    }
    else{
        return "Banco de Dados já foi baixado anteriormente!";
    }
}

// FIND ALL
async function findAll() {
    const res = await repository.query('SELECT * FROM people');
    return res[0];
}

// FIND BY NAME/PART
async function findByName(name) {
    const res = await repository.query(`SELECT * FROM people WHERE name LIKE '%${name}%'`);
    return res[0];
}

// FIND BY FAVORITE
async function findByFavorite(favorite) {
    const res = await repository.query(`SELECT * FROM people WHERE favorite=${favorite}`);
    return res[0];
}

// UPDATE FAVORITE
async function updateFavorite(id, favorite) {
    const res = await repository.query(`UPDATE people SET favorite=${favorite} WHERE id=${id}`);
    return res[0];
}

module.exports = { insertAll, findAll, findByName, findByFavorite, updateFavorite }