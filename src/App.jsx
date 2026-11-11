import './App.css'

const projects = [
  {
    number: '01',
    name: 'Carrier Management Portal',
    client: 'Operational Tools · Aspire Systems',
    description:
      'A carrier-focused order management microfrontend, with secure role-based workflows for offers, order tracking, and re-initiation.',
    tags: ['React', 'SSO / RBAC', 'i18n', 'REST APIs'],
    image: '/projects/carrier-portal.svg',
    imageAlt: 'Carrier operations dashboard with order statuses and delivery metrics',
    className: 'project-card--carrier',
  },
  {
    number: '02',
    name: 'Nextestify',
    client: 'Online examination platform',
    description:
      'AI-assisted exam workflows with candidate learning tools, secure authentication, face verification, and live proctoring.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: '/projects/nextestify.svg',
    imageAlt: 'Online examination portal with a live proctoring preview',
    className: 'project-card--nextestify',
  },
  {
    number: '03',
    name: 'ARMS',
    client: 'Aviation Resource Management System',
    description:
      'Built crew and admin portals from the ground up, and developed reusable Gantt chart and data-grid libraries.',
    tags: ['React', 'Redux', 'Jest', 'Storybook'],
    image: '/projects/arms-aviation.svg',
    imageAlt: 'Aviation operations screen with aircraft routes and a crew schedule',
    className: 'project-card--arms',
  },
  {
    number: '04',
    name: 'CGI · Power Fund',
    client: 'Application modernization',
    description:
      'Helped migrate a .NET application to React and TypeScript, including file handling, testing, and deployment research.',
    tags: ['React', 'TypeScript', 'Express', 'Multer'],
    image: '/projects/power-fund.svg',
    imageAlt: 'Investment dashboard with portfolio metrics and a performance chart',
    className: 'project-card--power-fund',
  },
]

const experience = [
  {
    role: 'Senior Engineer',
    company: 'Aspire Systems',
    dates: 'Apr 2025 — Aug 2026',
    detail:
      'Delivered carrier management and subscription-based product features, including access control, localization, API integrations, and production support.',
  },
  {
    role: 'Software Engineer',
    company: 'Sankara Software Services',
    dates: 'Feb 2024 — Mar 2025',
    detail:
      'Built online examination experiences and candidate learning modules, integrated REST APIs, and improved reliability across production workflows.',
  },
  {
    role: 'Executive Software Engineer',
    company: 'Soft Suave Technologies',
    dates: 'Dec 2021 — Jan 2024',
    detail:
      'Built aviation crew and admin portals, then created reusable chart and data-grid components with supporting tests and documentation.',
  },
]

const skillGroups = [
  {
    label: 'Frontend',
    skills: 'React · JavaScript · TypeScript · Redux Toolkit · React Router · HTML · CSS · SCSS',
  },
  {
    label: 'Backend & APIs',
    skills: 'Node.js · Express · REST APIs · MongoDB',
  },
  {
    label: 'Testing & UI',
    skills: 'Jest · React Testing Library · Storybook · Material UI · Tailwind CSS',
  },
  {
    label: 'Build & delivery',
    skills: 'Vite · Webpack · Rollup · Jenkins · Git · GitHub Actions · IIS · NGINX',
  },
  {
    label: 'Visualization',
    skills: 'D3.js · Chart.js · ApexCharts',
  },
]

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="arrow-icon"
    >
      <path d="M4.25 10h11.5m-5-5 5 5-5 5" />
    </svg>
  )
}

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Dinesh Kumar, home">
          <span className="wordmark-mark">DK</span>
          <span>Dinesh Kumar</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a className="nav-contact" href="#contact">
            Get in touch <ArrowIcon />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> React developer · Chennai, India</p>
            <h1>
              I build digital
              <br />
              products <span>that work.</span>
            </h1>
            <p className="hero-intro">
              I’m Dinesh — a senior React developer with 5+ years of experience
              turning complex workflows into clear, reliable web experiences.
            </p>
            <div className="hero-actions">
              <a className="button button--dark" href="#work">
                Explore my work <ArrowIcon />
              </a>
              <a
                className="text-link"
                href="/Dinesh-Kumar-Resume.pdf"
                download
              >
                Download résumé <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <aside className="hero-note" aria-label="A little about my work">
            <div className="note-orbit" aria-hidden="true">
              <span>DK</span>
              <i />
              <i />
              <i />
            </div>
            <p className="note-kicker">Good software is</p>
            <p className="note-statement">
              thoughtful
              <br />
              down to the
              <br />
              <em>last detail.</em>
            </p>
            <div className="note-rule" />
            <p className="note-foot">Frontend · APIs · Product thinking</p>
          </aside>
          <div className="hero-index" aria-hidden="true">
            <span>01</span> / 04
          </div>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>Built for real-world complexity.</h2>
            </div>
            <p className="section-aside">
              A few projects where thoughtful interfaces meet practical
              engineering.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article
                className={`project-card ${project.className}`}
                key={project.number}
              >
                <div className="project-topline">
                  <span>{project.client}</span>
                  <span className="project-number">{project.number}</span>
                </div>
                <img
                  className="project-image"
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                  width="1200"
                  height="680"
                />
                <div className="project-copy">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <ul className="tag-list" aria-label="Technologies">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="section-wrap about-layout">
            <div className="about-heading">
              <p className="eyebrow">A bit about me</p>
              <h2>Curious by nature.<br />Careful by craft.</h2>
            </div>
            <div className="about-body">
              <p className="about-lead">
                I enjoy the part of software development where a tricky problem
                becomes something simple for the person using it.
              </p>
              <p>
                Over the past five years, I’ve worked on enterprise portals,
                aviation tools, and online learning and examination products.
                I care about reusable components, accessible interfaces, and
                making the whole experience dependable — not just the happy
                path.
              </p>
              <div className="education">
                <p className="eyebrow">Education</p>
                <div className="education-item">
                  <span className="education-year">2016 — 2019</span>
                  <span>
                    <strong>Bachelor of Engineering</strong>
                    <small>Sri Balaji Chockalingam Engineering College</small>
                  </span>
                </div>
                <div className="education-item">
                  <span className="education-year">2013 — 2016</span>
                  <span>
                    <strong>Diploma</strong>
                    <small>T.P.E.V.R Govt Polytechnic College</small>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="experience-section section-wrap" id="experience">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Where I’ve been</p>
              <h2>Experience that adds up.</h2>
            </div>
            <span className="experience-total">2021 — 2026</span>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.company}>
                <div className="timeline-date">{item.dates}</div>
                <div className="timeline-content">
                  <h3>{item.role}</h3>
                  <p className="timeline-company">{item.company}</p>
                  <p className="timeline-detail">{item.detail}</p>
                </div>
                <span className="timeline-marker" aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section className="skills-section" aria-labelledby="skills-title">
          <div className="section-wrap skills-layout">
            <div>
              <p className="eyebrow">The toolkit</p>
              <h2 id="skills-title">Tools I reach for.</h2>
            </div>
            <div className="skills-list">
              {skillGroups.map((group) => (
                <div className="skill-row" key={group.label}>
                  <h3>{group.label}</h3>
                  <p>{group.skills}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <p className="eyebrow">Have something in mind?</p>
          <h2>Let’s make it<br /><span>work beautifully.</span></h2>
          <a className="button button--light" href="mailto:dineshkumarddk1997@gmail.com">
            Say hello <ArrowIcon />
          </a>
          <div className="contact-details">
            <a href="mailto:dineshkumarddk1997@gmail.com">
              dineshkumarddk1997@gmail.com
            </a>
            <a href="tel:+919345054217">+91 93450 54217</a>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="wordmark" href="#home">
          <span className="wordmark-mark">DK</span>
          <span>Dinesh Kumar</span>
        </a>
        <p>Designed with care. Built with React.</p>
        <a className="back-to-top" href="#home">
          Back to top ↑
        </a>
      </footer>
    </div>
  )
}

export default App
