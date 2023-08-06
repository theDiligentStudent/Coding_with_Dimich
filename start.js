// Начинаю заниматься по Новому JS-курсу Димыча "Переход на ООП"
// 31/07/23          4/08/23         5/08/23

function Start() {
  this.buttonStart = null;

  this.start = function (id) {
    let buttonsClick = this;

    // Делаю ОДИНАКОВЫЙ поиск для Двух разных Об.-в *Кнопок* по id из html-документа
    let selectElement = '#' + id;

    // прописываю для Эл.-а "Кнопка" - id
    this.buttonStart = document.querySelector(selectElement);
    // this.buttonStart2 = document.querySelector('#button_car_2');

    function onButtonClick(event) {
      buttonsClick.onButtonStartClick(event);
    }
    // function onButton2Click(event) {
    //     buttonsClick.onButtonStart2Click(event);
    // }

    this.buttonStart.addEventListener('click', onButtonClick);
    // this.buttonStart2.addEventListener('click', onButton2Click);
  };

  this.onButtonStartClick = function () {
    window.alert('Hi');
  };
  // this.onButtonStart2Click = function () {
  //   window.alert('Hello');
  // }
}

// let buttonStart1 = document.querySelectorAll('.buttons');    НЕ рабочий К.

// let buttonStart1 = document.querySelector('.buttons');

// buttonStart1.addEventListener('click', onButtonStartClick);

// function onButtonStartClick() {
//   window.alert('Hi');
// }
