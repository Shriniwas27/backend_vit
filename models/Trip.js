import mongoose from 'mongoose';

const tripSchema = new mongoose.Schema({
    user:mongoose.Schema.Types.ObjectId,
    date: { type: String, required: true },
    location: { type: String, required: true },
    activities: [{type: String, required: true}],
    type: { type: String, required: true },
    weather: { type: String},
    packing_list:[{type:String}],
  
  people: [
    {
      name: { type: String, required: true },
      age: { type: Number, required: true },
      sex: { type: String, required: true },
      healthIssues: { type: String, required: false },
    },
  ],
});

const TripModel = mongoose.model('Trip', tripSchema);
export default TripModel;

