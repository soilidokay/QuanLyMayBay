/**
Athor: Unmatched Tai Nguyen - 08 /06 /2019 - 15 :22 :19 
*
*/
const mongoose = require('mongoose')


const DiaDanh = {
    TenDiaDanh:{
        required:true,
        type:String
    },
    TenSanBay:{
        required:true,
        type:String
    },
    QuocGia:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'QuocGia'
    }
}

const DiaDanhSchema = new mongoose.Schema(DiaDanh);
module.exports = mongoose.model('DiaDanh', DiaDanhSchema);
