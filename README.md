# Sabd Desktop

Electron based Gurmukhi search application

## TODO 
- [x] Bootstrapping
- [ ] Front end spec
- [ ] Back end spec and api for search
- [ ] Back end models
- [ ] Database import
- [ ] Webfont install
- [ ] User preferences save
- [ ] Multiplatform builds
- [ ] Multiple 
- [ ] Front end felt tip fairying
- [ ] Project web page

## HTTP API

###  GET /search/{type}/{query}

Search for a sabad by the following criteria and return an array of Sabd id's and line in gurmukhi/english

type | explained
:- | -:
first-letter | first letter gurmukhi search
gurmukhi | Gurmukhi only search
english | search english translations

###  GET /sabd/{id}

Get a particular sabad in JSON for rendering 

