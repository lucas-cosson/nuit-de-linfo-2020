document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("submit-inscription")
    .addEventListener("click", (ev) => {
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

  document.getElementById("submit-connect").addEventListener("click", (ev) => {
    ev.preventDefault();

    const data = {
      user: document.getElementById("co_name").value,
      password: document.getElementById("co_password").value,
    };

    fetch("/api/user/connect", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  });
});
