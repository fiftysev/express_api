import { Schema, model } from "mongoose";
import { IActualTheme } from "./interfaces/actualTheme.interface";

const ActualThemeSchema = new Schema({
  place: { type: Number, required: true, min: 1, max: 5 },
  tag: { type: String, required: true, maxlength: 30 },
  mentions: { type: Number, default: null },
});

export default model<IActualTheme>("ActualTheme", ActualThemeSchema);
