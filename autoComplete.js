/**
 * 
 */
/**
 * 
 */

var jsAutoComplete = function() {

	function loadOptionsIntoSet(options) {
		var set = new Set();
		for (var o = 0; o < options.length; o++) {
			var option = options[o]
			for (var i = 1; i <= option.length; i++) {
				set.add(option.slice(0, i));
			}
			set.add(option + '*');
		}

		return set;
	}

	function sortSetIntoArray(set) {
		var optionsArray = Array.from(set);
		optionsArray = optionsArray.sort();
		return optionsArray;
	}

	function prepareOptions(options) {
		var preparedOptions = loadOptionsIntoSet(options);
		preparedOptions = sortSetIntoArray(preparedOptions);
		return preparedOptions;
	}

	function getAutoCompleteOptions(input, options) {
		var results = [];
		var start = options.indexOf(input);
		if (start < 0) {
			return [];
		}
		var potentials = options.slice(start, options.length);
		for (var i = 0; i < potentials.length; i++) {
			if (potentials[i].indexOf('*') > -1) {
				results.push(potentials[i - 1]);
				if (!potentials[i + 1].startsWith(input)) {
					break;
				}
			}
		}
		return results;
	}

	return {
		prepareOptions : prepareOptions,
		getAutoCompleteOptions : getAutoCompleteOptions
	}
}();
