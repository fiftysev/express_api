import { Document } from "mongoose";

export interface IActualTheme extends Document {
  id?: string;
  place: number;
  tag: string;
  mentions?: number;
}
