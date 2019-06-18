// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;

// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ============================
//  Base de datos
// ============================
let urlDB;
if(process.env.NODE_ENV === 'dev' ){
    urlDB = 'mongodb://localhost:27018/cafe';
} else {
    urlDB = 'mongodb+srv://erick:RtE2ckBkGMmfyW34@cafe-ybl5b.mongodb.net/cafe?retryWrites=true&w=majority'
}

process.env.URLDB = urlDB;


