const blogFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector("#title-post").value;
    const content = document.querySelector("#content-post").value;
  
  
  
    if (content && title) {
      const response = await fetch("api/post/bpost", {
        method: "POST",
        body: JSON.stringify({ content, title }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/profile");
      } else {
        alert("Failed To Input Stats");
      }
    }
  };
  
  document
    .querySelector(".post-form")
    .addEventListener("submit", blogFormHandler);