document.addEventListener("DOMContentLoaded", function () {
  const lines = document.querySelectorAll(".line");

  function checkLines() {
    (Array.from(lines) as HTMLElement[]).forEach((line: HTMLElement) => {
      const linePosition = line.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (linePosition < screenHeight * 0.75) {
        line.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkLines);
  window.addEventListener("resize", checkLines);

  // Check lines on page load
  checkLines();
});
