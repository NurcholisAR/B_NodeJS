const fs = require("fs");
const chalk = require("chalk");
const validator = require("validator");
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

const loadContacts = () => {
    const file = fs.readFileSync("data/contacts.json", "utf-8");
    const contacts = JSON.parse(file);
    return contacts;
};
// save kontak
const simpanContact = (nama, email, noHp) => {
    const contact = { nama, email, noHp };
    // const file = fs.readFileSync("data/contacts.json", "utf-8");
    // const contacts = JSON.parse(file);
    const contacts = loadContacts();

    // cek duplikat
    const duplikat = contacts.find((contact) => contact.nama === nama);
    if (duplikat) {
        console.log(`Nama ${chalk.bgRed.white.bold(nama)} sudah terdaftar!`);
        return false;
    }

    if (email) {
        if (!validator.isEmail(email)) {
            console.log(`Email ${chalk.bgRed.white.bold(email)} tidak valid!`);
            return false;
        }
    }
    if (!validator.isMobilePhone(noHp, "id-ID")) {
        console.log(`Nomor HP ${chalk.bgRed.white.bold(noHp)} tidak valid!`);
        return false;
    }
    contacts.push(contact);

    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
    console.log(chalk.bgGreen.black("terimakasih"));
};
// list kontak
const listContacts = () => {
    const contacts = loadContacts();
    console.log(chalk.bgWhiteBright.bold.black("Daftar Kontak :"));
    contacts.forEach((contact, i) => {
        console.log(`${i + 1} ${contact.nama} - ${contact.email} - ${contact.noHp}`);
    });
};
// detail kontak
const detailContacts = (nama) => {
    const contacts = loadContacts();
    const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase());

    if (!contact) {
        console.log(`Nama ${chalk.bgRed.white.bold(nama)} tidak ditemukan!`);
        return false;
    }
    console.log(chalk.bgWhiteBright.bold.black(contact.nama));
    console.log(contact.email);
    console.log(contact.noHp);
};

// delete kontak
const deleteContacts = (nama) => {
    const contacts = loadContacts();
    const newContact = contacts.filter((contact) => contact.nama.toLowerCase() !== nama.toLowerCase());
    if (contacts.length === newContact.length) {
        console.log(`Nama ${chalk.bgRed.white.bold(nama)} tidak ditemukan!`);
        return false;
    }

    fs.writeFileSync("data/contacts.json", JSON.stringify(newContact));
    console.log(`Data Contact ${chalk.bgRed.white.bold(nama)} dihapus!`);
};

module.exports = { simpanContact, listContacts, detailContacts, deleteContacts };
