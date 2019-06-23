/**
* Athor: Unmatched Tai Nguyen - 09 /06 /2019 - 05 :05 :30 
*
*/
const { Error } = require('../Contants/Config')

class ServiceBase {
  constructor(ModelSchema) {
    this.ModelSchema = ModelSchema
  }

  Create = async (params, model) => {
     return await this.ModelSchema.create(model);
  };

  Update = async (params, model) => {
    const obj = await this.ModelSchema.findById(model._id);

    if (!obj) return Error.ErrorNotFound;

    obj = {...obj,...model};

    return await this.ModelSchema.findByIdAndUpdate(model._id, obj);
  };

  Delete = async (params, model) => {
    return await this.ModelSchema.findByIdAndDelete(model._id);
  };
  GetAll = async(params,model,option={})=>{
    console.log(option.populate)
    let objs = await this.ModelSchema.find().populate(option.populate||"").exec()
    if(!objs) return Error.Error_Empty
    return objs
  }
}
module.exports = ServiceBase