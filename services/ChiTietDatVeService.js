/**
* Athor: Unmatched Tai Nguyen - 14 /06 /2019 - 09 :33 :44 
*
*/
const ServiceBase = require("./ServiceBase");
const ChiTietDatVe = require("../Mongoose/Models/ChiTietDatVe");
class ChiTietDatVeService extends ServiceBase{
    constructor(){
      super(ChiTietDatVe)
    }
    DeleteWithParent =async (model)=>{
      return await ChiTietDatVe.deleteMany({DonDatVe:model._id})
    }
}
module.exports = new ChiTietDatVeService()