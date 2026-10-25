// Web3Forms access key: get one free at https://web3forms.com (no account
// needed, just an email address) and paste it below in place of the
// placeholder before this form will actually deliver submissions.
const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

(function () {
  const form = document.getElementById("quote-form");
  if (!form) return;

  const status = form.querySelector(".form-status");
  const submitBtn = form.querySelector('button[type="submit"]');
  const badge = document.getElementById("qf-badge");
  if (badge && WEB3FORMS_ACCESS_KEY !== "YOUR_WEB3FORMS_ACCESS_KEY") {
    badge.remove();
  }

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (WEB3FORMS_ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY") {
      status.textContent =
        "Form isn't connected yet — add a Web3Forms access key in assets/js/quote-form.js.";
      status.className = "form-status form-status--error";
      return;
    }

    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New quote request from magictoolscontracting.com");
    formData.append("from_name", "Magic Tools Contracting website");

    submitBtn.disabled = true;
    status.textContent = "Sending...";
    status.className = "form-status";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        form.reset();
        status.textContent = "Thanks! Your request has been sent — we'll be in touch soon.";
        status.className = "form-status form-status--success";
      } else {
        status.textContent = "Something went wrong sending your request. Please call or email us instead.";
        status.className = "form-status form-status--error";
      }
    } catch (err) {
      status.textContent = "Something went wrong sending your request. Please call or email us instead.";
      status.className = "form-status form-status--error";
    } finally {
      submitBtn.disabled = false;
    }
  });
})();
