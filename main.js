/* 페이지 렌더링 코드입니다. 내용 수정은 content.js에서 하세요. */
(function () {
  const c = content;
  const page = document.body.dataset.page || "profile";

  const NAV = [
    { id: "profile", label: "Profile", href: "index.html" },
    { id: "projects", label: "Projects", href: "projects.html" },
    { id: "publications", label: "Publications", href: "publications.html" },
    { id: "activities", label: "Activities", href: "activities.html" },
    { id: "cv", label: "CV", href: "cv.html", pill: true },
  ];

  /* ---------- helpers ---------- */
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
  const pad = (n) => String(n).padStart(2, "0");
  const ext = (url) => `href="${esc(url)}" target="_blank" rel="noopener"`;
  const pubById = Object.fromEntries(c.publications.map((p) => [p.id, p]));

  const initials = (name) => name.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();

  // 이미지가 없거나 로드에 실패하면 자리표시 그래픽으로 대체
  function figure(src, label, cls = "") {
    const ph = `<div class="placeholder ${cls}"><span>${esc(label)}</span></div>`;
    if (!src) return ph;
    return `<img src="${esc(src)}" alt="${esc(label)}" loading="lazy" onerror="this.outerHTML=this.dataset.ph" data-ph="${esc(ph)}">`;
  }

  function authors(str) {
    let out = esc(str);
    for (const n of c.profile.myNames) out = out.split(esc(n)).join(`<b>${esc(n)}</b>`);
    return out;
  }

  /* ---------- shared chrome ---------- */
  function nav() {
    const links = NAV.map(
      (n) => `<a href="${n.href}" class="${[n.id === page && "active", n.pill && "pill"].filter(Boolean).join(" ")}">${n.label}</a>`
    ).join("");
    return `
      <header class="nav">
        <div class="nav-inner">
          <a class="brand" href="index.html">${esc(c.profile.name)}</a>
          <button class="menu-toggle" aria-label="Open menu" aria-expanded="false"><span></span><span></span></button>
          <nav class="nav-links">${links}</nav>
        </div>
      </header>`;
  }

  function pageHead(eyebrow, title, text, extra = "") {
    return `
      <section class="page-head">
        <div class="wrap">
          <div class="eyebrow light">${esc(eyebrow)}</div>
          <h1>${esc(title)}</h1>
          ${text ? `<p>${esc(text)}</p>` : ""}
          ${extra}
        </div>
      </section>`;
  }

  function footer() {
    const p = c.profile;
    const explore = NAV.map((n) => `<a href="${n.href}">${n.label}</a>`).join("");
    const connect = p.links.map((l) => `<a ${ext(l.url)}>${esc(l.label)}</a>`).join("");
    return `
      <footer class="footer">
        <div class="wrap footer-grid">
          <div>
            <div class="footer-brand">${esc(p.name)}</div>
            <p>${esc(p.role)} · ${esc(p.affiliation)}</p>
          </div>
          <div><b>Explore</b>${explore}</div>
          <div><b>Connect</b>${connect}</div>
          <div class="footer-contact"><b>Contact</b><a href="mailto:${esc(p.email)}" data-copy="${esc(p.email)}">${esc(p.email)}</a></div>
        </div>
        <div class="wrap footer-bottom">
          <span>© ${new Date().getFullYear()} ${esc(p.name)}</span>
          <span>${esc(p.headline)}</span>
        </div>
      </footer>`;
  }

  /* ---------- components ---------- */
  function pubItem(p) {
    return `
      <li class="pub">
        <div class="pub-year">${esc(p.year)}</div>
        <div class="pub-body">
          <div class="pub-title">${p.link ? `<a ${ext(p.link)}>${esc(p.title)}</a>` : esc(p.title)}</div>
          <div class="pub-authors">${authors(p.authors)}</div>
          <div class="pub-venue">${esc(p.venue)}</div>
          ${p.award ? `<span class="award">🏆 ${esc(p.award)}</span>` : ""}
        </div>
        ${p.link ? `<a class="pub-link" ${ext(p.link)}>Paper ↗</a>` : ""}
      </li>`;
  }

  function study(p) {
    const meta = [p.short, p.award].filter(Boolean).join(" · ");
    const inner = `
      <div class="study-image">${figure(p.image, p.short)}</div>
      <strong>${esc(p.title)}</strong>
      <small>${esc(meta)}</small>`;
    return p.link ? `<a class="study" ${ext(p.link)}>${inner}</a>` : `<div class="study">${inner}</div>`;
  }

  function program(pr, i) {
    const studies = (pr.publications || []).map((id) => pubById[id]).filter(Boolean);
    return `
      <article class="program ${i % 2 ? "reverse" : ""}" id="project-${i + 1}">
        <div class="program-visual">
          <div class="program-image">${figure(pr.image, pr.title, "large")}</div>
          <div class="program-info">
            <strong>${esc(pr.period)}</strong>
            <small>${esc(pr.team)}</small>
          </div>
        </div>
        <div class="program-copy">
          <div class="program-number">${pad(i + 1)} · ${esc(pr.theme)}</div>
          <h2>${esc(pr.title)}</h2>
          <h3>${esc(pr.question)}</h3>
          <p>${esc(pr.description)}</p>
          <div class="tags">${(pr.tags || []).map((t) => `<span>${esc(t)}</span>`).join("")}</div>
          ${
            studies.length
              ? `<div class="selected-label">Selected studies</div><div class="study-grid">${studies.map(study).join("")}</div>`
              : ""
          }
        </div>
      </article>`;
  }

  function activityItem(a) {
    return `
      <li class="activity">
        <div class="activity-date">${esc(a.date)}</div>
        <div class="activity-body">
          <div class="activity-head">
            <h3>${a.link ? `<a ${ext(a.link)}>${esc(a.title)}</a>` : esc(a.title)}</h3>
            ${a.category ? `<span class="chip">${esc(a.category)}</span>` : ""}
          </div>
          ${a.location ? `<div class="activity-loc">${esc(a.location)}</div>` : ""}
          <ul>${(a.details || []).map((d) => `<li>${esc(d)}</li>`).join("")}</ul>
          ${
            a.photos?.length
              ? `<div class="activity-photos">${a.photos
                  .map((src) => `<a ${ext(src)}><img src="${esc(src)}" alt="${esc(a.title)}" loading="lazy"></a>`)
                  .join("")}</div>`
              : ""
          }
        </div>
      </li>`;
  }

  /* ---------- pages ---------- */
  const pages = {
    profile() {
      const p = c.profile;
      const photo = `<div class="avatar">${
        p.photo
          ? `<img src="${esc(p.photo)}" alt="${esc(p.name)}" onerror="this.replaceWith(document.createTextNode('${initials(p.name)}'))">`
          : initials(p.name)
      }</div>`;
      const buttons = `
        <div class="hero-links">
          <a class="btn primary" href="mailto:${esc(p.email)}" data-copy="${esc(p.email)}">Email</a>
          ${p.links.map((l) => `<a class="btn" ${ext(l.url)}>${esc(l.label)}</a>`).join("")}
          <a class="btn" href="cv.html">CV</a>
        </div>`;
      const selected = c.publications.filter((x) => x.selected);
      return `
        <section class="page-head hero">
          <div class="wrap hero-grid">
            <div>
              <div class="eyebrow light">${esc(p.role)} · ${esc(p.affiliation)}</div>
              <h1>${esc(p.name)}</h1>
              <p>${esc(p.bio)}</p>
              ${buttons}
            </div>
            ${photo}
          </div>
        </section>

        <section class="section intro">
          <div class="wrap intro-grid">
            <div>
              <div class="eyebrow">Research interests</div>
              <h2>${esc(p.headline)}</h2>
            </div>
            <div class="tags big">${p.interests.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
          </div>
        </section>

        <section class="section dark">
          <div class="wrap">
            <div class="section-title inverted">
              <div><div class="eyebrow">Projects</div><h2>Research in action</h2></div>
              <a class="more" href="projects.html">All projects →</a>
            </div>
            <div class="card-grid">
              ${c.projects
                .slice(0, 4)
                .map(
                  (pr, i) => `
                <a class="card" href="projects.html#project-${i + 1}">
                  <div class="card-image">${figure(pr.image, pr.title, "dark")}</div>
                  <div class="card-copy">
                    <small>${pad(i + 1)} · ${esc(pr.period)}</small>
                    <h3>${esc(pr.title)}</h3>
                    <p>${esc(pr.question)}</p>
                    <div class="card-meta">${esc(pr.theme)}</div>
                  </div>
                </a>`
                )
                .join("")}
            </div>
          </div>
        </section>

        <section class="section">
          <div class="wrap split">
            <div>
              <div class="section-title"><div><div class="eyebrow">Selected publications</div></div><a class="more" href="publications.html">All →</a></div>
              <ul class="pub-list">${selected.map(pubItem).join("")}</ul>
            </div>
            <div>
              <div class="section-title"><div><div class="eyebrow">Recent activities</div></div><a class="more" href="activities.html">All →</a></div>
              <ul class="activity-list compact">${c.activities.slice(0, 4).map(activityItem).join("")}</ul>
            </div>
          </div>
        </section>`;
    },

    projects() {
      return `
        ${pageHead("Projects", "Research in action", "Projects that turn research questions into systems, studies, and experiences.")}
        <section class="section intro">
          <div class="wrap intro-grid">
            <div><div class="eyebrow">Project portfolio</div><h2>${esc(c.projectsIntro.title)}</h2></div>
            <p>${esc(c.projectsIntro.text)}</p>
          </div>
        </section>
        <section class="programs"><div class="wrap">${c.projects.map(program).join("")}</div></section>`;
    },

    publications() {
      const groups = c.publicationTypes
        .map((g) => {
          const list = c.publications.filter((p) => p.type === g.type);
          if (!list.length) return "";
          return `
            <div class="pub-group">
              <div class="pub-group-head"><h2>${esc(g.label)}</h2><span>${list.length}</span></div>
              <ul class="pub-list">${list.map(pubItem).join("")}</ul>
            </div>`;
        })
        .join("");
      const scholar = c.profile.links.find((l) => /scholar/i.test(l.label));
      return `
        ${pageHead(
          "Publications",
          "Publications",
          "Peer-reviewed journal articles and conference papers.",
          scholar ? `<div class="hero-links"><a class="btn" ${ext(scholar.url)}>Google Scholar ↗</a></div>` : ""
        )}
        <section class="section"><div class="wrap narrow">${groups}</div></section>`;
    },

    activities() {
      return `
        ${pageHead("Activities", "Activities", "Conferences, research visits, and community service.")}
        <section class="section"><div class="wrap narrow"><ul class="activity-list">${c.activities.map(activityItem).join("")}</ul></div></section>`;
    },

    cv() {
      const cv = c.cv;
      const sections = cv.sections
        .map(
          (s) => `
          <div class="cv-section">
            <h2>${esc(s.title)}</h2>
            <ul>${s.items
              .map(
                (it) => `<li><span class="cv-when">${esc(it.when)}</span><div><strong>${esc(it.what)}</strong><small>${esc(it.where)}</small></div></li>`
              )
              .join("")}</ul>
          </div>`
        )
        .join("");
      const btn = cv.pdf ? `<div class="hero-links"><a class="btn primary" href="${esc(cv.pdf)}" download>Download CV (PDF)</a></div>` : "";
      return `
        ${pageHead("Curriculum Vitae", "CV", cv.updated ? `Last updated ${cv.updated}` : "", btn)}
        <section class="section"><div class="wrap narrow">${sections}</div></section>`;
    },
  };

  /* ---------- mount ---------- */
  const label = NAV.find((n) => n.id === page)?.label;
  document.title = page === "profile" ? c.profile.name : `${label} · ${c.profile.name}`;
  document.getElementById("app").innerHTML = nav() + `<main>${(pages[page] || pages.profile)()}</main>` + footer();

  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });

  // 이메일 클릭 시 주소를 클립보드에 복사
  document.querySelectorAll("[data-copy]").forEach((el) => {
    el.addEventListener("click", async (e) => {
      e.preventDefault();
      const text = el.dataset.copy;
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        const ta = Object.assign(document.createElement("textarea"), { value: text });
        document.body.append(ta);
        ta.select();
        document.execCommand("copy");
        ta.remove();
      }
      el.dataset.label ??= el.textContent;
      el.textContent = "Copied!";
      clearTimeout(el._t);
      el._t = setTimeout(() => (el.textContent = el.dataset.label), 1500);
    });
  });

  // projects.html#project-3 처럼 들어온 경우 해당 위치로 이동
  if (location.hash) document.querySelector(location.hash)?.scrollIntoView();
})();
