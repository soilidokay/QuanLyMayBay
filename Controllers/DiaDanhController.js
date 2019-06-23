/**
* Athor: Unmatched Tai Nguyen - 14 /06 /2019 - 13 :05 :23 
*
*/
const Service = require("../services/DiaDanhService");
class DiaDanhController {
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
    GetAll = HttpGet(async (params, model) => {
        return await Service.GetAll(params, model, { populate: 'QuocGia' });
    });
}
module.exports = new DiaDanhController();