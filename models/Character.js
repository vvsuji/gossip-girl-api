import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// const Character = new Schema({
//   name: String,
//   nicknames: [{ type: String }],
//   birthplace: String,
//   birthday: String,
//   family: [{ type: String }],
//   romances: [{ type: String }],
//   friends: [{ type: String }],
//   enemies: [{ type: String }],
//   alive: Boolean,
//   portrayedBy: String,
//   quotes: [{ type: String }],
//   hobbies: [{ type: String }],
//   trivia: [{ type: String }],
// });

const Character = new Schema({
  name: { type: String },
  title: { type: String },
  blurb: { type: String },
  image_loading: { type: String },
  image_splash: { type: String },
  tags: [{ type: String }],
  partype: { type: String },
});

export default mongoose.model('characters', Character);
