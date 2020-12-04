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
      }).then((response) => {
        response.json().then((data) => {
          if (data.answer) {
            document
              .getElementById("main-view")
              .classList.toggle("display-view");
            document
              .getElementById("register-view")
              .classList.toggle("display-view");
          } else {
            alert(data.message);
          }
        });
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
    }).then((response) => {
      response.json().then((data) => {
        if (data.answer) {
          document.getElementById("main-view").classList.toggle("display-view");
          document
            .getElementById("connect-view")
            .classList.toggle("display-view");
        } else {
          alert(data.message);
        }
      });
    });
  });
});
