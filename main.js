Webcam.set({
  width : 310,
  height : 300,
  image_format : 'jpeg',
  jpeg_quality : 100,

  constraints:{
      facingMode : "environment"
  }
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function Take_pic(){
    Webcam.snap(function(hello){
        document.getElementById("result").innerHTML = '<img id="image" src="'+hello+'"/>';
    });
}

console.log("ml5 version : " , ml5.version );

Vedant = ml5.imageClassifier('MobileNet' , loaded);

function loaded(){
    console.log("Model Loaded!!!!!😃😃😃😃");
}

function check(){
    img = document.getElementById("image");
    Vedant.classify(img , bello);
}

function bello(error, result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("object_names").innerHTML= result[0].label;
    }
}