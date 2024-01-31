const mongoose=require('mongoose');
const validator = require('validator');

//Schema
const userSchema=mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50,
      },
       email: {
        type: String,
        required: true,
        unique: true,
        validate: {
          validator: function (v) {
            // Email validation using validator library
            return validator.isEmail(v);
          },
          message: props => `${props.value} is not a valid email address!`,
        },
      },
      password: {
        type: String,
        required: true,
      }
      
},
{
  timestamps: {
    createdAt: 'created_at',
  },
  versionKey: false,
}
  )



//model

const UserModel=mongoose.model('user',userSchema)

module.exports={
    UserModel
}