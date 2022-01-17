const fs = require("fs");
// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });
// membuat direktori data jika belum ada
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}
// membuat file contacts.json jika belum ada
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
    //                        ->membuat string kosong
    fs.writeFileSync(dataPath, "[]", "utf-8");
}
// Promise
// const tulisPertanyaan = (pertanyaan) => {
//     return new Promise((resolve, reject) => {
//         rl.question(pertanyaan, (nama) => {
//             resolve(nama);
//         });
//     });
// };

const simpanContact = (nama, email, noHp) => {
    const contact = { nama, email, noHp };
    const file = fs.readFileSync("data/contacts.json", "utf-8");
    const contacts = JSON.parse(file);

    // cek duplikat
    const duplikat = contacts.find((contact) => contact.nama === nama);
    if (duplikat) {
        console.log(`Nama ${nama} sudah terdaftar!`);
        return false;
    }
    contacts.push(contact);

    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
    console.log("terimakasih");
    // rl.close();
};

module.exports = { simpanContact };
// module.exports = { tulisPertanyaan, simpanContact };
