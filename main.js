function setup() {
	canvas = createCanvas(600 , 500);
	canvas.parent('canvas');
	video = createCapture(600,500);
	video.hide();

	posenet = ml5.poseNet(video, modelLoaded);
	posenet.on('pose', gotPoses);
}

function draw() {
	image(video, 0 ,0 ,600 ,500)
}

function modelLoaded() {
  console.log("Model Loaded");
}