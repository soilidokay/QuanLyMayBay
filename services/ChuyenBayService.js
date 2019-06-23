/**
* Athor: Unmatched Tai Nguyen - 14 /06 /2019 - 09 :35 :32 
*
*/
const ServiceBase = require("./ServiceBase");
const ChuyenBay = require("../Mongoose/Models/ChuyenBay");
const TuyenBay = require("../Mongoose/Models/TuyenBay");
const { ErrorServive } = require('../Contants/Config')
const { ObjectID } = require("mongodb");

const modelSearch = {
  IdDiaDiemDi: '',
  IdDiaDiemDen: '',
  NgayDi: '',
  SoLuongNguoiLon: '',
  SoLuongTreEm: '',
  SoLuongEmBe: ''
}


class ChuyenBayService extends ServiceBase {
  constructor() {
    super(ChuyenBay)
  }

  Search = async (params, model) => {
    let Soluong = model.SoLuongTreEm || 0 - - model.SoLuongNguoiLon || 0;

    let date = (model.NgayDi||new Date()).toISOString().split('T')[0]

    let Tuyen = await TuyenBay.findOne(
      {
        IdDiaDiemDi: ObjectID(model.IdDiaDiemDi),
        IdDiaDiemDen: ObjectID(model.IdDiaDiemDen),
      })
      console.log(Tuyen)
    if (!Tuyen) {
      console.log(ErrorServive.NotFound_TuyenBay)
      return null
    }
    console.log({ IdTuyenBay: Tuyen._id, SoGheTrong: { $gte: Soluong }, NgayKhoiHanh: new Date(date) })
    let lstChuyenBay = await ChuyenBay.find({ IdTuyenBay: Tuyen._id, SoGheTrong: { $gte: Soluong }, NgayKhoiHanh:new Date(date) })

    return lstChuyenBay
  }
}
module.exports = new ChuyenBayService()