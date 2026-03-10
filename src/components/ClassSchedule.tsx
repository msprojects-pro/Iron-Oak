import React from 'react';

const ClassSchedule = () => {
  const schedule = [
    { time: "6:00 AM", mon: "HIIT", tue: "Strength", wed: "HIIT", thu: "Strength", fri: "HIIT", sat: "Bootcamp", sun: "-" },
    { time: "7:30 AM", mon: "Strength", tue: "Kettlebell", wed: "Strength", thu: "Kettlebell", fri: "Strength", sat: "Yoga", sun: "Open Gym" },
    { time: "9:00 AM", mon: "Bootcamp", tue: "HIIT", wed: "Bootcamp", thu: "HIIT", fri: "Bootcamp", sat: "Strength", sun: "Open Gym" },
    { time: "12:00 PM", mon: "Strength", tue: "Strength", wed: "Strength", thu: "Strength", fri: "Strength", sat: "-", sun: "-" },
    { time: "4:30 PM", mon: "HIIT", tue: "Kettlebell", wed: "HIIT", thu: "Kettlebell", fri: "HIIT", sat: "-", sun: "-" },
    { time: "6:00 PM", mon: "Strength", tue: "Bootcamp", wed: "Strength", thu: "Bootcamp", fri: "Strength", sat: "-", sun: "-" },
    { time: "7:30 PM", mon: "Yoga", tue: "Strength", wed: "Yoga", thu: "Strength", fri: "-", sat: "-", sun: "-" },
  ];

  const days = ["Time", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {days.map((day) => (
              <th key={day} className="p-4 text-left text-xs font-black uppercase tracking-widest border-b border-white/10 bg-secondary">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {schedule.map((row, i) => (
            <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
              <td className="p-4 text-xs font-bold text-accent uppercase tracking-widest bg-secondary/50">{row.time}</td>
              <td className="p-4 text-sm font-medium">{row.mon}</td>
              <td className="p-4 text-sm font-medium">{row.tue}</td>
              <td className="p-4 text-sm font-medium">{row.wed}</td>
              <td className="p-4 text-sm font-medium">{row.thu}</td>
              <td className="p-4 text-sm font-medium">{row.fri}</td>
              <td className="p-4 text-sm font-medium">{row.sat}</td>
              <td className="p-4 text-sm font-medium">{row.sun}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassSchedule;
