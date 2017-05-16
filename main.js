//Image Gallery - Create an image abstract class and then a class that
//inherits from it for each image type. Put them in a program which
//displays them in a gallery style format for viewing.

//create a constructor class
function Image(url, title, caption, photographer){
	this.url = url;
	this.title = title;
	this.caption = caption; 
	this.photographer = photographer;
}; 

//let images inherit from Image class
var image1 = new Image(
	"http://lorempixel.com/output/food-h-c-200-300-1.jpg",
	"Sample Title1",
	"Sample Caption1",
	"By: Annie Leibowitz1"
); 

var image2 = new Image(
	"http://fillmurray.com/200/300",
	"Sample Title2",
	"Sample Caption2", 
	"By: Annie Leibowitz2"
); 

var image3 = new Image(
	"http://lorempixel.com/output/city-h-c-200-300-1.jpg", 
	"Sample Title3",
	"Sample Caption3",
	"By: Annie Leibowitz3"
); 

var image4 = new Image(
	"http://lorempixel.com/output/cats-h-c-200-300-2.jpg", 
	"Sample Title4",
	"Sample Caption4",
	"By: Annie Leibowitz4"
); 

var image5 = new Image(
	"http://lorempixel.com/output/city-h-c-200-300-6.jpg", 
	"Sample Title5",
	"Sample Caption5",
	"By: Annie Leibowitz5"
); 

var image6 = new Image(
	"http://lorempixel.com/output/food-h-c-200-300-4.jpg", 
	"Sample Title6",
	"Sample Caption6",
	"By: Annie Leibowitz6"
); 

//create array of images
var data = []; 

data[0] = image1; 
data[1] = image2; 
data[2] = image3;
data[3] = image4; 
data[4] = image5; 
data[5] = image6; 

//display images in DOM
function displayImage(image) {
    var img = document.createElement("IMG");
    img.src = image.url; 
    img.style = "margin: 15px";
    document.getElementById('root').appendChild(img);
}; 

data.forEach(function(item){
	displayImage(item); 
});