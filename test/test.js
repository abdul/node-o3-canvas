/*
 * Copyright (C) 2010 Javeline BV
 *
 * This library is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation; either version 2 of the License, or (at your option) any later
 * version.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more
 * details.
 *
 * You should have received a copy of the GNU General Public License along with
 * this library; if not, write to the Free Software Foundation, Inc., 51
 * Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA.
 */

var canvasFactory = require('../lib/o3-canvas')

function drawtocontext(ctx)
{
	ctx.clearRect(0,0,300,300);
    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect (10, 10, 55, 50);

    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect (30, 30, 55, 50);
    
    ctx.moveTo(20,40);
    ctx.lineTo(260,280);
    ctx.lineTo(20,280);
    ctx.closePath();
	
    ctx.moveTo(10,10);
    ctx.lineTo(300,300);
    ctx.lineTo(10,300);
    ctx.closePath();
    

    ctx.fill();
    ctx.stroke();
	
	ctx.strokeStyle= "rgb(255,128,0)";
	ctx.beginPath();  
	ctx.moveTo(75,25);  
	ctx.quadraticCurveTo(25,25,25,62.5);  
	ctx.quadraticCurveTo(25,100,50,100);  
	ctx.quadraticCurveTo(50,120,30,125);  
	ctx.quadraticCurveTo(60,120,65,100);  
	ctx.quadraticCurveTo(125,100,125,62.5);  
	ctx.quadraticCurveTo(125,25,75,25);  
	ctx.stroke();  

}
/*
function draw() 
{
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    drawtocontext(ctx);
}
*/
  
var ctx = canvasFactory(50,50, "argb");

drawtocontext(ctx);
var buf = ctx.pngBuffer();
var check =
"iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADCUlEQVRoge3YXUhTYRzH8e/Z\n"+
"JuhSybfcJjqSEqM0TKcxEl/Li4UUgRF0EUGtqyBvgqiuhF68TmgVKN4UUlKSECa6K71IrJSw\n"+
"SWhEmiLVZpSKuS7EF9JtZ9t5o/xd7pz9z/PhnOc8z/8Ifr/fzz8QndoDkCpbEK1lC6K1bEG0\n"+
"lv8L0tbWRktLi9xjiSqCmJXd4XDQ2dnJHaBQgUFFElF3xGazYcLEZQwMyD2iCCN6jliwUEaN\n"+
"ZjFhTXYzZs1iwn5raRUT0etXi5iI1xGtYaJaELWEiXpl1wpGki2KFjCS7bXUxki6aVQTI/nu\n"+
"Vy2MLNt4NTCy9SNKY2RtrJTEyN4hKoVRpNWVG2MwgkGGuptmDfOCWyxG3WnqDJCSB+nFEJus\n"+
"IASkwRiMkF4E6Tb4OQWfXoJvTGEIrGEu0cNhKjBjFvW/Hck+qg8OU5L3gcERK/db8/g8nbR6\n"+
"XHEILGOsnKcLV0iM1TKDo/Q1u61fcL/K5XrTCbyzxg3nqQIBSCAnKEYQ/NTYhzhiH6LDXcCD\n"+
"9nLmFwIPVzUIBMbEG+c4e9yNMXaeBtcxvnq3hayl+pfGNUwPk0yyK2uKa852JqaTaGw+KgoB\n"+
"Kt+RlSSQw07hHPn2Jpx2gdan5bz1ZIVVQxOQGP0id+t6SDSmUuT6Tq43RuS7bC2qP1oA9TWP\n"+
"0Ql+LjRfQed1rj5m4UR1SG1BHyXZI1x9cobF3/oNc0ZsJIWMMcYoo6LP35sxzsXqduofOvkx\n"+
"F7f6eyQYSSEePLhxi7p4SryPxpMuGjpOMz5j2nA8XIykkDTSMGGim+6gFzfol7hdd49ng3Z6\n"+
"R/IDnhcORvI5YsFCFVVBMbUVA/h+GXH1OkLWE4uRrWcPhDHGLlBWOMKN56dY8gui6onByNqz\n"+
"b4YpPfCeodFMpn3bw6oXCiN7z74eo9cvUVkyTFf/vojqBcMo0rOvYLL3DDLzLZGPE6kR1wuE\n"+
"UaxnrxaqqLa/4VFfRtT1NsMotrIfyhQwx8Zx0zMc9vZjs/yNUQxSWfyO3v79VPiXH7NZPFHX\n"+
"XI/5A+jeGX9yxrCoAAAAAElFTkSuQmCC"

if(check != buf.toBase64()){
	console.log("TEST FAILED");
	process.exit(-1)
}
console.log("TEST SUCCEEDED");
	

