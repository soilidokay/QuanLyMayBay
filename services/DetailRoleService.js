/**
* Athor: Unmatched Tai Nguyen - 14 /06 /2019 - 09 :36 :45 
*
*/
const ServiceBase = require("./ServiceBase");
const DetailRole = require("../Mongoose/Models/DetailRole");

class DetailRoleService extends ServiceBase{
    constructor(){
      super(DetailRole)
    }

}
module.exports = new DetailRoleService()