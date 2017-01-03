module.exports = {
	grpBy:function(data, key){
		var obj = {};
		for (var i = data.length - 1; i >= 0; i--) {
			obj[data[i][key]] = data[i]
		}
		return obj
	}
}