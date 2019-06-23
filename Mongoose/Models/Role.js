/**
Athor: Unmatched Tai Nguyen - 08 /06 /2019 - 15 :35 :00 
*
*/
const mongoose = require('mongoose')


const Role = {
    TenRole:{
        type:String,
        required:true
     }
}

const RoleSchema = new mongoose.Schema(Role);

module.exports = mongoose.model('Role', RoleSchema);