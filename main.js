var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("text_area").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run(event){
    console.log(event);
  var Content =  event.results[0][0].transcript;
  console.log(Content);
  document.getElementById("text_area").innerHTML = Content;
  if(Content == "take my selfie"){
    console.log("Taking Selfie");
    speak();

  }
  
}

function speak(){
  var synth = window.speechSynthesis;
  speak_data = "taking your selfie in 5 seconds";
  var utterThis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis);
  Webcam.attach(camera);
  setTimeout(function(){
    take_snapshot();
    save_snapshot();
  },5000);
}

Webcam.set({
  height:250,
  width:350,
  image_format:'png',
  png_quality:90
});

camera = document.getElementById("cam");

function take_snapshot(){
  Webcam.snap(function(data_uri){
    document.getElementById("pic").innerHTML = '<img id="selfie_img" src="'+data_uri+'">';
  });
}

function save_snapshot(){
  link = document.getElementById("link");
  selfie = document.getElementById("selfie_img").src;
  link.href = selfie;
  link.click();
}
