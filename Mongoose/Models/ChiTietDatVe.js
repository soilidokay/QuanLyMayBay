/**
* Athor: Unmatched Tai Nguyen - 14 /06 /2019 - 09 :27 :59 
*
*/
const mongoose = require('mongoose')


const ChiTietDatVe = {
   MaGhe: {//Server tu map
      type: String,
      required: true
   },
   HoTenKHachHang: {
      type: String,
      required: true
   },
   MoTaHanhLy: {
      type: String
   },
   KhoiLuongHanhLy: {//Server tu map
      type: Number,
   },
   GiaKyGui:{//Server tu map
      type:Number
   },
   IdHanhLyKyGui: {
      type: String,
   },
   DonDatVe:{//Server tu map
      type:mongoose.Schema.Types.ObjectId,
      ref:'DonDatVe'
  }
}

const ChiTietDatVeSchema = new mongoose.Schema(ChiTietDatVe);

module.exports = mongoose.model('ChiTietDatVe', ChiTietDatVeSchema);