import { Document, Schema, model } from "mongoose";

export interface iProps {
  title: string;
  progress: boolean;
  done: boolean;
}

interface iData {
  todo: iProps[];
  progress: iProps[];
  done: iProps[];
}

interface iPropsData extends iProps, Document {}

const TodoModel = new Schema<iPropsData>(
  {
    title: {
      type: String,
    },
    progress: {
      type: Boolean,
      default: false,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default model<iPropsData>("todos", TodoModel);
