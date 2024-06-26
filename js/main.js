const navLinks = document.getElementById("nav-links");

navLinks.addEventListener("click", (e) => {
  let linkText = e.target.textContent.trim().toLowerCase();

  switch (linkText) {
    case "shop":
      console.log("Redirecting to Shop.");
      break;
    case "about":
      console.log("Redirecting to About.");
      break;
    case "contact":
      console.log("Redirecting to Contact.");
      break;
    case "logo":
      console.log("Redirecting to Home.");
  }
});
