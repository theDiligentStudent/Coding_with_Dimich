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
  let fiftyFifty = Math.random();
  if (fiftyFifty > 0.5) {
    // Теперь -- так, как учит Димыч -- меняю все alert-ы на console.log
    //   т.к. Димыч говорит, что Программеры всегда в таких случаях используют только console.log
    console.log('The car started up. The car drove off.');

    this.buttonStart.classList.add('hide');
    
// this.buttonStart.disabled = true;    
// Так, как было в курсе Димыча "ваще с нуля" --- здесь уже этот способ НЕ работает......

    function carCrashed() {
      console.log('sudden engine stop');
      this.buttonStart.classList.remove('hide');


      // this.buttonStart.disabled = false;  
    }
    //  Две строчки Ниже -- две Равнозначные команды     поэтому одну из них я  закомментировал
    // window.setTimeout(carCrashed, 5000);
    setTimeout(carCrashed, 5000);

// this.buttonStart.disabled = false;     Так, как было в курсе Димыча "ваще с нуля" --- здесь уже этот способ НЕ работает......

    // Переместил строчку К.-а ниже из положения Перед Ф.-ей setTimeout, поставил её Позади setTimeout.
    console.log('waiting for an accident');

  } else {
    console.log('Something went wrong.');
  }
};
