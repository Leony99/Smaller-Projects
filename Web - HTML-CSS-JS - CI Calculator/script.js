const inputs = document.querySelectorAll("input.input");
const radios = document.querySelectorAll("input.radio");

const finalOutput = document.querySelector("p.final");
const investedOutput = document.querySelector("p.invested");
const interestOutput = document.querySelector("p.interest");

const submitBtn = document.querySelector(".submitBtn");

submitBtn.addEventListener("click", function(e) {
    e.preventDefault();

    let initAmount = parseFloat(inputs[0].value);
    let montAmount = parseFloat(inputs[1].value);
    let interest = parseFloat(inputs[2].value) / 100;
    let months = parseFloat(inputs[3].value);

    const radioMonthly = radios[0].checked;
    const radioYearly = radios[1].checked;
    const radioMonths = radios[2].checked;
    const radioYears = radios[3].checked;

    const formatter = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"});

    if (radioYearly) {
        interest /= 12;
    }
    if (radioYears) {
        months *= 12;
    }

    const finalAmount = (initAmount * Math.pow(1 + interest, months)) + ((montAmount * (Math.pow(1 + interest, months) - 1)) / interest);
    const investedAmount = initAmount + (montAmount * months);
    const interestAmount = finalAmount - investedAmount;

    finalOutput.textContent = formatter.format(finalAmount);
    investedOutput.textContent = formatter.format(investedAmount);
    interestOutput.textContent = formatter.format(interestAmount);
});