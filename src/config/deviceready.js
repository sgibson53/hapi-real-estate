// import FastClick from 'fastclick';
import {formatCashAmt} from './utilities';
import noUiSlider from './nouislider.min.js';


var local = false;

// while (typeof document == 'undefined') {
//   setTimeout(function() {
//     console.log("waiting for client side..");
//   }, 200);
// }

if (typeof document != 'undefined') {
// document.addEventListener('deviceready', function() {
    $(function() {


    console.log("document ready");
    var slider = document.getElementById('home-price-slider');
    console.log(slider);

    noUiSlider.create(slider, {
  	start: [50000],
  	range: {
  		'min': [100000, 1000],
      '50%': [200000, 10000],
      '60%': [500000, 50000],
  		'max': [3500000]
  	},
  });

  var slideValue = 100000,
      comissionValue = 3000,
      totalComission = 6000,
      saveValue= 500,
      totalSave = 1000;

  slider.noUiSlider.on('update', function() {
    var ui = slider.noUiSlider.get();
      var formattedArr = [ui, ui*0.03, ui*0.03*2, ui*0.03-2500, ui*0.03*2-5000, ];
      formatCashAmt(formattedArr);

      slideValue = formattedArr[0];

      // remove trailing ',.00'
      console.log(slideValue);
      slideValue = slideValue.toString();
      console.log(slideValue);
      slideValue = slideValue.substring(0, slideValue.length-3);
      console.log(slideValue);
      if (slideValue.charAt(slideValue.length-1) == ',') {
        slideValue = slideValue.substring(0, slideValue.length-1);
      }
      console.log(slideValue);

      comissionValue = formattedArr[1];
      totalComission = formattedArr[2];
      saveValue = formattedArr[3];
      totalSave = formattedArr[4];

      console.log(formattedArr);
      $('#slider-value-display').replaceWith('<span id="slider-value-display">'+slideValue+'</span>');
      $('#slider-label').replaceWith('<span id="slider-label">'+slideValue+'</span>');
      $('#total-com-cost').replaceWith('<span id="total-com-cost">'+slideValue+'</span>');
      $('.comission').replaceWith('<span class="comission">'+comissionValue+'</span>');
      $('#totalComission').replaceWith('<span id="totalComission">'+totalComission+'</span>');
      $('.saveValue').replaceWith('<span class="saveValue">'+saveValue+'</span>');
      $('#totalSavings').replaceWith('<span id="totalSavings">'+totalSave+'</span>');
  });
    // FastClick.attach(document.body);

});
} else {
  console.log("deviceready not executed, on the server");
}
