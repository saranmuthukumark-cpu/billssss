function calculate() {
  const billEl = parseFloat(document.getElementById("bill").value) || 0;
  const peopleEl = parseInt(document.getElementById("number").value) || 1;
  const taxEl = parseFloat(document.getElementById("tax").value) || 0;
  const tipsEl = parseFloat(document.getElementById("tips").value) || 0;

  const taxAmount = (billEl * taxEl) / 100;
  const tipsAmount = (billEl * tipsEl) / 100;
  const totalAmount = taxAmount + tipsAmount + billEl;
  const perPerson = totalAmount / peopleEl;

  document.getElementById("subtotal").textContent = `₹${billEl.toFixed(2)}`;
  document.getElementById("tax-amount").textContent =
    `₹${taxAmount.toFixed(2)}`;
  document.getElementById("tips-amount").textContent =
    `₹${tipsAmount.toFixed(2)}`;
  document.getElementById("total-amount").textContent =
    `₹${totalAmount.toFixed(2)}`;
  document.getElementById("per-person-amount").textContent =
    `₹${perPerson.toFixed(2)}`;
  document.getElementById("per-person").textContent = peopleEl;
}

function decreasePeople() {
  const peopleEl = document.getElementById("number");
  peopleEl.value = parseInt(peopleEl.value) - 1;
  calculate();
}

function increasePeople() {
  const peopleEl = document.getElementById("number");
  peopleEl.value = parseInt(peopleEl.value) + 1;
  calculate();
}

function updateTax() {
  const taxEl = document.getElementById("tax").value;
  document.getElementById("tax-per").textContent = `${taxEl}%`;
  calculate();
}

function updateTips() {
  const tipsEl = document.getElementById("tips").value;
  document.getElementById("tips-per").textContent = `${tipsEl}%`;
  calculate();
}

function reset() {
  document.getElementById("bill").value = "";
  document.getElementById("number").value = 2;
  document.getElementById("tax").value = 8;
  document.getElementById("tips").value = 10;

  document.getElementById("tax-per").innerText = "8%";
  document.getElementById("tips-per").innerText = "10%";

  calculate();
}
calculate();