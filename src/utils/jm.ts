import jalaliMoment from "jalali-moment";

export const dateToJalali = (date: string) => {
  return jalaliMoment(date).locale("fa").format("jYYYY/jMM/jDD - HH:mm");
};
