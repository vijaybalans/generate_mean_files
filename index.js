'use strict';

/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */
module.exports = function(number, locale) {
    return number.toLocaleString(locale);
};

exports.grpBy = function(data, key){
	var obj = {};
	for (var i = data.length - 1; i >= 0; i--) {
		obj[key] = data[i]
	}
}