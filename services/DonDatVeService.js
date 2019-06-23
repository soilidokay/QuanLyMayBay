/**
* Athor: Unmatched Tai Nguyen - 14 /06 /2019 - 09 :38 :20 
*
*/
const ServiceBase = require("./ServiceBase");
const DonDatVe = require("../Mongoose/Models/DonDatVe");
const ChiTietDatVe = require("../Mongoose/Models/ChiTietDatVe");
const ChuyenBay = require("../Mongoose/Models/ChuyenBay");
const HanhLyKyGui = require("../Mongoose/Models/HanhLyKyGui");
const mongoose = require("mongoose");
const { ErrorServive } = require('../Contants/Config')
class DonDatVeService extends ServiceBase {
  constructor() {
    super(DonDatVe)
  }
  Create = async (params, model) => {
    /**
     * kiem tra chuyen bay
     */
    let chuyenbay = await ChuyenBay.findById(model.IdChuyenBay)

    if (!chuyenbay) {
      console.log(ErrorServive.NotFound_ChuyenBay)
      return ErrorServive.NotFound_ChuyenBay
    }
    /**
     * khoi tao model
     */
    let tmps = model.ChiTietDatVe || []
    model.ChiTietDatVe = []
    model._id = new mongoose.Types.ObjectId()
    let Soluong = (model.SoLuongTreEm || 0) - - (model.SoLuongNguoiLon || 0) ;
    model.SoLuongVe = Soluong- -(model.SoLuongEmBe || 0)
    model.TongTien = Soluong * chuyenbay.GiaVe
    if (!model.NgayDat) model.NgayDat = new Date()
    /**
     * 
     */
    let lstChitiet = []
    /**
     * tao model chi tiet dat ve
     */
    for (let i = 0; i < tmps.length; i++) {
      let item = tmps[i]
      item.DonDatVe = model._id

      item.MaGhe = chuyenbay.SoluongGhe - chuyenbay.SoGheTrong
      chuyenbay.SoGheTrong--;

      item._id = new mongoose.Types.ObjectId()
      let hanhlykygui = await HanhLyKyGui.findById(item.IdHanhLyKyGui) || {}
      item.KhoiLuongHanhLy = hanhlykygui.KhoiLuong || 0
      item.GiaKyGui = hanhlykygui.GiaTien || 0

      model.ChiTietDatVe.push(item._id)

      lstChitiet.push(item)
    }

    /**
     * tao don dat ve
     */
    let donDatVe = new DonDatVe(model)

    let resultSave = false
   
    await donDatVe.save().then((result) => {
      resultSave = result
    })

    /**
     * them chi tiet hoa don
     */
    let isSave = false
    if(resultSave)
    await ChiTietDatVe.insertMany(lstChitiet).then((res) => {
      isSave = true
      chuyenbay.save()
    }).catch((err) => {
      resultSave = err
      console.log(err)
    })
    /**
     * xoa don dat hang neu chiet dat hang sai
     */
    if(!isSave) await DonDatVe.findByIdAndDelete(model._id)

   return resultSave

  };
}
module.exports = new DonDatVeService()