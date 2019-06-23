/**
* Athor: Unmatched Tai Nguyen - 14 /06 /2019 - 09 :39 :35 
*
*/
const ServiceBase = require("./ServiceBase");
const HanhLyKyGui = require("../Mongoose/Models/HanhLyKyGui");
class HanhLyKyGuiService extends ServiceBase{
    constructor(){
      super(HanhLyKyGui)
    }

}
module.exports = new HanhLyKyGuiService()