var cardSourceWidth = 238;
var cardSourceHeight = 333;
var cardScale = 2;
var cardWidth = cardSourceWidth * cardScale;
var cardHeight = cardSourceHeight * cardScale;
var iconWidth = 320;
var iconHeight = 320;
var iconOffsetX = (cardWidth - iconWidth) / 2;
var iconOffsetY = (cardHeight - iconHeight) / 2;

window.addEventListener("load", function () {
  var canvas = document.getElementById("kemono_trump");
  canvas.width = cardWidth;
  canvas.height = cardHeight;
  var context = canvas.getContext("2d");

  var cardImage = new Image(cardSourceWidth, cardSourceHeight);
  cardImage.src = 'resources/card/c01.svg';
  var iconImage = new Image(iconWidth, iconHeight);
  iconImage.src = 'resources/icon/sa-baru.jpg';

  context.scale(cardScale, cardScale);
  context.drawImage(cardImage, 0, 0);
  context.scale(1 / cardScale, 1 / cardScale);
  context.drawImage(iconImage, iconOffsetX, iconOffsetY);
}, false);
