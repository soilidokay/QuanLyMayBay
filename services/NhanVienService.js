/**
* Athor: Unmatched Tai Nguyen - 14 /06 /2019 - 09 :41 :19 
*
*/
const ServiceBase = require("./ServiceBase");
const NhanVien = require("../Mongoose/Models/NhanVien");
class NhanVienService extends ServiceBase{
    constructor(){
      super(NhanVien)
    }

}
module.exports = new NhanVienService()