import FastClick from 'fastclick';

var local = false;

if (local) {
  localReady();
} else {
  ready();
}

function ready() {
  FastClick.attach(document.body);
  svgeezy.init(false, 'png');
}

function localReady() {

}
