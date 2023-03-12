var example = {};

example.rotate = function (context) {
  context.save();
  context.beginPath();
  context.rotate((10 * Math.PI) / 180);
  context.rect(225, 75, 20, 10);
  context.fillStyle = "#ff5500";
  context.fill();
  context.restore();
};

example.scale = function (context) {
  context.save();
  context.beginPath();
  context.strokeStyle = "#ff5500";
  context.rect(25, 25, 50, 50);
  context.stroke();

  context.scale(2, 2);

  context.beginPath();
  context.rect(25, 25, 50, 50);
  context.stroke();
  context.restore();
};

example.reset = function (context) {
  context.save();
  context.beginPath();

  context.fillStylee = "#ff5500";
  context.strokeStyle = "#ff5500";
  context.font = "10px Arial";

  context.shadowOffsetX = 0;
  context.shadowOffsetY = 0;
  context.shadowBlur = 0;
  context.shadowColor = "rgba(0, 0, 0, 0)";

  context.lineCap = "butt";
  context.lineJoin = "miter";
  context.lineWidth = 1;
  context.miterLimit = 10;
  context.restore();
};

example.translate = function (context) {
  context.save();
  context.beginPath();
  context.fillStyle = "#ff5500";
  context.rect(10, 10, 100, 50);
  context.fill();

  context.translate(70, 70);

  context.beginPath();
  context.fill();
  context.restore();
};

example.save = function (context) {
  context.save();
  context.beginPath();
  context.strokeStyle = "#ff5500";
  context.save();

  context.scale(2, 2);
  context.strokeStyle = "#ff5500";
  context.rect(0, 0, 100, 100);
  context.stroke();
  context.restore();

  context.rect(0, 0, 50, 50);
  context.stroke();
  context.restore();
};

example.restore = function (context) {
  context.save();
  [3, 2, 1].forEach(function (item) {
    context.beginPath();
    context.strokeStyle = "#ff5500";
    context.save();
    context.scale(item, item);
    context.rect(10, 10, 100, 100);
    context.stroke();
    context.restore();
  });
  context.restore();
};

example.drawImage = function (context, canvas) {
  context.save();
  //example.rotate(context);
  const img = canvas.createImage();
  img.onload = function () {
    context.drawImage(img, 0, 0);
    //example.fillText(context);
    context.restore();
  };
  img.src = "/image/ant.png";
};

example.fillText = function (context) {
  context.save();
  context.beginPath();
  context.strokeStyle = "#ff5500";
  context.moveTo(0, 10);
  context.lineTo(300, 10);
  context.stroke();

  // context.save();
  // context.scale(1.5, 1.5);
  // context.translate(20, 20);
  context.font = "10px Arial";
  context.fillText("Hello Alipay", 0, 30);
  context.font = "20px Arial";
  context.fillText("Hello Alipay", 200, 30);

  // context.restore();

  context.beginPath();
  context.moveTo(0, 30);
  context.lineTo(300, 30);
  context.stroke();
  context.restore();
};

example.fill = function (context) {
  context.save();
  context.beginPath();
  context.fillStyle = "#ff5500";
  context.rect(20, 20, 150, 100);
  context.fill();
  context.restore();
};

example.stroke = function (context) {
  context.save();
  context.beginPath();
  context.strokeStyle = "#ff5500";
  context.moveTo(20, 20);
  context.lineTo(20, 100);
  context.lineTo(70, 100);

  context.stroke();
  context.restore();
};

example.clearRect = function (context) {
  context.save();
  context.beginPath();
  context.fillStyle = "#ff5500";
  context.rect(0, 0, 300, 150);
  context.fill();
  context.clearRect(20, 20, 100, 50);
  context.restore();
};

example.beginPath = function (context) {
  context.save();
  context.beginPath();
  context.lineWidth = 5;
  context.strokeStyle = "#ff5500";
  context.moveTo(0, 75);
  context.lineTo(250, 75);
  context.stroke();

  context.beginPath();
  context.strokeStyle = "#ff5500";
  context.moveTo(50, 0);
  context.lineTo(150, 130);
  context.stroke();
  context.restore();
};

example.closePath = function (context) {
  context.save();
  context.beginPath();
  context.strokeStyle = "#ff5500";
  context.moveTo(20, 20);
  context.lineTo(20, 100);
  context.lineTo(70, 100);
  context.closePath();
  context.stroke();
  context.restore();
};

example.moveTo = function (context) {
  context.save();
  context.beginPath();
  context.strokeStyle = "#ff5500";
  context.moveTo(0, 0);
  context.lineTo(300, 150);
  context.stroke();
  context.restore();
};

example.lineTo = function (context) {
  context.save();
  context.beginPath();
  context.strokeStyle = "#ff5500";
  context.moveTo(20, 20);
  context.lineTo(20, 100);
  context.lineTo(70, 100);
  context.stroke();
  context.restore();
};

example.rect = function (context) {
  context.save();
  context.beginPath();
  context.strokeStyle = "#ff5500";
  context.rect(20, 20, 150, 100);
  context.stroke();
  context.restore();
};

example.arc = function (context) {
  context.save();
  context.beginPath();
  context.strokeStyle = "#ff5500";
  context.arc(75, 75, 50, 0, Math.PI * 2, true);
  context.moveTo(110, 75);
  context.arc(75, 75, 35, 0, Math.PI, false);
  context.moveTo(65, 65);
  context.arc(60, 65, 5, 0, Math.PI * 2, true);
  context.moveTo(95, 65);
  context.arc(90, 65, 5, 0, Math.PI * 2, true);
  context.stroke();
  context.restore();
};

example.quadraticCurveTo = function (context) {
  context.save();
  context.beginPath();
  context.strokeStyle = "#ff5500";
  context.moveTo(20, 20);
  context.quadraticCurveTo(20, 100, 200, 20);
  context.stroke();
  context.restore();
};

example.bezierCurveTo = function (context) {
  context.save();
  context.beginPath();
  context.strokeStyle = "#ff5500";
  context.moveTo(20, 20);
  context.bezierCurveTo(20, 100, 200, 100, 200, 20);
  context.stroke();
  context.restore();
};

example.fillStyle = function (context) {
  context.save();
  [
    "rgb(183, 218, 243)",
    "rgb(39, 156, 240)",
    "rgb(67, 168, 240)",
    "rgb(119, 194, 247)",
  ].forEach(function (item, index) {
    context.fillStyle = item;
    context.beginPath();
    context.rect(0 + 75 * index, 0, 50, 50);
    context.fill();
  });
  context.restore();
};

example.gradient = function (ctx) {
  ctx.save();
  const grd = ctx.createRadialGradient(90, 60, 0, 90, 60, 50);
  grd.addColorStop(0, "blue");
  grd.addColorStop(1, "red");
  ctx.fillStyle = grd;
  ctx.fillRect(20, 20, 250, 180);
  ctx.restore();
};

example.createPattern = function (ctx, canvas) {
  ctx.save();

  const img = canvas.createImage();
  img.onload = function () {
    const grd = ctx.createPattern(img, "repeat");
    ctx.fillStyle = grd;
    ctx.fillRect(20, 20, 250, 180);
    ctx.restore();
  };
  img.src =
    "https://gw.alipayobjects.com/zos/rmsportal/CuyuyNQuuJvOYOsYvPYd.png";
};

example.strokeStyle = function (context) {
  context.save();
  [
    "rgb(183, 218, 243)",
    "rgb(39, 156, 240)",
    "rgb(67, 168, 240)",
    "rgb(119, 194, 247)",
  ].forEach(function (item, index) {
    context.strokeStyle = item;
    context.beginPath();
    context.rect(0 + 75 * index, 0, 50, 50);
    context.stroke();
  });
  context.restore();
};

example.globalAlpha = function (context) {
  context.save();
  context.fillStyle = "#ff5500";
  [1, 0.5, 0.1].forEach(function (item, index) {
    context.globalAlpha = item;
    context.beginPath();
    context.rect(0 + 75 * index, 0, 50, 50);
    context.fill();
  });
  context.restore();
};

example.shadow = function (context) {
  context.save();
  context.beginPath();
  context.fillStyle = "#ff5500";
  context.shadowOffsetX = 10;
  context.shadowOffsetY = 10;
  context.shadowBlur = 10;
  context.shadowColor = "rgb(183, 218, 243)";
  context.rect(10, 10, 100, 100);
  context.fill();
  context.restore();
};

example.fontSize = function (context) {
  context.save();
  [10, 20, 30, 40].forEach(function (item, index) {
    context.font = item + " Arial";
    context.fillText("Hello, world", 20, 20 + 40 * index);
  });
  context.restore();
};

example.lineCap = function (context) {
  context.save();
  context.lineWidth = 10;
  ["butt", "round", "square"].forEach(function (item, index) {
    context.beginPath();
    context.strokeStyle = "#ff5500";
    context.lineCap = item;
    context.moveTo(20, 20 + 20 * index);
    context.lineTo(100, 20 + 20 * index);
    context.stroke();
  });
  context.restore();
};

example.lineJoin = function (context) {
  context.save();
  context.lineWidth = 10;
  ["bevel", "round", "miter"].forEach(function (item, index) {
    context.beginPath();
    context.strokeStyle = "#ff5500";
    context.lineJoin = item;
    context.moveTo(20 + 80 * index, 20);
    context.lineTo(100 + 80 * index, 50);
    context.lineTo(20 + 80 * index, 100);
    context.stroke();
  });
  context.restore();
};

example.lineWidth = function (context) {
  context.save();
  [2, 4, 6, 8, 10].forEach(function (item, index) {
    context.beginPath();
    context.strokeStyle = "#ff5500";
    context.lineWidth = item;
    context.moveTo(20, 20 + 20 * index);
    context.lineTo(100, 20 + 20 * index);
    context.stroke();
  });
  context.restore();
};

example.miterLimit = function (context) {
  context.save();
  context.lineWidth = 4;

  [2, 4, 6, 8, 10].forEach(function (item, index) {
    context.beginPath();
    context.strokeStyle = "#ff5500";
    context.miterLimit = item;
    context.moveTo(20 + 80 * index, 20);
    context.lineTo(100 + 80 * index, 50);
    context.lineTo(20 + 80 * index, 100);
    context.stroke();
  });
  context.restore();
};

example.measureText = function (context) {
  context.save();
  context.font = "italic bold 50px cursive";
  const { width } = context.measureText("hello world");
  console.log(width);
  context.fillText("hello world", 20, 60);
  context.restore();
};

example.lineDash = function (context) {
  context.save();

  context.setLineDash([10, 20], 5);
  context.beginPath();
  context.moveTo(0, 100);
  context.lineTo(400, 100);
  context.stroke();

  context.restore();
};

export default example;
