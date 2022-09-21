var canvas = new fabric.Canvas("canvas");
 var x= document.getElementById("myAudio");

function new_image()
{
    fabric.Image.fromURL("BirthdayImage.jpg",function(Img){
        C=Img;
        C.scaleToWidth(700);
        C.scaleToHeight(510);
        C.set({
    top:0,
    left:0
        });
        canvas.add(C);
        });
        }


function playSound(){
	x.play();
}
