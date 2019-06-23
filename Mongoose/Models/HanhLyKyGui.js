/**
Athor: Unmatched Tai Nguyen - 08 /06 /2019 - 15 :34 :39 
*
*/
const mongoose = require('mongoose')


const HanhLyKyGui = {
    KhoiLuong: {
        type: Number,
        required: true
    },
    GiaTien: {
        type: Number,
        required: true
    }
}

const HanhLyKyGuiSchema = new mongoose.Schema(HanhLyKyGui);

module.exports = mongoose.model('HanhLyKyGui', HanhLyKyGuiSchema);