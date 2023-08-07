// Начинаю заниматься по Новому JS-курсу Димыча "Переход на ООП"
// 31/07/23          4/08/23         5/08/23      7/08/23

function Car() {
  this.buttonStart = null;
}

Car.prototype.start = function (id) {
  let buttonsClick = this;

  let selectElement = '#' + id;

  this.buttonStart = document.querySelector(selectElement);

  function onButtonClick(event) {
    buttonsClick.onButtonStartClick(event);
  }

  this.buttonStart.addEventListener('click', onButtonClick);
};

Car.prototype.onButtonStartClick = function () {
  // window.alert('Hi');
  let fiftyFifty = Math.random();
  if(fiftyFifty > 0.5) {
    alert('the car haved started');
  } else {
    alert('Something Wrong');
  }
};

function innerHtml(evenObject) {
  let getCurrentTarget = evenObject.currentTarget;
  let getInner = getCurrentTarget.innerHtml;
  tapStart(getInner);
}
