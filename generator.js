var cardSourceWidth = 238;
var cardSourceHeight = 333;
var cardScale = 2;
var cardWidth = cardSourceWidth * cardScale;
var cardHeight = cardSourceHeight * cardScale;
var iconWidth = 320;
var iconHeight = 320;
var iconOffsetX = (cardWidth - iconWidth) / 2;
var iconOffsetY = (cardHeight - iconHeight) / 2;

function drawCard(card, friends) {
  var canvas = document.getElementById("kemono_trump");
  canvas.width = cardWidth;
  canvas.height = cardHeight;
  var context = canvas.getContext("2d");

  var cardImage = new Image();
  var iconImage = new Image();

  cardImage.src = 'resources/card/' + card + '.svg';
  cardImage.addEventListener('load', function () {
    context.drawImage(cardImage, 0, 0, cardWidth, cardHeight);

    iconImage.src = 'resources/icon/' + friends + '.jpg';
    iconImage.addEventListener('load', function () {
      console.log('draw icon ' + iconImage.src);
      context.drawImage(iconImage, iconOffsetX, iconOffsetY);
    });
  });
}
