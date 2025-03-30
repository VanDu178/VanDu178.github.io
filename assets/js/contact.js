(function () {
  emailjs.init("pO2r_hdYdxHPQ0aKw");
})();

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function showNotification(message, isSuccess) {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.className = "notification show" + (isSuccess ? " success" : "");
  setTimeout(() => {
    notification.className = "notification";
  }, 3000);
}

function sendEmail(event) {
  event.preventDefault(); // Prevent page reload (Prevent default behavior of the form, it mean prevent submit form by get method)

  let params = {
    user_name: document.getElementById("name").value,
    user_email: document.getElementById("email").value,
    user_subject: document.getElementById("subject").value,
    user_message: document.getElementById("message").value,
  };

  if (!validateEmail(params.user_email)) {
    showNotification("Please enter a valid email address.", false);
    return;
  }

  emailjs
    .send("service_a29yljs", "template_7hp7dzv", params)
    .then((response) => {
      showNotification("Email sent successfully!", true);
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      showNotification("Failed to send email.", false);
    });
}
