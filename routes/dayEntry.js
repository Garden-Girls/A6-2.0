/*
 * GET home page.
 */

/*exports.view = function(req, res){
  res.render('dayEntry');
};*/

exports.view = function(req, res){
	var plantToShow = req.params.plantName;

	var monthToShow = req.params.monthNum;
	var dayToShow = req.params.dayNum;
	var yearToShow = req.params.yearNum;

	var dateToShow = monthToShow + "/" + dayToShow + "/" + yearToShow;

	res.render('dayEntry', {
		"plant": plantToShow,
		"date": dateToShow
	});
};