console.log("Javascript is functional");
console.log(16 * 16);

const titleDensity = 36;
let pixelDensity = 16;
let pixelPrompt = 1;
let sketchpad = document.querySelector('#sketchpad');
let title = document.querySelector('#title');

window.onload = function() {
  pixelChange();
  titleChange();
}

function pixelChange() {
  for (let i = 0; i < (pixelDensity * pixelDensity); i++) {
    let sketchpadPixel = document.createElement('div');
    sketchpadPixel.classList.add('sketchpad-pixel');
    sketchpad.appendChild(sketchpadPixel);

    sketchpadPixel.style.cssText = 'width: calc(100% / ' + pixelDensity + '); height: calc(100% / ' + pixelDensity + ')';
  }
  let sketchpadPixel = document.querySelectorAll('.sketchpad-pixel');
  console.log(sketchpadPixel);
  let pixelColor = blackPixel();

  sketchpadPixel.forEach(square => {
    square.addEventListener('mouseenter', function(e) {
      e.target.style.backgroundColor = pixelColor;
    });
  });
}

//Title container creation function
function titleChange() {
  for (let i = 0; i < (titleDensity * 5); i++) {
    let titlePixel = document.createElement('div');
    titlePixel.classList.add('title-pixel');
    title.appendChild(titlePixel);
  }
}

/*
//Title creation function
(function writeTitle() {
  let arr = [0,1,2,4,6,8,9,10,12,13,14,16,17,18,20,22,25,26,27,29,30,31,33,34,36,40,42,44,49,52,56,58,61,63,65,67,69,71,72,73,74,76,77,80,81,82,85,88,92,93,94,97,98,99,101,102,103,105,107,110,112,114,116,121,124,128,130,133,137,139,141,143,144,145,146,148,150,152,153,154,157,160,161,162,164,166,169,173,175,177,178];

  let elem = $('.title-pixel');

  for (let i = 0; i < arr.length; i++) {
    j = arr[i];
    $(elem[j]).css({'background-color': 'black'});
  }
}());

  $('.title-pixel').on('mouseenter', function() {
    $(this).addClass('hidden');
  });

  $('#title-reset').click(function() {
    $('.title-pixel').removeClass('hidden');
  });

  $('#title-button').on('mouseenter', function() {
      $('#title-reset').removeClass('hidden');
    });

  $('#title-button').on('mouseleave', function() {
    $('#title-reset').addClass('hidden');
  });

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
      }());
      console.log(pixelDensity);
    }
  });
*/
/*let pixelColor = blackPixel();

sketchpadPixel.forEach(square => {
  square.addEventListener('mouseenter', function(e) {
    pixelColor;
    console.log(e.target);
  });
});


  $('.sketchpad-pixel').on('mouseenter', function() {
    pixelColor;

  function rainbowPixel() {
    function rgbRandom() {
      return Math.floor(Math.random()*256);
    }
    return 'rgb(' + rgbRandom() + ', ' + rgbRandom() + ', ' + rgbRandom() + ')'
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
*/
  function blackPixel() {
    return 'black';
  }
/*
  function greyPixel() {
    $('.sketchpad-pixel').on('mouseenter', function() {
      $(this).css({'background-color': '#e6e6e6'});
    })
  }
*/
/*
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
    pixelColor = greyPixel();
  })*/
