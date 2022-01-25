var canvas=new fabric.Canvas("myCanvas");
var block_image_width=30;
var block_image_height=30;
var player_x=10;
var player_y=10;
var player_object="";
var block_image_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(img){
        player_object=img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);

    });
}

function new_img(get_image){
    fabric.Image.fromURL(get_image,function(img){
        block_image_object=img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);

    });
}


window.addEventListener("keydown",keyDown);
function keyDown(e){
    var keyPressed=e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true &&  keyPressed == '80'){

console.log("p and shift key pressed together");
block_image_width=block_image_width+10;
block_image_height=block_image_height+10;
document.getElementById("current_width").innerHTML=block_image_width;
document.getElementById("current_height").innerHTML=block_image_height;



    }
    if (e.shiftKey == true &&  keyPressed == '77'){

        console.log("m and shift key pressed together");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    console.log(keyPressed);
     if (keyPressed=="40"){
     
console.log("Down Arrow key is pressed");

down();

     }

     if (keyPressed=="37"){
         console.log("Left Key is pressed");
         left();
     }

     if (keyPressed=="39"){
         console.log("Right Key is pressed");
         right();

     }
     
     if (keyPressed=="38"){
         console.log("Up key is pressed");
         up();
     }

     if (keyPressed=="84"){
         console.log("Alphabet t is pressed");
         new_img("trunk.jpg");
     }
     if (keyPressed=="87"){
        console.log("Alphabet w is pressed");
        new_img("wall.jpg");
    }
    if (keyPressed=="85"){
        console.log("Alphabet u is pressed");
        new_img("unique.png");
    }

    if (keyPressed=="68"){
        console.log("Alphabet d is pressed");
        new_img("dark_green.png");
    }

    if (keyPressed=="71"){
        console.log("Alphabet g is pressed");
        new_img("ground.png");
    }

    if (keyPressed=="76"){
        console.log("Alphabet l is pressed");
        new_img("light_green.png");
    }

    if (keyPressed=="82"){
        console.log("Alphabet r is pressed");
        new_img("roof.jpg");
    }

    if (keyPressed=="89"){
        console.log("Alphabet y is pressed");
        new_img("yellow_wall.png");
    }

    if (keyPressed=="67"){
        console.log("Alphabet c is pressed");
        new_img("cloud.jpg");
    }
 
}

function up(){

if (player_y>=0) {
    player_y=player_y-block_image_height;
    canvas.remove(player_object);
    player_update();    
console.log("Player y=" + player_y);
console.log("Player x=" + player_x);
console.log("Block image height="+block_image_height);
}
}

function down(){

    if (player_y<480) {
        player_y=player_y+block_image_height;
        canvas.remove(player_object);
        player_update();    
    console.log("Player y=" + player_y);
    console.log("Player x=" + player_x);
    console.log("Block image height="+block_image_height);
    }
    }

    function right(){

        if (player_x<=880) {
            player_x=player_x+block_image_width;
            canvas.remove(player_object);
            player_update();    
        console.log("Player y=" + player_y);
        console.log("Player x=" + player_x);
        console.log("Block image width="+block_image_width);
        }
        }

        function left(){

            if (player_x>=0) {
                player_x=player_x-block_image_width;
                canvas.remove(player_object);
                player_update();    
            console.log("Player y=" + player_y);
            console.log("Player x=" + player_x);
            console.log("Block image width="+block_image_width);
            }
            }
    