(() => {
    // Mobile nav toggle
    const btn = document.getElementById("navbtn");
    const nav = document.getElementById("nav");
    if (btn && nav) {
      btn.addEventListener("click", () => {
        const open = nav.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", String(open));
      });
  
      // Close menu on link click (mobile)
      nav.querySelectorAll("a").forEach(a => {
        a.addEventListener("click", () => {
          nav.classList.remove("is-open");
          btn.setAttribute("aria-expanded", "false");
        });
      });
    }
  
    // Auto last-updated text from document lastModified
    const el = document.getElementById("lastUpdated");
    if (el) {
      const d = new Date(document.lastModified);
      const yyyy = d.getFullYear();
      const mm = String(d.getMonth() + 1).padStart(2, "0");
      const dd = String(d.getDate()).padStart(2, "0");
      el.textContent = `${yyyy}-${mm}-${dd}`;
    }
  })();