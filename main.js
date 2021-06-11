rightWristX = "";
rightWristY = "";
rigthWristScore = "";
GameStatus = "";

function setup() {
	canvas = createCanvas(600 , 500);
	canvas.parent('canvas');
	video = createCapture(VIDEO);
	video.size(600 , 500);
	video.hide();

	posenet = ml5.poseNet(video, modelLoaded);
	posenet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log("Model is Loaded!");
}

function gotPoses(results) {
	if (results.length > 0) {
		rightWristX = results[0].pose.rightWrist.x;
	    rightWristY = results[0].pose.rightWrist.y;
		console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
		rigthWristScore =  results[0].pose.keypoints[10].score;
		console.log(rigthWristScore);
	}
}

function startGame() {
	GameStatus = "start";
	document.getElementById("status").innerHTML = "Game Is Loaded";
}

function draw() {
	if (GameStatus == "start") {
		image(video, 0 ,0 ,600 ,500);
	
	    if (rigthWristScore > 0.2) {
			fill("#00ffae");
			stroke("#00aaff");
			circle(rightWristX + 15 , rightWristY + 15 , 20);
		}
	}
}