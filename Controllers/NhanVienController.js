/**
* Athor: Unmatched Tai Nguyen - 14 /06 /2019 - 09 :53 :51 
*
*/
const Service = require("../services/NhanVienService");
class NhanVienController {
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
}
module.exports = new NhanVienController();