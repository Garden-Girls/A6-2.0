/*
 * GET home page.
 */

exports.view = function(req, res){
	var plantToShow = req.params.plantName;

	var monthToShow = req.params.monthNum;
	var dayToShow = req.params.dayNum;
	var yearToShow = req.params.yearNum;

	var dateToShow = monthToShow + "/" + dayToShow + "/" + yearToShow;

  res.render('addPhoto', {
  	"plant": plantToShow,
  	"date": dateToShow,
  	"images": [
  		{
			"image": "basil.svg",
		},
		{
			"image": "basil.svg",
		},
		{
			"image": "basil.svg",
		},
		{
			"image": "sunflower.svg",
		},
		{
			"image": "rosemary.svg",
		},
		{
			"image": "basil.svg",
		},
		{
			"image": "succulent.svg",
		},
		{
			"image": "sunflower.svg",
		},
		{
			"image": "orchid.svg",
		},
		{
			"image": "orchid.svg",
		},
		{
			"image": "rosemary.svg",
		},
		{
			"image": "succulent.svg",
		},
		{
			"image": "succulent.svg",
		}
  	]
  });
};