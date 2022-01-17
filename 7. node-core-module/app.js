// Core Module

// File Sistem
const fs = require("fs");
// console.log(fs);

// menuliskan string ke file secara shyncronus
// try {
//     fs.writeFileSync("data/test.txt", "Hello secara synchronus!! 1");
// } catch (e) {
//     console.log(e);
// }

// menuliskan string ke file secara ashyncronus
// fs.writeFile("data/tes.txt", "Hello secara asynchronus!!", (e) => {
//     console.log(e);
// });

// membaca file secara synchronus
// const data = fs.readFileSync("data/tes.txt");
// console.log(data.toString());

// membaca file secara synchronus
// fs.readFile("data/tes.txt", "utf-8", (e, data) => {
//     if (e) throw e;
//     console.log(data);
// });

// readline
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("Masukan nama anda : ", (nama) => {
    rl.question("Masukan no hp anda : ", (noHP) => {
        const contact = { nama, noHP };
        const file = fs.readFileSync("data/contacs.json", "utf-8");
        const contacts = JSON.parse(file);
        contacts.push(contact);

        fs.writeFileSync("data/contacs.json", JSON.stringify(contacts));
        console.log("terimakasih");
        rl.close();
    });
});
