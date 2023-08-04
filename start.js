// Начинаю заниматься по Новому JS-курсу Димыча "Переход на ООП"
// 31/07/23

function Start() {
  this.buttonStart = null;

  this.start = function () {

    let buttonsClick = this;

    this.buttonStart = document.querySelector('.buttons');

    function onButtonClick(event) {
        buttonsClick.onButtonStartClick(event);
    }

    this.buttonStart.addEventListener('click', onButtonClick);
  };

  this.onButtonStartClick = function () {
    window.alert('Hi');
  }
  
}

// let buttonStart1 = document.querySelectorAll('.buttons');    НЕ рабочий К.


// let buttonStart1 = document.querySelector('.buttons');

// buttonStart1.addEventListener('click', onButtonStartClick);

// function onButtonStartClick() {
//   window.alert('Hi');
// }
