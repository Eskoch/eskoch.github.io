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
  }
  return shooters;
}
let army = makeArmy();
army[0]();
