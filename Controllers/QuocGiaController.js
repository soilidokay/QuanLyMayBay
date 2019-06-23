/**
* Athor: Unmatched Tai Nguyen - 14 /06 /2019 - 13 :06 :11 
*
*/
const Service = require("../services/QuocGiaService");
class QuocGiaController {
    constructor() {

    }
    // QuocGia = {
    //     name:"Viet nam"
    // }
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
        return await Service.GetAll(params, model,{populate:'DiaDanhs'});
    });
}
module.exports = new QuocGiaController();

// const Service = require("../services/QuocGiaService");

// class QuocGiaController {

//     constructor() {
//         // HttpPost(this.UpdateQuocGia)
//         // HttpPost(this.DeleteQuocGia)
//         // HttpPost(this.CreateDiaDanh)
//         // HttpPost(this.UpdateDiaDanh)
//         // HttpPost(this.DeleteDiaDanh)
//         // HttpGet(this.SearchDiaDanh)
//     }

//     CreateQuocGia = HttpPost(async (params, model) => {
//         return await Service.Create(params, model);
//     })

//     UpdateQuocGia = HttpPost(async (params, model) => {
//         return await Service.Update(params, model);
//     });

//     DeleteQuocGia = HttpPost(async (params, model) => {
//         return await Service.Delete(params, model);
//     });

//     CreateDiaDanh = HttpPost(async (params, model) => {
//         return await Service.CreateDiaDanh(params, model);
//     });

//     UpdateDiaDanh = HttpPost(async (params, model) => {
//         return await Service.UpdateDiaDanh(params, model);
//     });

//     DeleteDiaDanh = HttpPost(async (params, model) => {
//         return await Service.DeleteDiaDanh(params, model);
//     });
//     SearchDiaDanh = HttpGet(async (params, model) => {
//         return Service.SearchDiaDanh(params, model)
//     });
// }
// module.exports = new QuocGiaController();


