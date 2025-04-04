import data from "../data.js"
import {Subscriber} from "../models/subscriber.js"

export const dataFile=async(req,res,next)=>{
    await Subscriber.deleteMany({})
    await Subscriber.insertMany(data)
    next();
}
export const getSubscriber=async(req,res)=>{
   try {
     const subscribers = await Subscriber.find()
     return res.status(200).json({message: "Subscriber fetched successfully", subscribers})
   } catch (error) {
      console.log("something went wrong", error)
      return res.status(500).send('Internal server error')
   }
}
export const getSubscriberName=async(req,res)=>{
    try {
        const subscribersNameandEmail = await Subscriber.find().select('-_id name subscribedChannel')
        return res.status(200).json({message: "Subscriber's name and email fetched successfully",subscribersNameandEmail})
    } catch (error) {
        console.log("Something went wrong", error)
        return res.status(500).send("Internal server error")
    }
}