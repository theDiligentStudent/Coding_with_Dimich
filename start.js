// Начинаю заниматься по Новому JS-курсу Димыча "Переход на ООП"
// 31/07/23

function Start() {
  this.buttonStart = null;

  this.start = function () {

    let buttonsClick = this;

    this.buttonStart1 = document.querySelector('#button_car_1');
    this.buttonStart2 = document.querySelector('#button_car_2');


    function onButton1Click(event) {
        buttonsClick.onButtonStart1Click(event);
    }
    function onButton2Click(event) {
        buttonsClick.onButtonStart2Click(event);
    }

    this.buttonStart1.addEventListener('click', onButton1Click);
    this.buttonStart2.addEventListener('click', onButton2Click);
  };

  this.onButtonStart1Click = function () {
    window.alert('Hi');
  }
  this.onButtonStart2Click = function () {
    window.alert('Hello');
  }
  
}

// let buttonStart1 = document.querySelectorAll('.buttons');    НЕ рабочий К.


// let buttonStart1 = document.querySelector('.buttons');

// buttonStart1.addEventListener('click', onButtonStartClick);

// function onButtonStartClick() {
//   window.alert('Hi');
// }
