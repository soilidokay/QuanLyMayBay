/**
Athor: Unmatched Tai Nguyen - 08 /06 /2019 - 16 :18 :21 
*
*/
const mongoose = require('mongoose')


const ChuyenBay = {
    NgayKhoiHanh:{
        type:Date,
        require:true
    },
    GioKhoiHanh: {
        type: String,
        required: true
    },
    GioDen:{
        type: String,
        required: true
    },
    SoGioDelay: {
        type: Number,
        required: true
    },
    SoluongGhe:{
        type:Number,
        required:true,
        default: 60
    },
    SoGheTrong:{
        type:Number,
        required:true,
        default: 60
    },
    MaMayBay: {
        type: String,
        required: true
    },
    TenHang: {
        type: String,
        required: false
    },
    TrangThai: {//Server tu map
        type: Number,
        required: false
    },
    IdTuyenBay: {
        type: String,
        required: true,
    },
    GiaVe:{
        type:Number,
        required:true
    },
    isDelete: {//Server tu map
        type: Boolean,
        required: true,
        default: false
    }
}

const ChuyenBaySchema = new mongoose.Schema(ChuyenBay);
// ChuyenBaySchema.index({IdTuyenBay:1,GioKhoiHanh:1,NgayKhoiHanh:1,TenHang:1,MaMayBay:1,GiaVe:1},{unique:true})
module.exports = mongoose.model('ChuyenBay', ChuyenBaySchema);