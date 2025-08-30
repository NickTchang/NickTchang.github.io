
let total = 0;

let prices = {
  minif: 4,
  peking: 4,
  nud: 7,
  nudh: 9,
  hstreif: 8,
  softd: 2
}

let count = {
  minif: 0,
  peking: 0,
  nud: 0,
  nudh: 0,
  hstreif: 0,
  softd: 0
}


function addItem(button) {
  const itemName = button.id;
  count[itemName] += 1;
  update()
}

function clearTotal() {
  for (let key in count){
    count[key] = 0;
  }
  update()
}

function update(){
  let t = 0
  for (let [key, value] of Object.entries(count)){
    t += value * prices[key]
  }
  total = t
  document.getElementById("total").textContent = total.toFixed(2);
  const buttons = document.querySelectorAll('button')
  buttons.forEach((button) => {
    const itemName = button.id;
    button.querySelector('.count').textContent = count[itemName].toFixed(0);
    if (count[itemName] != 0){
      button.style.backgroundColor = "green";
    }else{
      button.style.backgroundColor = "";
    }
  })
}
