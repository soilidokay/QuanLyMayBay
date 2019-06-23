/**
Athor: Unmatched Tai Nguyen - 08 /06 /2019 - 15 :34 :31 
*
*/
const mongoose = require('mongoose')


const DonDatVe = {
    NgayDat: {
        type: Date,
        required: true
    },
    TongTien: {
        type: Number,
        required: true
    },
    SoLuongVe: { //Server tu map
        type: Number,
        required: true
    },
    SoLuongTreEm: {
        type: Number,
        required: true
    },
    SoLuongNguoiLon: {
        type: Number,
        required: true
    },
    SoLuongEmBe: {
        type: Number,
        required: true
    },
    HoTenKHDaiDien: {
        type: String,
        required: true
    },
    SDT: {
        type: String,
        required: true,
        validate: /[0]\d{8,11}/
    },
    Email: {
        type: String,
        required: false,
        validate: /^\S+@\S+([.]\w{1,10})+/
    },
    DiaChi: {
        type: String,
        required: true
    },
    TrangThai: {//Server tu map
        type: Number,
        required: false,
    },
    IdChuyenBay:{
        type:String,
        require:true,
    },
    ChiTietDatVe: [{//Server tu map
        type: mongoose.Schema.Types.ObjectId, ref: 'ChiTietDatVe'
    }]
}

const DonDatVeSchema = new mongoose.Schema(DonDatVe);
DonDatVeSchema.methods.GetPopulate = ()=>{
    return ['ChiTietDatVe']
}
module.exports = mongoose.model('DonDatVe', DonDatVeSchema);