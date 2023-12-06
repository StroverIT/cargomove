import { Schema, model, models } from "mongoose";


const gallerySchema = new Schema({
 
  imageUrl: String,
  imageName: String,
  alt: String,
  createdAt: {
    type: Date,
    default: function () {
      return Date.now();
    },
  },
  order: Number,
});

const Gallery = models.Gallery || model("Gallery", gallerySchema);

export default Gallery;
