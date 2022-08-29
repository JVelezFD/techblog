const signupFormHandler = async (event) => {
  console.log('tacocat')
    event.preventDefault();
  
    const username = document.querySelector("#username-signup").value;
    const email = document.querySelector("#email-signup").value;
    const password = document.querySelector("#password-signup").value;
  
    if (username && email && password) {
      const response = await fetch("api/users", {
        method: "POST",
        body: JSON.stringify({
          username,
          email,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert("Failed to sign up");
      }
    }
  };
  
  document
    .querySelector("#signup-form")
    .addEventListener("submit", signupFormHandler);
  