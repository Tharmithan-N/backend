const mongoose = require("mongoose");

const FirstCompoentSchema = mongoose.Schema({
  image: {
    type: Buffer,
    contentType: String,
    required: false,
    // validate: {
    //         validator: (value) => {
    //             if (value && !['image/jpeg', 'image/png'].includes(value.contentType)) {
    //                 throw new Error('Invalid image content type. Allowed: jpeg, png');
    //             }
    //         }
  },
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("firstComponent", FirstCompoentSchema);
