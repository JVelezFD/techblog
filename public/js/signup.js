const signupFormHandler = async (event) => {
  console.log('tacocat')
    event.preventDefault();
  
    const username = document.querySelector("#username-signup").value;
    const password = document.querySelector("#password-signup").value;
  
    if (username && password) {
      const response = await fetch("api/users", {
        method: "POST",
        body: JSON.stringify({
          username,
          password
        }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        console.log("you're in");
        document.location.replace("/dashboard");
      } else {
        alert("Failed to sign up");
      }
    }
  }
  
  document
    .querySelector("#signup-form")
    .addEventListener("submit", signupFormHandler);
  