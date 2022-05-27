function setup(){
    canvas=createCanvas(600, 500)
    canvas.center()
video=createCapture(VIDEO)
video.hide()
}

var song1=("Bijlee Bijlee.mp3")
var song2= ("Raataan Lambiyan.mp3")
function preload(){
    song=loadSound("Bijlee Bijlee.mp3")
        song=loadSound("Raataan Lambiyan.mp3")
}

function draw(){
    image(video, 0, 0, 600, 500)
}