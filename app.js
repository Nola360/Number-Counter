//Target Variables
let counter = document.querySelector('.counter');
const addCount = document.querySelector('#addCountButton');
const subtractCount = document.querySelector('#subtractCountButton');
const reset = document.querySelector('#resetButton');

//Default Value
let count = 0;

//Event Listeners
addCount.addEventListener('click', incrementCounter);
subtractCount.addEventListener('click', decrementCounter);
reset.addEventListener('click', resetCounter);

//Adding function
function incrementCounter() {
  count++;
  counter.innerHTML = count;
  if (counter.innerHTML > '0') {
    counter.style.color = '#4caf50'
  } else if (counter.innerHTML === '0') {
    counter.style.color = 'white';
  }
  counter.animate([{ opacity: '0.2' }, { opacity: '1' }], { duration: 200, fill: 'forwards' });
}

//Subtracting Function
function decrementCounter() {
  count--;
  counter.innerHTML = count;
  if (counter.innerHTML < '0') {
    counter.style.color = 'red'
  } else if (counter.innerHTML === '0') {
    counter.style.color = 'white';
  }
  counter.animate([{ opacity: '0.5' }, { opacity: '1' }], { duration: 200, fill: 'forwards' });
}

//Reset Function
function resetCounter() {
  count = 0;
  counter.innerHTML = count;
  counter.style.color = 'white';
  counter.animate([{ opacity: '0.5' }, { opacity: '1' }], { duration: 500, fill: 'forwards' });

}

