import validator from "validator";
import bcrypt from "bcrypt";
import {v2 as cloudinary} from "cloudinary";
import doctorModel from "../models/doctormodel.js";
const addDoctors = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      image,
      speciality,
      degree,
      expercience,
      about,
      available,
      fees,
      address,
      date,
      slots_booked,
    } = req.body;
    const imageFile = res.imageFile;
    // checking for all data to add doctor
    if (
      !email ||
      !password ||
      !image ||
      !speciality ||
      !degree ||
      !expercience ||
      !about ||
      !available ||
      !fees ||
      !address ||
      !date ||
      !slots_booked
    ) {
      return res.json({ success: false, message: "Missing Details" });
    }
    //validating email format

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "please enter valid email" });
    }
    //validationg strong password
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "please enter strong password",
      });
    }
    //hashing doctor password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
  
  //upload img to claudinary 
const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"})
const imageUrl = imageUpload.secure_url()
const  doctorData= {
  name,
  email,
  image:imageUrl,
  password:hashedPassword, 
  speciality,
  degree,
  expercience,
  about,
  available,
  fees,
  address : JSON.parse(address),
  date : Date.now(),
}
  const newDoctor = new doctorModel(doctorData)
  await newDoctor.save();
  res.json({succes:true , message : "Doctor Added"})
  
  
  
  } catch (errors) {
    console.log(errors)
  res.json({succes:false , message : "error.message"})
  }
};
export { addDoctors };
