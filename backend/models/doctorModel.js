import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema ({
  name : {type: string , required:true},
  email: {type: string , required:true, unique: true},
  password : {type: string , required:true},
  image : {type: string , required:true},
  speciality : {type: string , required:true},
  degree : {type: string , required:true},
  experience: {type: string , required:true},
  about: {type: string , required:true},
  available : {type : boolean , default:true},
  fees : {type: number, required:true},
  address : {type: Objet , required:true},
  Date: {type: number , required:true},
  slots_booked: {type: Object , default:{}},


}, {minimize:false}// allow saving empty object
)
const  doctorModel =mongoose.models.doctors || mongoose.model('doctor',
   doctorSchema);
export default doctorModel;
