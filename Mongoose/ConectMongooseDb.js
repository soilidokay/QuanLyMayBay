// Configuring the database
const { dbConfig } = require("../Contants/Config");
const mongoose = require("mongoose");
const QuocGia = require('./Models/QuocGia')
const DiaDanh = require('./Models/DiaDanh')
const ChuyenBay = require('./Models/ChuyenBay')
const TuyenBay = require('./Models/TuyenBay')
const HanhLyKyGui = require('./Models/HanhLyKyGui')
const data = require('./diadanh')

// const DataChuyenBay = require('./datamaybay_HN_HCM')
const DataChuyenBays = [
  { ChuyenBay: require('./datamaybay_HCM_HN'), id: '5d075024720d8843e8c92e79' },
  { ChuyenBay: require('./datamaybay_HN_HCM'), id: '5d075024720d8843e8c92e78' }
]


mongoose.Promise = global.Promise;
//Viet Nam : 5d074e298434263548443cb8
// 5d074e2d8434263548443da2 : hcm
// 5d074e2d8434263548443d9e : hn
//5d075024720d8843e8c92e79: id Tuyen HCM_HN
// 5d075024720d8843e8c92e78 : id Tuyen HN_HCM




const GenderChuyenBay = (date) => {
  DataChuyenBays.forEach(DataChuyenBay => {
    let lstTmp = DataChuyenBay.ChuyenBay.map(item => ({
      NgayKhoiHanh: new Date(date),
      GioKhoiHanh: item.GioBay,
      GioDen: item.GioDen,
      SoGioDelay: 0,
      SoluongGhe: 60,
      SoGheTrong: 60,
      MaMayBay: item.ChuyenBay,
      TenHang: item.img,
      IdTuyenBay: DataChuyenBay.id,
      GiaVe: item.GiaTien
    }))
    ChuyenBay.insertMany(lstTmp)
  });

}



const GenderQuocGia = () => {
  let tmps = data.map(item => {
    return {
      name: item.name
    }
  })
  QuocGia.insertMany(tmps).then((results) => {
    GenderDiaDanh(results)
  })
}
const GenderDiaDanh = async (results) => {
  let tmps = [];
  results.forEach((item, index) => {

    data[index].dds.forEach(i => {
      let dd = new DiaDanh({
        _id: new mongoose.Types.ObjectId(),
        TenDiaDanh: i.dd,
        TenSanBay: i.sb,
        QuocGia: item._id
      })
      tmps.push(dd)
      item.DiaDanhs.push(dd._id)
      item.save()
    })
  })
  DiaDanh.insertMany(tmps)
}
const GenderTuyenBay = async () => {
  let DataTmps = []
  let lstTmp = await DiaDanh.find()

  for (let i = 0; i < lstTmp.length - 1; i++) {
    for (let j = i + 1; j < lstTmp.length; j++) {
      DataTmps.push({
        IdDiaDiemDi: lstTmp[i]._id,
        IdDiaDiemDen: lstTmp[j]._id
      })
      DataTmps.push({
        IdDiaDiemDi: lstTmp[j]._id,
        IdDiaDiemDen: lstTmp[i]._id
      })
    }
  }
  TuyenBay.insertMany(DataTmps)

}
const GenderHanhLyKyGui = ()=>{
  let tmps =[
    {
      KhoiLuong: 15,
      GiaTien: 200000
    },
    {
      KhoiLuong: 20,
      GiaTien: 220000
    },
    {
      KhoiLuong: 25,
      GiaTien: 310000
    },
    {
      KhoiLuong: 30,
      GiaTien: 440000
    },
    {
      KhoiLuong: 35,
      GiaTien: 505000
    },
    {
      KhoiLuong: 40,
      GiaTien: 570000
    }
  ]
  HanhLyKyGui.insertMany(tmps)
}
const ConnectMongose = config => {
  // Connecting to the database
  mongoose.connect(dbConfig.ConnectString, { useNewUrlParser: true })
    .then(() => {
      console.log("Connect db success")
      // GenderQuocGia()
      // GenderTuyenBay()
      // GenderHanhLyKyGui()
      // GenderChuyenBay('2019-06-23');
      console.log(new Date())
    })  
    .catch(err => {
      console.log("Could not connect to MongoDB.", err);
      process.exit();
    });
};

module.exports = { ConnectMongose }
