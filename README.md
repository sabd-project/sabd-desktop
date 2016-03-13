# Sabd Desktop

Electron based Gurmukhi search application

## TODO 
- [x] Bootstrapping
- [ ] Config for dev and prod
- [ ] Front end spec
- [ ] Back end spec and api for search
- [ ] Back end models
- [ ] Database import
- [ ] Webfont install
- [ ] Transliteration engine
- [ ] User preferences save
- [ ] Multiplatform builds
- [ ] Multiple 
- [ ] Front end felt tip fairying
- [ ] Project web page
- [ ] Autoupdaes
- [ ] Ping data back to Keen for platform usage monitoring
- [ ] Internationalisation
- [ ] Get icons created for distribution

## HTTP API
Web server sits on port 9100 (may need to detect if busy and pick another)

###  GET /search/{type}/{query}

Search for a sabad by the following criteria and return an array of Sabd id's and line in gurmukhi/english

| type | explained |
| :--- | ---: |
| first-letter | first letter gurmukhi search |
| gurmukhi | Gurmukhi only search |
| english | search english translations |

eg
```javascript
//Find a sabad using the first letter search technique
// GET /search/first-letter/hjkkqp

{
    [
        {
            "id": 2030,
            "Gurmukhi": "hir jIau ikRpw krhu qum ipAwry ]",
            "Transliteration": "Har Jio Kirpa Karo Tum Piyare"
        }
    ]
}
```

###  GET /sabd/{id}

Get a particular sabd in JSON for rendering 

