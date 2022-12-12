song1 = "";
song2 = "";

function preload(){
    song1 = loadSound("blackpink.mp3");
    song2= loadSound("bts.mp3");
}

function setup(){
    canvas = createCanvas(500,450);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    
}

function draw(){
    image(video,0,0,500,450);
}

