/**
* Athor: Unmatched Tai Nguyen - 14 /06 /2019 - 09 :45 :30 
*
*/
const Service = require("../services/ChuyenBayService");
class ChuyenBayController {
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
      //  modelSearch = {
    //     IdDiaDiemDi: '',
    //     IdDiaDiemDen: '',
    //     NgayDi: '',
    //     SoLuongNguoiLon: '',
    //     SoLuongTreEm: '',
    //     SoLuongEmBe: ''
    //   }
    Search = HttpPost(async (params,model)=>{
        return await Service.Search(params,model)
    })
}
module.exports = new ChuyenBayController();