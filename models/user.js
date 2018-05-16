const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  fullname : { type: String , required: true },
  nationalCode : { type: Number , required: true },
  studentalCode : { type: Number , required: true },
  password: { type : String , required: true},
  email : { type : String , required: true },
  reserved : { type : Object , default : {count:0} },
  favourites : { type : Object , default : {count:0} }
});

UserSchema.plugin(timestamps,  {
    createdAt: 'created_at',
    updatedAt: 'last_login'
});

UserSchema.pre('save' , function(next) {
    bcrypt.hash(this.password, 10, (err, hash) => {
        this.password = hash;
        next();
    });
})

module.exports = mongoose.model('User' , UserSchema);
