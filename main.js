scoreLeftWrist=0
song1="";
song2="";
song3="";
song4="";
song5="";
song6="";
song7="";
song8="";
song9="";
song10="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function preload(){
    song1=loadSound("harry potter.mp3")
    song2=loadSound("believer.mp3")
    song3=loadSound("cheap thrills.mp3")
    song4=loadSound("dance monkey.mp3")   
    song5=loadSound("don't let me down.mp3")
    song6=loadSound("Faded.mp3")
    song7=loadSound("senorita.mp3")
    song8=loadSound("Shape of you.mp3")
    song9=loadSound("thunder.mp3")
    song10=loadSound("wavin' flag.mp3")

}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center()

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on("pose",gotPoses)
}
function draw(){
    image(video,0,0,600,500);
fill("blue")
stroke("white")
if(scoreLeftWrist>0.2){
circle(leftWristX,leftWristY,40);
InNumberleftWristY=Number(leftWristY);
remove_decimals=floor(InNumberleftWristY);
volume=remove_decimals/500;
document.getElementById("volume").innerHTML="Volume = "+volume
song1.setVolume(volume);
}
}
function play(){
    song1.play();
    song1.setVolume(1)
    song1.rate(1);
    document.getElementById("play").style.display="none"
    document.getElementById("stop").style.display="inline-block"
}
function modelLoaded(){
    console.log("PoseNet Is Initialized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        scoreLeftWrist=results[0].pose.keypoints[9].score;
        console.log("scoreLeftwrist = "+scoreLeftWrist);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
    }
}
   function stop(){
       song1.stop()
       song2.stop()
       song3.stop()
       song4.stop()
       song5.stop()
       song6.stop()
       song7.stop()
       song8.stop()
       song9.stop()
       song10.stop()
       document.getElementById("play").style.display="inline-block"
       document.getElementById("stop").style.display="none"
   }
   function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }