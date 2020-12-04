document.addEventListener("DOMContentLoaded", () => {
  const registerBtn = document.getElementById("submit-inscription");
  registerBtn.addEventListener("click", (ev) => {
    ev.preventDefault();

    const data = {
      user: document.getElementById("re_name").value,
      password: document.getElementById("re_password").value,
    };

    fetch("/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  });
});
