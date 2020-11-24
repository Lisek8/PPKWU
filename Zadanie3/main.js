const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const port = "8080";
const restServer = express();

function virtulCalendarDataParser(calendarData) {
  
}

function icsDataGenerator(calendarData) {
  const icsData = [];
  icsData.push("BEGIN:VCALENDAR");
  icsData.push("VERSION:2.0");
  icsData.push("PRODID://21599//PL");

  // Example events for testing purposes
  icsData.push("BEGIN:VEVENT");
  icsData.push("DTSTART:20201110T150000Z");
  icsData.push("DTEND:20201110T160000Z");
  icsData.push("SUMMARY:Example event");
  icsData.push("END:VEVENT");

  icsData.push("BEGIN:VEVENT");
  icsData.push("DTSTART:20201110T150000Z");
  icsData.push("DTEND:20201110T160000Z");
  icsData.push("SUMMARY:Example event2");
  icsData.push("END:VEVENT");
  
  icsData.push("END:VCALENDAR");
  fs.writeFileSync("output.ics", icsData.join('\n'));
}

restServer.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});