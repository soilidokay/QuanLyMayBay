/**
* Athor: Unmatched Tai Nguyen - 14 /06 /2019 - 09 :28 :15 
*
*/
const mongoose = require('mongoose')


const DetailRole = {
   IdRole: {
      type: String,
      required: true,
      unique: true
   },
   IsAccount: {
      type: String,
      required: true,
      unique: true
   }
}

const DetailRoleSchema = new mongoose.Schema(DetailRole);

module.exports = mongoose.model('DetailRole', DetailRoleSchema);