import { mixed, object, string } from "yup";

/**
 * Yup Schema - Error Messages
 */
export const schema = object().shape({
  title: string()
    //
    .min(4, "عنوان نباید کمتر از ۴ کاراکتر باشد")
    .max(40, "عنوان نباید بیشتر از ۴۰ کاراکتر باشد")
    .required("هر پستی باید عنوان داشته باشد"),
  //
  body: string()
    //
    .min(4, "بدنه پست نباید کمتر از ۴ تا باشه")
    .required("بدنه پست الزامیییییه"),
  //
  status: mixed()
    //
    .oneOf(["عمومی", "خصوصی"], "یکی رو انتخاب کن"),
  //
});
