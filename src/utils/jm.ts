import jalaliMoment from "jalali-moment";

export const dateToJalali = (date: string) => {
  return jalaliMoment(date).locale("fa").format("jYY/jMM/jDD - HH:mm");
};
