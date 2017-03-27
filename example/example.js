// using the airport codes array from codes.js in this folder

var codes = jsAutoComplete.prepareOptions(airportCodes)

var autoCompleteOptions = jsAutoComplete.getAutoCompleteOptions('LG', codes)

// autoCompleteOptions would be => ["LGA", "LGB", "LGG", "LGK", "LGL", "LGP", "LGQ"]
