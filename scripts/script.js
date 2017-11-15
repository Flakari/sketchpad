console.log("Javascript is functional");
console.log(16 * 16);

const titleDensity = 2;
let pixelDensity = 40;
let pixelPrompt = 1;


$(document).ready(function() {
  //Sketch pad creation function
  (function pixelChange() {
    for (let i = 0; i < (pixelDensity * pixelDensity); i++) {
      $('#sketchpad').append("<div class='sketchpad-pixel'></div>");
    }

    $('.sketchpad-pixel').css({"width": "calc(100% / " + pixelDensity + ")", "height": "calc(100% / " + pixelDensity + ")"});
  }());

    $('#canvas-size').click(function() {
      pixelPrompt = prompt("Please specify # of pixels desired horizontally and vertically. (Choose 1-100)");

      if (pixelPrompt > 100 || pixelPrompt < 1) {
        alert("Must be between 1-100.")
      } else {
        pixelDensity = pixelPrompt;
        $('.sketchpad-pixel').remove();

        (function pixelChange() {
          for (let i = 0; i < (pixelDensity * pixelDensity); i++) {
            $('#sketchpad').append("<div class='sketchpad-pixel'></div>");
          }

          $('.sketchpad-pixel').css({"width": "calc(100% / " + pixelDensity + ")", "height": "calc(100% / " + pixelDensity + ")"});
            pixelColor = blackPixel();
        }());
        console.log(pixelDensity);
      }
    });

    $('.sketchpad-pixel').on('mouseenter', function() {
      pixelColor;
    });

  function rainbowPixel() {
    function rgbRandom() {
      return Math.floor(Math.random()*256);
    }

    $('.sketchpad-pixel').on('mouseenter', function() {
      $(this).css({'background-color': 'rgb(' + rgbRandom() + ',' + rgbRandom() + ',' + rgbRandom() + ')'})
    });
  }

  function redPixel() {
    $('.sketchpad-pixel').on('mouseenter', function() {
      $(this).css({'background-color': 'rgb(255,0,0)'});
    })
  }

  function bluePixel() {
    $('.sketchpad-pixel').on('mouseenter', function() {
      $(this).css({'background-color': 'rgb(0,0,255)'});
    })
  }

  function greenPixel() {
    $('.sketchpad-pixel').on('mouseenter', function() {
      $(this).css({'background-color': 'rgb(0,225,0)'});
    })
  }

  function blackPixel() {
    $('.sketchpad-pixel').on('mouseenter', function() {
      $(this).css({'background-color': 'black'});
    })
  }

  let pixelColor = blackPixel();

  $('#black-pixel').click(function() {
    pixelColor = blackPixel();
  });

  $('#rainbow').click(function() {
    pixelColor = rainbowPixel();
  });

  $('#red-pixel').click(function() {
    pixelColor = redPixel();
  })

  $('#blue-pixel').click(function() {
    pixelColor = bluePixel();
  })

  $('#green-pixel').click(function() {
    pixelColor = greenPixel();
  })

  $('#clear').click(function() {
    $('.sketchpad-pixel').css({'background-color': '#e6e6e6'});
  })
});
