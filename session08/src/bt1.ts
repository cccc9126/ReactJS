enum WeekDays {
  Monday = "Thứ Hai",
  Tuesday = "Thứ Ba",
  Wednesday = "Thứ Tư",
  Thursday = "Thứ Năm",
  Friday = "Thứ Sáu",
  Saturday = "Thứ Bảy",
  Sunday = "Chủ Nhật",
}

function printWeekDays(weekDays: typeof WeekDays) {
  for (const day of Object.values(weekDays)) {
    console.log(day);
  }
}

printWeekDays(WeekDays);
