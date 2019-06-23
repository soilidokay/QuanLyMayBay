/**
* Athor: Unmatched Tai Nguyen - 14 /06 /2019 - 09 :50 :39 
*
*/
const Service = require("../services/DonDatVeService");
const ServiceChiTiet = require("../services/ChiTietDatVeService");
class DonDatVeController {
    constructor() {

    }
    // {
    //     "SoLuongVe": 3,
    //     "SoLuongTreEm": 3,
    //     "SoLuongNguoiLon": 3,
    //     "SoLuongEmBe": 3,
    //     "HoTenKHDaiDien": "Tai Nguyen",
    //     "SDT": "0971992598",
    //     "Email": "giacacluoi@gmail.com",
    //     "DiaChi": "quan 9",
    //     "IdChuyenBay": "5d0f2f8c892ef136188386f4",
    //     "ChiTietDatVe": [
    //       {
    //         "HoTenKHachHang": "dsadsadsad",
    //         "MoTaHanhLy": "dsdasd",
    //         "KhoiLuongHanhLy": 230,
    //         "IdHanhLyKyGui": "5d0f2f8c892ef136188386f4"
    //       }
    //     ]
    //   }
    Create = HttpPost(async (params, model) => {
        return await Service.Create(params, model);
    })

    Update = HttpPost(async (params, model) => {
        return await Service.Update(params, model);
    });

    Delete = HttpPost(async (params, model) => {
        await ServiceChiTiet.DeleteWithParent(model)
        return await Service.Delete(params, model);
    });
    GetAll = HttpGet(async (params,model)=>{
        return await Service.GetAll(params,model,{populate: "ChiTietDatVe"})
    })
}
module.exports = new DonDatVeController();
