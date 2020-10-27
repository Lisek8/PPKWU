# String API

## Endpoints

### /analyzeString

#### PUT
Analyzes received string and returns:
- count of lowercase letters
- count of uppercase letters
- count of numeric characters
- count of special characters used
- unique list of special characters used

##### Request
```
{
    "string": <string>
}
```

##### Response
```
{
    "lowercaseCount": <number>,
    "uppercaseCount": <number>,
    "numberCount": <number>,
    "specialCount": <number>,
    "specialUsed": [
        <string>
    ]
}
```
