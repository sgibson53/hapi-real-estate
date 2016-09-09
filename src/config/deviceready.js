// import FastClick from 'fastclick';
import {formatCashAmt} from './utilities';

var local = false;

if (local) {
  localReady();
} else {
  ready();
}

function ready() {
  // FastClick.attach(document.body);

  // $('.slider').slider({
  //   min: 100000,
  //   max: 3000000,
  //   step: 25000,
  //   slide: function(event, ui) {
  //
  //   }
  // });
  //
  // console.log($('slider'));
  //
  // var slideValue = 100000,
  //     comissionValue = 3000,
  //     totalComission = 6000,
  //     saveValue= 500,
  //     totalSave = 1000;
  // $('.ui-slider-handle').append('<span id="slider-label">100,000</span>');
  //
  // $('.slider').on("slide", function(event, ui) {
  //   var formattedArr = [ui.value, ui.value*0.03, ui.value*0.03*2, ui.value*0.03-2500, ui.value*0.03*2-5000, ];
  //   formatCashAmt(formattedArr);
  //
  //   slideValue = formattedArr[0];
  //   comissionValue = formattedArr[1];
  //   totalComission = formattedArr[2];
  //   saveValue = formattedArr[3];
  //   totalSave = formattedArr[4],
  //
  //   console.log(formattedArr);
  //   $('#slider-label').replaceWith('<span id="slider-label">'+slideValue+'</span>');
  //   $('#total-com-cost').replaceWith('<span id="total-com-cost">'+slideValue+'</span>');
  //   $('.comission').replaceWith('<span class="comission">'+comissionValue+'</span>');
  //   $('#totalComission').replaceWith('<span id="totalComission">'+totalComission+'</span>');
  //   $('.saveValue').replaceWith('<span class="saveValue">'+saveValue+'</span>');
  //   $('#totalSavings').replaceWith('<span id="totalSavings">'+totalSave+'</span>');
  // });
}

function localReady() {

}
