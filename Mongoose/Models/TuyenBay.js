/**
Athor: Unmatched Tai Nguyen - 08 /06 /2019 - 15 :35 :06 
*
*/
const mongoose = require('mongoose')


const TuyenBay = {
    IdDiaDiemDi: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'DiaDanh'
    },
    IdDiaDiemDen: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'DiaDanh'
    }
}

const TuyenBaySchema = new mongoose.Schema(TuyenBay);

TuyenBaySchema.index({IdDiaDiemDen:1,IdDiaDiemDi:1}, { unique: true })
module.exports = mongoose.model('TuyenBay', TuyenBaySchema);