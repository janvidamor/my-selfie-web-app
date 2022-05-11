var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
var Content;
function start(){
    
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
     Content=event.results[0][0].transcript.toLowerCase();
    console.log(Content);
    
    if(Content=="take my selfie"){
        console.log("taking selfie --- ");
        speak();
    }
    
}
function speak(){
    var synth=window.speechSynthesis;

    speak_data="Taking your Selfie in 5 Seconds";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    
Webcam.attach(camera);
setTimeout(function()
{
    img_id="selfie1";
    take_snapshot();
    speak_data="Taking your next selfie in just 10 seconds";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
},5000);
setTimeout(function()
{
    img_id="selfie2";
    take_snapshot();
    speak_data="Taking your next selfie in just 15 seconds";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
},10000);
setTimeout(function()
{
    img_id="selfie3";
    take_snapshot();
    
},15000);
}
Webcam.set({
    width:500,
    height:400,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML='<img id="selfie1" src="'+data_uri+'">';
        }
        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML='<img id="selfie2" src="'+data_uri+'">';
        }
        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML='<img id="selfie3" src="'+data_uri+'">';
        }
    });
}
