/**
* Athor: Unmatched Tai Nguyen - 14 /06 /2019 - 09 :42 :14 
*
*/
const ServiceBase = require("./ServiceBase");
const Role = require("../Mongoose/Models/Role");

class RoleService extends ServiceBase{
    constructor(){
      super(Role)
    }

}
module.exports = new RoleService()