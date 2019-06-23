/**
Athor: Unmatched Tai Nguyen - 08 /06 /2019 - 15 :34 :54 
*
*/
const mongoose = require('mongoose')


const NhanVien = {
    Hoten: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        validate: /^\S+@\S+([.]\w{1,10})+/
    },
    DiaChi: {
        type: String,
        required: true
    },
    SDT: {
        type: String,
        required: true,
        validate: /[0]\d{8,11}/
    },
    NgaySinh: {
        type: Date,
        required: true
    },
    IdQuanLy: {
        type: String,
        required: true,
        unique: true
    }
}

const NhanVienSchema = new mongoose.Schema(NhanVien);

module.exports = mongoose.model('NhanVien', NhanVienSchema);