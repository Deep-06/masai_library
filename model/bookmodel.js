const mongoose=require('mongoose');

//Schema
const bookSchema=mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
      isbn: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        required: true,
      }
      
},
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  versionKey: false,
}
)



//model

const BookModel=mongoose.model('book',bookSchema)

module.exports={
    BookModel
}