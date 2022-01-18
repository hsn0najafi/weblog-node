import { Schema, Model, model, Types, Document } from "mongoose";

import { schema } from "./secure/blogAuth";

interface BlogSchema extends Document {
  title: string;
  body: string;
  status?: "عمومی" | "خصوصی";
  userId: Types.ObjectId;
  createDate?: DateConstructor | number;
}

interface BlogModel extends Model<BlogSchema> {
  blogValidation(body: any): Boolean;
}

/**
 * DB Schema
 */
const blogSchema = new Schema<BlogSchema>({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 4,
    maxlength: 40,
  },
  body: {
    type: String,
    minlength: 4,
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

// blogSchema.static("blogValidation", function (body) {
//   return schema.validate(body, { abortEarly: false });
// });

blogSchema.statics.blogValidation = function (body) {
  return schema.validate(body, { abortEarly: false });
};

export const Blog = model<BlogSchema, BlogModel>("Blog", blogSchema);
 