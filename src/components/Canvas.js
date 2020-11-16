import React, {useRef, useEffect, useCallback } from 'react';


const Canvas = ({ width, height }) => {

    const canvasRef = useRef(null);
    
    //credits for the moving stars js code to https://ashik-starfield.glitch.me/
    const drawStars = useCallback(ctx => {
        class Star {
            constructor() {
              //initializing
              this.x = Math.random()*width-width/2;  //random x
              this.y = Math.random()*height-height/2; //random y
              this.px = null;
              this.py = null;
              this.z = Math.random()*4; //random z    
            }
            
            update() {
              //stores previous x, y and z and generates new coordinates    
              this.px = this.x;
              this.py = this.y;
              this.z += speed;
              this.x += this.x*(speed*0.2)*this.z;
              this.y += this.y*(speed*0.2)*this.z;
              if (this.x > width/2+50 || this.x < -width/2-50 ||
                  this.y > height/2+50 || this.y < -height/2-50) {
                this.x = Math.random()*width-width/2;
                this.y = Math.random()*height-height/2;
                this.px = this.x;
                this.py = this.y;
                this.z = 0;
              }
            }
            
            //draws line from x,y to px,py
            show() {    
              ctx.lineWidth = this.z;
              ctx.beginPath();
              ctx.moveTo(this.x, this.y);
              ctx.lineTo(this.px, this.py);
              ctx.stroke();
            }
          }
          
          let speed = 0.01;
          let stars = [];
          
          //create 200 stars (objects)
          for (let i = 0; i < 200; i++) stars.push(new Star());
          
          ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
          ctx.strokeStyle = 'rgb(255,255,255)';
          
          ctx.translate(width/2, height/2);
          
          function draw() {

           
            //create rectangle
            ctx.fillRect(-width/2, -height/2, width, height);
            for (let s of stars) {
              s.update();
              s.show();
            }
            //infinte call to draw
            requestAnimationFrame(draw);

    }
    draw();
    }, [width, height]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
       
        drawStars(context);
       
      }, [drawStars]);
      
      return <canvas ref={canvasRef} width={width} height={height} />
    }



export default Canvas;