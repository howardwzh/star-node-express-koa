import mongoose from 'mongoose'
const Schema = mongoose.Schema
const firstInSchema = new Schema({
  readyTime: Number,
  whiteTime: Number,
  loadTime: Number,
  userId: String,
  userPhone: String,
  page: String,
  device: String,
  ip: String,
  time: {
    type: Date,
    default: Date.now
  }
})
export default mongoose.model('firstIn', firstInSchema);