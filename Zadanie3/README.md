# Mobile Calendar WEEIA

## Obtaining data from API

Service address: `https://weeia.edu.p.lodz.pl/lib/ajax/service.php`

### Request

#### Cookies
- MoodleSessionweeia=\<moodleSessionKey>

#### Path parameters
- sesskey=\<sessionkey>
- info=(core_calendar_get_calendar_day_view / core_calendar_get_calendar_monthly_view / core_calendar_get_calendar_upcoming_view)

#### Body

##### Specification
```
[
   {
      "index": 0,
      "methodname": <string>,
      "args": {
         ["year": <number>,]
         ["month": <number>,]
         ["day": <number>,]
         "courseid": 1,
         "categoryid": 0
      }
   }
]
```

##### Example
- core_calendar_get_calendar_upcoming_view
```
[
  {
    "index": 0,
    "methodname": "core_calendar_get_calendar_upcoming_view",
    "args": {
      "courseid": 1,
      "categoryid": 0
    }
  }
]
```

- core_calendar_get_calendar_day_view
```
[
   {
      "index": 0,
      "methodname": "core_calendar_get_calendar_day_view",
      "args": {
         "year": 2020,
         "month": 11,
         "day": 10,
         "courseid": 1,
         "categoryid": 0
      }
   }
]
```

- core_calendar_get_calendar_monthly_view
```
[
   {
      "index": 0,
      "methodname": "core_calendar_get_calendar_monthly_view",
      "args": {
         "year": 2020,
         "month": 3,
         "courseid": 1,
         "day": 1
      }
   }
]
```

### Response
See [Response](calendars/response03.2020.json) for an example