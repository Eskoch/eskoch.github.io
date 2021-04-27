// Qustion #1
function makeArmy() {
  let shooters = [];
  let i = 0;
  while (i < 2) {
    let j = i;
    let shooter = function() {
      alert(j);
    };
    shooters.push(shooter);
    i++;
    return shooter;
  }
  return shooters;
}
let army = makeArmy();
army([0]);

// Question #2
function printNumbers(n, m) {
    myTime = setInterval(function() {
      if(n >= m) {
        clearInterval(myTime);
      }
      console.log(n);
      n=n+1}, 1000);
}
printNumbers(1, 4);

// Quetion #3
/*For below function the scheduled function run after the loop finished and the alert will display 99999999 */
let i = 0;
setTimeout(() => alert (i), 100);
for(let j = 0; j < 100000; j++) {
  i++;
}
