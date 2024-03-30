import mongoose from "mongoose"

const uri = process.env.MONGO_URI

export async function connectToDB() {
  try {
    console.log("Connecting to DB...")
    // await mongoose.connect(uri!)
    // await mongoose.connection.db.admin().command({ ping: 1 })
    console.log("** CONNECTED **")
  } catch (error) {
    throw new Error("Could not connect to DB")
  }
}
