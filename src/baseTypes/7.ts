/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DaysWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(days: DaysWeek): boolean {
  return days === DaysWeek.Saturday || days === DaysWeek.Sunday;
}

if (isWeekend(DaysWeek.Wednesday)) {
  console.log("Bихідний день!");
} else {
  console.log("Pобочий день :(");
}
