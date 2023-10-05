var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var eyeSize = randomNumber(50, 10);
var earPos = randomNumber(130, 300);
var mouthCol = rgb(randomNumber(0, 300), randomNumber(0, 255), randomNumber(0, 98));
var hatPos = randomNumber(50, 350);
var noseCol = rgb(randomNumber(0, 400), randomNumber(100, 300), randomNumber(200, 342));
var hatCol = rgb(randomNumber(225, 300), randomNumber(100, 400), randomNumber(0, 232));
fill("grey");
rect(50, 100, 300, 300);
fill("red");
ellipse(125, 150, randomNumber(50, 75), randomNumber(50, 75));
ellipse(275, 150, randomNumber(50, 75), randomNumber(50, 75));
fill("black");
ellipse(125, 150, eyeSize, eyeSize);
ellipse(275, 150, eyeSize, eyeSize);
fill("yellow");
rect(350, earPos - 20, 50, 100);
rect(0, earPos + 40, 50, 100);
fill("white");
rect(100, 250, 150, 100);
fill(mouthCol);
rect(100, 250, 150, 100);
fill(hatCol);
ellipse(hatPos, 72, 270, 80);
regularPolygon(hatPos, 47, 5, 50);
fill(noseCol);
shape(200, 170, 250, 230, 150, 230);

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
