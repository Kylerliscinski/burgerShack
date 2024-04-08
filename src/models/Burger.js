import { Schema } from "mongoose";

export const BurgerSchema = new Schema({
  name: { type: String, required: true },
  hasBacon: { type: Boolean, required: true, default: false },
  hasLettuce: { type: Boolean, required: true, default: true },
  hasTomato: { type: Boolean, required: true, default: false },
  hasOnion: { type: Boolean, required: true, default: false },
  hasCheese: { type: Boolean, required: true, default: true },
  hasKetchup: { type: Boolean, required: true, default: true },
  hasMayo: { type: Boolean, required: true, default: false },
  hasMustard: { type: Boolean, required: true, default: false },
})