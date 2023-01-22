function setup(){
video=createCapture(VIDEO);
video.size(500, 500);

canvas=createCanvas(550, 550);
canvas.position(650,50);

poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);

}

function modelLoaded(){
    console.log('poseNet Is Initialized!');
}



function gotPoses(results){
if(results.lenght>0)
{
    console.log(results);
}
}

function draw(){
    background('#FFE5B4');
}