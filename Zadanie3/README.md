# Mobile Calendar WEEIA

## Calendar data provider API

Service address: `http://www.weeia.p.lodz.pl/pliki_strony_kontroler/kalendarz.php`

## Enpoints

### /calendar

#### GET

Creates ics file which contains events from calendar from a month and year specified by request query parameters.

##### Request
Query paramaters:
- month (number from 1-12 range)
- year (number)

##### Response
Ics file format specified by [ICS documentation](https://tools.ietf.org/html/rfc5545)

#### Example

##### Request
http://localhost:8080/calendar?year=2020&month=3

##### Response
See [Response](calendars/calendar03.ics) for an example of a file that is a response