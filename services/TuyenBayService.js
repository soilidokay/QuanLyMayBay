/**
* Athor: Unmatched Tai Nguyen - 14 /06 /2019 - 09 :43 :08 
*
*/
const ServiceBase = require("./ServiceBase");
const TuyenBay = require("../Mongoose/Models/TuyenBay");
class TuyenBayService extends ServiceBase{
    constructor(){
      super(TuyenBay)
    }

}
module.exports = new TuyenBayService()