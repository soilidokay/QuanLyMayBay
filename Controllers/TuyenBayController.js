/**
* Athor: Unmatched Tai Nguyen - 14 /06 /2019 - 12 :52 :31 
*
*/
const TuyenBay = require("../Mongoose/Models/TuyenBay");
const Service = require("../services/TuyenBayService");
class TuyenBayController {
    constructor() {

    }
    Create = HttpPost(async (params, model) => {
        return await Service.Create(params, model);
    })

    Update = HttpPost(async (params, model) => {
        return await Service.Update(params, model);
    });

    Delete = HttpPost(async (params, model) => {
        return await Service.Delete(params, model);
    });
    GetAll = HttpGet(async (params,model)=>{
      return await  TuyenBay.find().populate('IdDiaDiemDi').populate('IdDiaDiemDen')
    })
}
module.exports = new TuyenBayController();