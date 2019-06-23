/**
* Athor: Unmatched Tai Nguyen - 14 /06 /2019 - 09 :46 :37 
*
*/
const Service = require("../services/DetailRoleService");
class DetailRoleController {
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
module.exports = new DetailRoleController();