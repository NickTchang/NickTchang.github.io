
let total = 0;

let prices = {
  ItemA: 1,
  ItemB: 2,
  ItemC: 3,
  ItemD: 5.50
}

let count = {
  ItemA: 0,
  ItemB: 0,
  ItemC: 0,
  ItemD: 0
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
