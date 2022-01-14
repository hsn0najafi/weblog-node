import { Schema, Model, model, Types, Document } from "mongoose";

interface BlogSchema extends Document {
  title: string;
  body: string;
  status?: "public" | "private";
  user?: Types.ObjectId;
  createDate?: DateConstructor | number;
}

interface BlogModel extends Model<BlogSchema> {}

/**
 * DB Schema
 */
const blogSchema: Schema<BlogSchema> = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 4,
    maxlength: 255,
  },
  body: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "public",
    enum: ["public", "private"],
  },
  user: {
    type: Types.ObjectId,
    ref: "User",
  },
  createDate: {
    type: Date,
    default: Date.now(),
  },
});

export const Blog = model<BlogSchema, BlogModel>("Blog", blogSchema);
