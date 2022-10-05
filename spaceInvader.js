"use strict";

drawLine();

function drawLine() {

   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

   //Black background
   context.fillStyle = 'black';
   context.beginPath();
   context.rect(25, 25, 300, 300);
   context.fill();

   //Invader
   context.fillStyle = 'lime';
   context.beginPath();
    //Layer 1: 1 cube (left to right, top to bottom)
   context.rect(150, 50, 50, 50);
    //Layer 2: 1 large rectangle
   context.rect(50, 100, 250, 100);
    //Layer 3: 1 cube
   context.rect(150, 200, 50, 50);
    //Layer 4: 2 cubes
   context.rect(50, 250, 50, 50);
   context.rect(250, 250, 50, 50);
   context.fill();

}