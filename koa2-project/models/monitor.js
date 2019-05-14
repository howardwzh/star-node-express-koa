import mongoose from 'mongoose'
const Schema = mongoose.Schema
const monitorSchema = new Schema({
  msg: String,
  url: String,
  line: String,
  col: String,
  device: String,
  userId: String,
  userPhone: String,
  ip: String,
  page: String,
  time: {
    type: Date,
    default: Date.now
  }
})
export default mongoose.model('monitor', monitorSchema);