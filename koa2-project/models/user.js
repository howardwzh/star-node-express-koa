import mongoose from 'mongoose'
const Schema = mongoose.Schema
const userSchema = new Schema({
  userName: String,
  password: String,
  roleName: String,
  lastLoginTime: {
    type: Date,
    default: Date.now
  }
})
export default mongoose.model('user', userSchema);