/**
* Athor: Unmatched Tai Nguyen - 14 /06 /2019 - 09 :00 :10 
*
*/
const ServiceBase = require("./ServiceBase");
const Account = require("../Mongoose/Models/Account");

class AccountService extends ServiceBase{
    constructor(){
        super(Account)
    }

}
module.exports = new AccountService()