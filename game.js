var wrong = 0;
var generatedWord = words[Math.floor(Math.random()*words.length)];
var typedWord="";
var lingo_row = 0;
//spel
function refresh(){
  location.reload();
}
var res = generatedWord.split("");
console.log(generatedWord);
document.getElementById("input_"+lingo_row+"_0").value = generatedWord[0]
console.log(res);

function check(){
  getTypedWord();
      for(var p=0; p<=4; p++){
      if (document.getElementById("input_"+lingo_row+"_"+p).value == res[p]) {
        document.getElementById("input_"+lingo_row+"_"+p).style.backgroundColor = "red";

      }else {
        for (var x = 1; x <= 4; x++) {
        if (document.getElementById("input_"+lingo_row+"_"+p).value == res[x]) {
          document.getElementById("input_"+lingo_row+"_"+p).style.backgroundColor = "yellow";
          }
        }
      }
    }
    if (generatedWord===typedWord) {
       alert("gewonnen");
       location.reload();
     }
    wrong++;
    if (wrong == 5) {
      alert("Verloren");
      location.reload();
  }
   lingo_row++
   var main_iets = document.getElementById("game");
   var br = document.createElement("br")
   main_iets.appendChild(br)
   for (var column=0; column <=4; column++){
   var input = document.createElement("input");
   input.setAttribute("id", "input_"+lingo_row+"_"+column);
   input.setAttribute("name","");
   input.setAttribute("text","");
   input.setAttribute("value","");
   input.setAttribute("maxlength","1");
   input.innerHTM = "";

   main_iets.appendChild(input);
 }
 document.getElementById("input_"+lingo_row+"_0").value = generatedWord[0]
}

function getTypedWord(){
  typedWord="";
  for(var i=0; i < generatedWord.length; i++){
    typedWord += document.getElementById("input_"+lingo_row+"_"+i).value;
}
}
