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

  calendarData.forEach(calendarEvent => {
    icsData.push("BEGIN:VEVENT");
    icsData.push(`DTSTART:${calendarEvent.year}${calendarEvent.month}${calendarEvent.day}T000000`);
    icsData.push(`DTEND:${calendarEvent.year}${calendarEvent.month}${calendarEvent.day}T235959`);
    icsData.push(`SUMMARY:${calendarEvent.title}`);
    icsData.push("END:VEVENT");
  });
  
  icsData.push("END:VCALENDAR");
  return icsData.join('\n');
}

restServer.get('/calendar', bodyParser.json(), async (request, response) => {
  const year = request.query.year;
  let month = request.query.month.toString();
  if (month.length == 1) {
    month = '0' + month;
  }
  const apiData = await requestPromise({
    method: 'GET',
    uri: weeiaCalendarUrl + `?rok=${year}&miesiac=${month}`
  });
  const events = [];
  HTMLParser.parse(apiData).querySelectorAll('.dzien').forEach(element => {
    element.childNodes.forEach(childElement => {
      if (childElement.classNames != null && childElement.classNames.includes('active')) {
        events.push({
          title: childElement.childNodes[1].text,
          day: childElement.childNodes[0].text,
          month: month,
          year: year
        });
      }
    });
  });

  response.statusCode = 200;
  response.set('Content-Type', 'text/calendar');
  return response.send(icsDataGenerator(events));
});

restServer.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});