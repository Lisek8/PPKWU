const fs = require('fs');

function icsDataGenerator(calendarData) {
  const icsData = [];
  icsData.push("BEGIN:VCALENDAR");
  icsData.push("VERSION:2.0");
  icsData.push("PRODID://21599//PL");
  
  icsData.push("END:VCALENDAR");
  fs.writeFileSync("output.ics", icsData.join('\n'));
}


icsDataGenerator();