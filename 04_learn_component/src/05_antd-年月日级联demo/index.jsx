import React from "react";

import { Select } from "antd";

const { Option } = Select;

const currDate = new Date();
const initialYear = currDate.getFullYear();
const initialMonth = currDate.getMonth() + 1;
const initialDay = currDate.getDate();

const upperMonth = [1, 3, 5, 7, 8, 10, 12];

const App = () => {
  const [year, setYear] = React.useState(initialYear);
  const [month, setMonth] = React.useState(initialMonth);
  const [day, setDay] = React.useState(initialDay);

  const range = (start = 1, end = 12, format = null) => {
    if (format === "日") {
      if (month === 2) {
        // 闰年
        if (year % 4 === 0 || (year % 100 !== 0 && year % 400 === 0)) {
          end = 28;
        } else {
          end = 29;
        }
      } else if (upperMonth.includes(month)) {
        end = 31;
      } else {
        end = 30;
      }
    }

    let arr = [];
    for (let i = start; i <= end; i++) {
      arr.push({ label: `${i}${format}`, value: i });
    }
    return arr;
  };

  const yearList = range(initialYear - 5, initialYear + 1, "年");
  const monthList = range(1, 12, "月");
  const dayList = range(1, 30, "日");

  const handleYearChange = (value) => {
    setYear(value);
    setMonth(monthList[0].value);
    setDay(dayList[0].value);
  };

  const handleMonthChange = (value) => {
    setMonth(value);
    setDay(dayList[0].value);
  };

  const handleDayChange = (value) => {
    setDay(value);
  };

  return (
    <>
      <Select
        defaultValue={yearList[0].label}
        style={{ width: 120 }}
        value={year}
        onChange={handleYearChange}
      >
        {yearList.map((year) => (
          <Option value={year.value} key={year.value}>
            {year.label}
          </Option>
        ))}
      </Select>
      <Select
        style={{ width: 120 }}
        value={month}
        onChange={handleMonthChange}
        defaultValue={monthList[0].label}
      >
        {monthList.map((month) => (
          <Option value={month.value} key={month.value}>
            {month.label}
          </Option>
        ))}
      </Select>
      <Select
        style={{ width: 120 }}
        defaultValue={dayList[0].label}
        value={day}
        onChange={handleDayChange}
      >
        {dayList.map((day) => (
          <Option value={day.value} key={day.value}>
            {day.label}
          </Option>
        ))}
      </Select>
    </>
  );
};

export default App;
