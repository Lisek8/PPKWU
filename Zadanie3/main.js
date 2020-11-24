const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const requestPromise = require('request-promise-native');
const HTMLParser = require('node-html-parser');

const port = "8080";
const restServer = express();
const weeiaCalendarUrl = 'http://www.weeia.p.lodz.pl/pliki_strony_kontroler/kalendarz.php';

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

restServer.get('/calendar', bodyParser.json(), async (request, response) => {
  const year = '2020';
  const month = '03';
  const apiData = await requestPromise({
    method: 'GET',
    uri: weeiaCalendarUrl + `?rok=${year}&miesiac=${month}`
  });
  const foundDays = [];
  const parsed = HTMLParser.parse(apiData).querySelectorAll('.dzien');
  parsed.forEach(element => {
    element.childNodes.forEach(childElement => {
      if (childElement.classNames != null && childElement.classNames.includes('active')) {
        foundDays.push(childElement);
      }
    });
  });
  const events = [];
  foundDays.forEach(calendarEvent => {
    const eventDay = calendarEvent.childNodes[0].text;
    const eventTitle = calendarEvent.childNodes[1].text;
    console.log(eventDay + " " + eventTitle);
  });

  response.statusCode = 200;
  return response.send(apiData);
});

restServer.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});