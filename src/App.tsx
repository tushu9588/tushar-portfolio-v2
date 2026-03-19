type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

type ExperienceItem = {
  period: string;
  title: string;
  company: string;
  summary: string;
  bullets: string[];
};

type Project = {
  title: string;
  label: string;
  description: string;
  stack: string[];
  impact: string[];
  githubUrl?: string;
  liveUrl?: string;
};

const skillGroups: SkillGroup[] = [
  {
    title: "Backend Engineering",
    description:
      "I build secure, maintainable APIs with a focus on clear architecture, clean business logic, and production-ready performance.",
    skills: [
      "C#",
      "ASP.NET Core",
      "REST APIs",
      "JWT Authentication",
      "Entity Framework Core",
      "LINQ",
      "Dependency Injection",
    ],
  },
  {
    title: "Data & Persistence",
    description:
      "I design database-backed applications that balance performance, structure, and long-term maintainability.",
    skills: ["MySQL", "SQL", "Database Design", "Stored Procedures", "ORM Patterns"],
  },
  {
    title: "Full-Stack Delivery",
    description:
      "While backend is my core strength, I can also connect APIs to practical frontend experiences and deployment workflows.",
    skills: ["React", "JavaScript", "HTML", "CSS", "Git", "Postman", "Vercel"],
  },
];

const experience: ExperienceItem[] = [
  {
    period: "2024 - Present",
    title: "Backend Developer",
    company: "Self-led Development",
    summary:
      "Focused on building API-driven applications with ASP.NET Core and C#, turning backend concepts into practical, portfolio-ready solutions.",
    bullets: [
      "Designed and developed backend services using ASP.NET Core Web API and C#.",
      "Implemented JWT-based authentication and authorization flows for secure user access.",
      "Worked with Entity Framework Core and MySQL for schema design, data access, and query optimization.",
      "Connected backend systems with React-based interfaces to deliver complete end-to-end functionality.",
    ],
  },
  {
    period: "Project-Based Learning",
    title: "Backend Project Builder",
    company: "Independent Portfolio Work",
    summary:
      "Built hands-on projects centered around API integration, modular architecture, and data aggregation workflows.",
    bullets: [
      "Created reusable API structures for content delivery, user management, and filtered data retrieval.",
      "Applied clean routing, layered service design, and structured error handling across multiple builds.",
      "Focused on practical engineering patterns that translate directly to production backend teams.",
    ],
  },
];

const projects: Project[] = [
  {
    title: "News Aggregator API",
    label: "Featured Project",
    description:
      "A backend-first news aggregation platform built to collect, normalize, and expose news data through a clean ASP.NET Core API. The project highlights my ability to structure scalable endpoints, manage persistence cleanly, and create developer-friendly data flows for frontend consumption.",
    stack: [
      "ASP.NET Core",
      "C#",
      "Entity Framework Core",
      "MySQL",
      "JWT Authentication",
      "REST API",
    ],
    impact: [
      "Centralized article delivery behind consistent API contracts for easier frontend integration.",
      "Structured the codebase around maintainable controllers, services, and data access layers.",
      "Improved reliability with authenticated endpoints, validation, and predictable response handling.",
    ],
  },
  {
    title: "Authentication & User Management API",
    label: "Backend Project",
    description:
      "A secure API focused on registration, login, authorization, and protected resource access using token-based authentication patterns.",
    stack: ["ASP.NET Core", "C#", "JWT", "EF Core", "MySQL"],
    impact: [
      "Implemented secure login and protected route flows.",
      "Built reusable authentication logic suited for larger backend systems.",
    ],
  },
  {
    title: "React + ASP.NET Core Integration",
    label: "Full-Stack Project",
    description:
      "A practical full-stack build where backend APIs power a responsive frontend, demonstrating my ability to bridge data services with usable interfaces.",
    stack: ["React", "ASP.NET Core", "C#", "MySQL", "REST"],
    impact: [
      "Connected frontend screens to backend endpoints with clear data contracts.",
      "Delivered a cleaner user experience on top of a structured API layer.",
    ],
  },
];

const contactLinks = [
  { label: "Email", href: "mailto:ts766277@gmail.com", value: "ts766277@gmail.com" },
  { label: "Phone", href: "tel:+919588718772", value: "+91-9588718772" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tushar-sharma-760858289",
    value: "linkedin.com/in/tushar-sharma-760858289",
  },
];

const stats = [
  { value: "ASP.NET Core", label: "Backend focus" },
  { value: "JWT + EF Core", label: "Security and data access" },
  { value: "MySQL", label: "Database-driven builds" },
];

const App = () => {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home">
          Tushar Sharma
        </a>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Backend Developer • Rohtak, Haryana, India</p>
            <h1>
              Building reliable backend systems with
              <span> ASP.NET Core and C#.</span>
            </h1>
            <p className="hero-text">
              I am Tushar Sharma, a backend developer focused on designing clean
              APIs, secure authentication flows, and database-backed
              applications. I enjoy turning business requirements into
              maintainable server-side systems that are easy to scale and easy
              for frontend teams to consume.
            </p>
            <div className="cta-row">
              <a className="button button-primary" href="#projects">
                View Projects
              </a>
              <a
                className="button button-secondary"
                href="/resume/Tushar-Sharma-Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View Resume
              </a>
            </div>
          </div>

          <aside className="hero-panel">
            <div className="panel-card">
              <p className="panel-label">Core Stack</p>
              <ul className="stack-list">
                <li>C# / ASP.NET Core</li>
                <li>Entity Framework Core</li>
                <li>MySQL / SQL</li>
                <li>JWT Authentication</li>
                <li>React Integration</li>
              </ul>
            </div>
            <div className="hero-stats">
              {stats.map((stat) => (
                <div className="stat-card" key={stat.value}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <p className="eyebrow">About Me</p>
            <h2>Backend-first thinking with full-stack awareness.</h2>
          </div>
          <div className="about-grid">
            <div className="card">
              <p>
                My work is centered around backend development using ASP.NET Core
                and C#. I like building systems that are structured well under
                the hood, whether that means secure authentication, organized
                service layers, or database models that stay maintainable as the
                application grows.
              </p>
            </div>
            <div className="card">
              <p>
                I am especially interested in API development, business logic
                implementation, and backend architecture that supports fast,
                reliable frontend integration. My goal is to contribute to teams
                that value clean engineering fundamentals and real product impact.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Tools and technologies I use to build backend products.</h2>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article className="card skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <div className="chip-wrap">
                  {group.skills.map((skill) => (
                    <span className="chip" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Project-driven backend development with a practical mindset.</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item card" key={`${item.period}-${item.title}`}>
                <div className="timeline-header">
                  <div>
                    <p className="timeline-period">{item.period}</p>
                    <h3>{item.title}</h3>
                    <p className="timeline-company">{item.company}</p>
                  </div>
                </div>
                <p>{item.summary}</p>
                <ul className="bullet-list">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Backend projects with News Aggregator API at the center.</h2>
          </div>

          <article className="featured-project">
            <div className="featured-copy">
              <p className="project-label">{projects[0].label}</p>
              <h3>{projects[0].title}</h3>
              <p>{projects[0].description}</p>
              <div className="chip-wrap">
                {projects[0].stack.map((item) => (
                  <span className="chip chip-strong" key={item}>
                    {item}
                  </span>
                ))}
              </div>
              <div className="project-actions">
                {projects[0].githubUrl ? (
                  <a
                    className="button button-primary"
                    href={projects[0].githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                ) : null}
                {projects[0].liveUrl ? (
                  <a
                    className="button button-secondary"
                    href={projects[0].liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                ) : null}
              </div>
            </div>
            <div className="featured-impact card">
              <p className="impact-title">Impact</p>
              <ul className="bullet-list">
                {projects[0].impact.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>

          <div className="project-grid">
            {projects.slice(1).map((project) => (
              <article className="card project-card" key={project.title}>
                <p className="project-label">{project.label}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="chip-wrap">
                  {project.stack.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <div className="section-heading">
            <p className="eyebrow">Education</p>
            <h2>Academic foundation in computer applications.</h2>
          </div>
          <article className="card education-card">
            <p className="timeline-period">Bachelor of Computer Applications</p>
            <h3>Maharshi Dayanand University, Rohtak</h3>
            <p>
              Built a strong base in programming, database concepts, software
              fundamentals, and application development.
            </p>
          </article>
        </section>
      </main>

      <footer className="footer section" id="contact">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h2>Open to backend development opportunities and collaborations.</h2>
        </div>
        <div className="contact-grid">
          {contactLinks.map((link) => (
            <a className="card contact-card" href={link.href} key={link.label}>
              <p className="panel-label">{link.label}</p>
              <strong>{link.value}</strong>
            </a>
          ))}
        </div>
        <p className="footer-note">
          © {new Date().getFullYear()} Tushar Sharma. Built for a modern,
          production-ready portfolio experience.
        </p>
      </footer>
    </div>
  );
};

export default App;
