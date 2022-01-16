import { Schema, Model, model, Types, Document } from "mongoose";

interface BlogSchema extends Document {
  title: string;
  body: string;
  status?: "عمومی" | "خصوصی";
  userId: Types.ObjectId;
  createDate?: DateConstructor | number;
}

interface BlogModel extends Model<BlogSchema> {}

/**
 * DB Schema
 */
const blogSchema = new Schema<BlogSchema>({
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
    default: "عمومی",
    enum: ["عمومی", "خصوصی"],
  },
  userId: {
    type: Types.ObjectId,
    ref: "User",
    required: true,
  },
  createDate: {
    type: Date,
    default: Date.now(),
  },
});

export const Blog = model<BlogSchema, BlogModel>("Blog", blogSchema);
