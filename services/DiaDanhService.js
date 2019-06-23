/**
* Athor: Unmatched Tai Nguyen - 14 /06 /2019 - 13 :04 :08 
*
*/
const ServiceBase = require("./ServiceBase");
const DiaDanh = require("../Mongoose/Models/DiaDanh");
class DiaDanhService extends ServiceBase{
    constructor(){
      super(DiaDanh)
    }
    
}
module.exports = new DiaDanhService()