// module node
// 1. Core modules       -> modules yg sudah dimiliki node didalam library-nya cth mengakses sistem
// 2. Local modules      -> module yg kita bikin sendiri
// 3. Third Party Module -> npm module

// fungsi require()
// fungsi reequire mencari module dengan urutam sbb:
// 1. Core Module
// 2. File atau directory (./ atau ../ atau ../)
// 3. folder 'node_modules' dari npm

// Core Module
// const fs = require('fs');

// Local Module
const cetakNama = require("./coba");

// third party module / npm / install
// const moment = require('moment');

console.log(cetakNama("A", 12));
