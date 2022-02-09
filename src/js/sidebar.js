document.addEventListener("DOMContentLoaded", function () {
  let sidebar = document.getElementById("sidebar");
  let toggleBtn = document.getElementById("toggle-btn");

  toggleBtn.addEventListener("click", function () {
    sidebar.classList.toggle("active");
  });
});
