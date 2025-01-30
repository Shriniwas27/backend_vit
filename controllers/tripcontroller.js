import TripModel from "../models/Trip.js";
import UserModel from "../models/User.js";

export const CreateTrip = async(req, res) => {
  const {userid}= req.body;
  const {date,location,activities,type,weather,packing_list,people}=req.body;
  try {
    const user= await UserModel.findById({
        _id:userid
    });
    
    if(!user){
        return res.status(400).json({message:"User not found"});
    }

    const sendreqtomodel = await fetch('')


    const newTrip = await TripModel.create({
        user:user._id,
        date:date,
        location:location,
        activities:activities,
        type:type,
        weather:weather,
        packing_list:packing_list,
        people:people
    });
   

    await newTrip.save();
    res.status(201).json({ message: 'Trip created successfully' ,newTrip });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const GetAllTrips = async(req, res) => {
  try {
    const userid = req.params.userid;
    const user= await UserModel.findById({
        _id:userid
    });
    if(!user){
        return res.status(400).json({message:"User not found"});
    }
    const trips = await TripModel.find({
        user:user.id
    });

    res.status(200).json({
        trips: trips,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const GetTripById = async(req, res) => {
    const userid = req.params.userid;
  const tripid = req.params.tripid;
  try {
    const user = await UserModel.findById({
        _id:userid
    });
    if(!user){
        return res.status(400).json({message:"User not found"});
    }
    const trip = await TripModel.findById({
        _id:tripid,
        user:user.id
    });
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }
    res.status(200).json(trip);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
