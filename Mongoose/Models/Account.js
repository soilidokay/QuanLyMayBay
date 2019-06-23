/**
Athor: Unmatched Tai Nguyen - 08 /06 /2019 - 14 :54 :04 
*
*/
const mongoose = require('mongoose')


const Account =
{
   UserName: {
      type: String,
      unique: true,
      required: true
   },
   PassWord: {
      type: String,
      required: true
   },
   NgayTao: {
      type: Date,
      required: false
   },
   IsActive: {
      type: Boolean,
      required: false,
      default: true
   },
   IdNhanVien: {
      type: String,
      required: false
   }
}


const AccountSchema = new mongoose.Schema(Account);
module.exports = mongoose.model('Account', AccountSchema);
