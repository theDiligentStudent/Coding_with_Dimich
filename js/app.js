// Начинаю заниматься по Новому JS-курсу Димыча "Переход на ООП"
// 31/07/23          4/08/23         5/08/23      7/08/23
    //  8/08/23       10/08/23

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
 

  // Модернизирую Ф.-ю для имитации в какой-то момент времени -- остановки Машины -- из-за остановки её Двигателя

Car.prototype.onButtonStartClick = function () {
  // window.alert('Hi');
  let fiftyFifty = Math.random();
  if(fiftyFifty > 0.5) {
    // Теперь -- так, как учит Димыч -- меняю все alert-ы на console.log
    //   т.к. Димыч говорит, что Программеры всегда в таких случаях используют только console.log
    console.log('The car started up. The car drove off.');
    console.log('waiting for an accident');
    function carCrashed() {
      console.log('sudden engine stop');
      }
        //  Две строчки Ниже -- две Равнозначные команды     поэтому одну из них я  закомментировал
      // window.setTimeout(carCrashed, 5000);
      setTimeout(carCrashed, 5000);
  } else {
    console.log('Something went wrong.');
  }
};





 