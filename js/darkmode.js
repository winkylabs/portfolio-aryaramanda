/* ==========================================
   PREMIUM DARK MODE
   - Menyimpan pilihan tema
   - Mengganti ikon bulan/matahari
   - Transisi tema dengan efek blob
========================================== */

const themeButton = document.getElementById("theme-toggle");
const themeIcon = themeButton.querySelector("i");

/* ==========================
   Memuat tema yang disimpan
========================== */

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeIcon.className = "bi bi-sun-fill";
}

function createThemeBlob(targetTheme, x, y) {
  if (document.querySelector(".theme-blob")) return;

  const blob = document.createElement("div");
  blob.className = `theme-blob ${targetTheme}`;
  blob.style.left = `${x}px`;
  blob.style.top = `${y}px`;

  document.body.appendChild(blob);

  requestAnimationFrame(() => {
    blob.classList.add("expand");
  });

  blob.addEventListener("transitionend", () => {
    blob.remove();
  });
}

function updateThemeState(isDark) {
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeIcon.className = isDark ? "bi bi-sun-fill" : "bi bi-moon-fill";
}

/* ==========================
   Tombol Dark Mode
========================== */

themeButton.addEventListener("click", () => {
  if (document.querySelector(".theme-blob")) return;

  const targetTheme = document.body.classList.contains("dark")
    ? "light"
    : "dark";
  const rect = themeButton.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  createThemeBlob(targetTheme, centerX, centerY);

  setTimeout(() => {
    const isDark = targetTheme === "dark";
    document.body.classList.toggle("dark", isDark);
    updateThemeState(isDark);
  }, 120);
});
