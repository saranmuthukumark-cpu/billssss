function UpdateTax() {
  const tax = document.getElementById("tax").value;
  document.getElementById("tax-label").textContent = tax + "%";
  calculate();
}

//
function UpdateTip() {
  const tip = document.getElementById("tip").value;
  document.getElementById("tip-label").textContent = tip + "%";
  calculate();
}
//
function increasePeople() {
  const peopleInput = document.getElementById("people");
  peopleInput.value = parseInt(peopleInput.value) + 1;
  calculate();
}
//
function decreasePeople() {
  const peopleInput = document.getElementById("people");

  if (parseInt(peopleInput.value)) {
    peopleInput.value = parseInt(peopleInput.value) - 1;
    calculate();
  }
}

function restCalculator() {
  document.getElementById("bill").value = "";
  document.getElementById("tip").value = 10;
  document.getElementById("tax").value = 8;
  document.getElementById("people").value = 2;

  document.getElementById("tip-label").textContent = "8%";
  document.getElementById("tax-label").textContent = "10%";

  calculate();
}

function calculate() {
  const bill = parseFloat(document.getElementById("bill").value) || 0;
  const tax = parseFloat(document.getElementById("tax").value) || 0;
  const people = parseInt(document.getElementById("people").value) || 1;
  const tip = parseFloat(document.getElementById("tip").value) || 0;

  const taxAmount = (bill * tax) / 100;

  const tipAmount = (bill * tip) / 100;

  const total = taxAmount + tipAmount + bill;

  const PerPerson = total / people;

  document.getElementById("sub-total").textContent = `₹${bill.toFixed(2)}`;
  document.getElementById("tipAmount").textContent = `₹${tipAmount.toFixed(2)}`;
  document.getElementById("taxAmount").textContent = `₹${taxAmount.toFixed(2)}`;
  document.getElementById("PerPerson").textContent = `₹${PerPerson.toFixed(2)}`;
  document.getElementById("total").textContent = `₹${total.toFixed(2)}`;
  document.getElementById("count").textContent = people;
}

calculate();
