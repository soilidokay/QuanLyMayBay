/**
* Athor: Unmatched Tai Nguyen - 14 /06 /2019 - 09 :16 :03 
*
*/
const Service = require("../services/AccountService");
class AccountController {
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
module.exports = new AccountController();