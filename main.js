function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier =ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/l1DgicAH6/model.json', modelReady);

}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
   if (error) {
       console.error(error);
   } else {
       console.log(results);
       random_number_r = Math.floor(Math.random() * 255) + 1;
       randome_number_g = Math.floor(Math.random() * 255) + 1;
       randome_number_b = Math.floor(Math.random() * 255) + 1;

       document.getElementById("result_label").innerHTML = 'I can hear - ' +
       results[0].label;
       document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
       (results[0].confidence*100).toFixed(2)+" %";
       document.getElementById("result_label").style.color = "rgb("
+random_number_r+","+randome_number_g+","+random_number_r+")";
document.getElementById("result_confidence").style.color = "rgb("
+random_number_r+","+randome_number_g+","+random_number_r+")";

img = document.getElementById('dog');
img1 = document.getElementById('cat');
img2 = document.getElementById('rabbit');
img3 = document.getElementById('parrot');
if (results[0].label == "clap potato") {
    img.src = 'rolling-a-blanket-dog.gif';
    img1.src = 'png-clipart-cute-cat-animal-cat.png';
    img2src = 'png-clipart-rabbit-snowball-easter-bunny-dachshund-macdonald-s-rabbit.png';
    img3.src = '448-4489272_678-×-1178-1-transparent-background-parrot-png.png';
}else if (results[0].label == "smash the keyboard") {
    img.src = 'labrador-dog-PNG.png';
    img1.src = 'smiling-cat-creepy-cat.gif';
    img2.src = 'png-clipart-rabbit-snowball-easter-bunny-dachshund-macdonald-s-rabbit.png';
    img3.src = '448-4489272_678-×-1178-1-transparent-background-parrot-png.png';
}else if (results[0].label == "potato thanos snap") {
    img.src = 'labrador-dog-PNG.png';
    img1.src = 'png-clipart-cute-cat-animal-cat.png';
    img2.src = 'rabbit-secret-life-of-pets.gif';
    img3.src = '448-4489272_678-×-1178-1-transparent-background-parrot-png.png';
}else{
    img.src = 'labrador-dog-PNG.png';
    img1.src = 'png-clipart-cute-cat-animal-cat.png';
    img2.src = 'png-clipart-rabbit-snowball-easter-bunny-dachshund-macdonald-s-rabbit.png';
    img3.src = 'parrot-party.gif';
}
}
     
   }
