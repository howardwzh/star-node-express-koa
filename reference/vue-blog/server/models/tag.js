import mongoose from 'mongoose'
const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    default: ''
  }
}, { versionKey: false });
tagSchema.set('toJSON', { getters: true, virtuals: true });
tagSchema.set('toObject', { getters: true, virtuals: true }); //普通+虚拟

module.exports = mongoose.model('tag', tagSchema);
