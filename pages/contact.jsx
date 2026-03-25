fetch("https://wdq3notjea.execute-api.eu-north-1.amazonaws.com/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name,
    email,
    message
  })
})
.then(res => res.json())
.then(data => {
  console.log(data);
  alert("Message sent!");
});