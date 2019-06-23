/**
* Athor: Unmatched Tai Nguyen - 14 /06 /2019 - 09 :51 :21 
*
*/
const Service = require("../services/HanhLyKyGuiService");
class HanhLyKyGuiController {
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
        return await Service.GetAll(params,model)
    })
}
module.exports = new HanhLyKyGuiController();