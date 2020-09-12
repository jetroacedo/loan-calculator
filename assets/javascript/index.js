
document.getElementById("loan-form").addEventListener("submit", computeResults);

function computeResults(e) {

  const UIamount = document.getElementById("amount").value;
  const UIinterest = document.getElementById("interest").value;
  const UIyears = document.getElementById("years").value;

  const principal = parseFloat(UIamount);
  const CalculateInterest = parseFloat(UIinterest) / 100 / 12;
  const calculatedPayments = parseFloat(UIyears) * 12;

  const x = Math.pow(1 + CalculateInterest, calculatedPayments);
  const monthly = (principal * x * CalculateInterest) / (x - 1);
  const monthlyPayment = monthly.toFixed(2);

  const totalInterest = (monthly * calculatedPayments - principal).toFixed(2);

  const totalPayment = (monthly * calculatedPayments).toFixed(2);

  document.getElementById("monthlyPayment").innerHTML = "&#8369;" + " " + monthlyPayment;

  document.getElementById("totalInterest").innerHTML = "&#8369;" + " " + totalInterest;

  document.getElementById("totalPayment").innerHTML = "&#8369;" + " " + totalPayment;

  e.preventDefault();
}
