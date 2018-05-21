const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp');

const BookSchema = new Schema({
  title : { type: String , required: true },
  author : { type: String , required: true },
  stack : { type: Number , required: true },
  publisher : { type: String, default: 'ناشناخته'},
  publishDate : { type: Date, default: Date.now() },
  category : { type: String, default: 'ناشناخته'}
});

BookSchema.plugin(timestamps,  {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = mongoose.model('Book' , BookSchema);
