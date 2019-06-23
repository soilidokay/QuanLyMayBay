/**
* Athor: Unmatched Tai Nguyen - 14 /06 /2019 - 09 :54 :30 
*
*/
const Service = require("../services/RoleService");
class RoleController {
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
module.exports = new RoleController();