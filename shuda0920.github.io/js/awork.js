let toggle=0;
const toggleColor=6;
function setup() {
    createCanvas(500, 800);
    colorMode(HSB, 360, 100, 100, 1);
    background(225);
    angleMode(DEGREES);
    
    push();
    fill(225,0,0);
    buttonSubmit = createButton("重製");
    buttonSubmit.position(850, 50);
    buttonSubmit.mousePressed(clean);
    pop();
  }
  
  function drawflower() {
    x0=random(10,40);
    x1=random(40,70);
    y1=random(50,90);
    if (mouseIsPressed) {     
      let rd = floor(random(3, 11));
      for(let u=0; u<rd; u++){
        for (let i = 0; i < rd; i++) {
          let j = 360 / rd;
          fill(toggle*360/toggleColor,100,100,0.1);
          stroke(50,100,100,0.1);

          push(); // 保存當前的變換狀態
          translate(mouseX,mouseY);
          rotate(i*j);
          ellipse(x0, x1, x0, y1);
          pop(); // 恢復先前的變換狀態
        }
        x0=x0-5;
        x1=x1-10;
        y1=y1-12;
      }
      
    }
  }
  
  function draw() {

    if(mouseIsPressed==true){
      rotate_speed=20;
      drawflower();
      toggle=(toggle+20)%toggleColor;
    }
    else{
      rotate_speed=0;

    }
    
    
  }

  function clean() {
    background(0); // 在鼠标点击时重新绘制画布
  }