// Render the app grid, with category filtering and a live search box.
(function () {
  const grid = document.getElementById("grid");
  const empty = document.getElementById("empty");
  const chips = Array.from(document.querySelectorAll("#chips .chip"));
  const search = document.getElementById("search");

  let category = "all";
  let query = "";

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function card(app) {
    const el = document.createElement("a");
    el.className = "app";
    el.href = app.release;
    el.target = "_blank";
    el.rel = "noopener";
    el.innerHTML = `
      <img class="app-icon" src="icons/${esc(app.id)}.png" alt="" loading="lazy" width="62" height="62">
      <div class="app-body">
        <h3>${esc(app.name)} <span class="tag">${esc(app.tag)}</span></h3>
        <p>${esc(app.desc)}</p>
        <div class="app-meta">
          <span>${esc(app.size)}</span>
          <span>v${esc(app.version)}</span>
          <span>arm64-v8a</span>
          <span class="dl">下载 APK</span>
        </div>
      </div>`;
    return el;
  }

  function render() {
    const q = query.trim().toLowerCase();
    const list = window.APPS.filter((a) => {
      const okCat = category === "all" || a.cat === category;
      const okQ =
        !q ||
        a.name.toLowerCase().includes(q) ||
        a.desc.toLowerCase().includes(q) ||
        a.tag.toLowerCase().includes(q);
      return okCat && okQ;
    });

    grid.replaceChildren(...list.map(card));
    empty.hidden = list.length > 0;
  }

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      category = chip.dataset.cat;
      chips.forEach((c) => c.classList.toggle("is-on", c === chip));
      render();
    });
  });

  search.addEventListener("input", () => {
    query = search.value;
    render();
  });

  document.getElementById("year").textContent = new Date().getFullYear();
  render();
})();
