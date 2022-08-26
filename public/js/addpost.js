const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('input[name= "title-post"]').value;
    const content = document.querySelector('input[name= "content-post"]').value;
  
  
  
    if (content && title) {
      const response = await fetch("api/post/post", {
        method: "POST",
        body: JSON.stringify({  title, content, }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert("Failed To Input Stats");
      }
    }
  };
  
  document
    .querySelector("#newpost-form")
    .addEventListener("submit", newFormHandler);