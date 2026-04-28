function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth",
  });
}

/* Quote Form */
document.getElementById("quoteForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Quote request submitted!");
});

/* Driver Form */
document.getElementById("driverForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Registration successful!");
});
