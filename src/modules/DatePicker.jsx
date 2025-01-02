import { useEffect } from "react";

export function DatePicker() {
  useEffect(() => {
    const daySelect = document.getElementById("day");
    const monthSelect = document.getElementById("month");
    const yearSelect = document.getElementById("year");

    // clear the select elements
    daySelect.innerHTML = "";
    monthSelect.innerHTML = "";
    yearSelect.innerHTML = "";
    // set iterableMonths to the first day of the year
    const iterableMonths = new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0);
    const today = new Date();

    const days = Array.from({ length: 31 }, (_, i) => {
      const day = i + 1;

      return {
        value: day,
        label: day.toString().padStart(2, "0"),
      };
    });
    const months = Array.from({ length: 12 }, (_, i) => {
      const month = iterableMonths.toLocaleString("default", { month: "long" });
      iterableMonths.setMonth(iterableMonths.getMonth() + 1);

      return {
        value: i + 1,
        label: month.charAt(0).toUpperCase() + month.slice(1),
      };
    });
    const MIN_YEAR = new Date().getFullYear();
    const years = Array.from({ length: 2 }, (_, i) => i + MIN_YEAR);

    days.forEach((day) => {
      const option = document.createElement("option");
      option.value = day.value;
      option.textContent = day.label;
      daySelect.appendChild(option);

      if (day.value === today.getDate()) {
        option.selected = true;
      }
    });

    months.forEach((month) => {
      const option = document.createElement("option");
      option.value = month.value;
      option.textContent = month.label;
      monthSelect.appendChild(option);

      if (month.value - 1 === today.getMonth()) {
        option.selected = true;
      }
    });

    years.forEach((year) => {
      const option = document.createElement("option");
      option.value = year;
      option.textContent = year;
      yearSelect.appendChild(option);

      if (year === today.getFullYear()) {
        option.selected = true;
      }
    });
  }, []);

  return (
    <div className="date-picker">
      <select name="" id="day"></select>
      <select name="" id="month"></select>
      <select name="" id="year"></select>
    </div>
  );
}
