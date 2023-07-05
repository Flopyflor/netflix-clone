import { Schema, model } from 'mongoose'

const favoriteSchema = Schema({
  user: {
    type: Schema.ObjectId,
    ref: "User",
  },
  favoriteMovies: [
    {
      type: Schema.ObjectId,
    //   ref: "Movies",
    }

  ],
}, {
    timestamps: true,
    versionKey: false
});

export default model("Favorite", favoriteSchema);