/*for (var i = 0; i < document.getElementsByClassName("face").length; i++) {
	document.getElementsByClassName("face")[i].addEventListener("click", function() {
		console.log("click registered");
		var clicked = document.querySelector(".face");
		if (document.getElementsByClassName("face").length == 1) {
			console.log("too much");
			//document.querySelector(".selected").classList.remove("selected");
		}
		document.querySelector(".face").classList.toggle("selected");
	});
}*/

document.querySelector("#editing").addEventListener("click", function() {
	console.log("editing");
	document.querySelector(".text").setAttribute("contenteditable", "true");
})