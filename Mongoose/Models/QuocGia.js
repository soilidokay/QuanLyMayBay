/**
Athor: Unmatched Tai Nguyen - 08 /06 /2019 - 14 :52 :02 
*
*/
const mongoose = require('mongoose')

const QuocGia = {
    name: {
        type: String,
        required: true
    },
    DiaDanhs: [{//Server tu map
        type: mongoose.Schema.Types.ObjectId, ref: 'DiaDanh'
    }]
}

const QuocGIaSchema = new mongoose.Schema(QuocGia);

module.exports = mongoose.model('QuocGia', QuocGIaSchema);