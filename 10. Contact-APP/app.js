const yargs = require("yargs");
const contacts = require("./contacts");

yargs.command({
    command: "add",
    describe: "Menambahkan contact baru",
    builder: {
        nama: {
            describe: "Nama Lengkap",
            demandOption: true,
            type: "string",
        },
        email: {
            describe: "Email",
            demandOption: true,
            type: "string",
        },
        noHP: {
            describe: "Nomor Handphone",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        contacts.simpanContact(argv.nama, argv.email, argv.noHP);
    },
});

// menampilkan daftar semua kontak
yargs.command({
    command: "list",
    describe: "Menampilkan semua contact",
    handler() {
        contacts.listContacts();
    },
});
// menampilkan detail sebuah kontak
yargs.command({
    command: "detail",
    describe: "Menampilkan detail contact berdasarkan nama",
    builder: {
        nama: {
            describe: "Nama Lengkap",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        contacts.detailContacts(argv.nama);
    },
});
// menghapus kontak berdasarkan nama
yargs.command({
    command: "delete",
    describe: "Menghapus contact berdasarkan nama",
    builder: {
        nama: {
            describe: "Nama Lengkap",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        contacts.deleteContacts(argv.nama);
    },
});
yargs.parse();
