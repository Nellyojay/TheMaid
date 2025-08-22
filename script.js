document.getElementById("paymentForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = {};
  formData.forEach((value, key) => data[key] = value);

  const timeoutId = document.querySelector('.js-submit-btn')
  
  timeoutId.innerHTML = 'Submitting...'
  setTimeout(() => {
    timeoutId.innerHTML = 'Submited'
  }, 5000);

  fetch("https://script.google.com/macros/s/AKfycbzv7vh59rSS_qcSbA3fJg7LcNuz7aP3___7gdZKOaeDc3ZoqiWj0U_fua41zKhjMqnY/exec", {
    method: "POST",
    mode: "no-cors",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
}).then(() => {
    document.getElementById("statusMessage").innerText = "✅ Thank you! Your response has been recorded. If you would like to say or ask more, contact us on the contact info below.";
    alert('✅ Thank you! Your response has been recorded. If you would like to say or ask more, contact us on the contact info below.')
    this.reset();
}).catch(() => {
    document.getElementById("statusMessage").innerText = "❌ Something went wrong. Please try again.";
});
});
