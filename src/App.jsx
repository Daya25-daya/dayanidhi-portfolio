import { useState } from 'react'
import './App.css'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const techCategories = [
  {
    category: 'Frontend',
    icon: '<>',
    items: [
      { name: 'HTML', icon: 'H' },
      { name: 'CSS3', icon: 'C' },
      { name: 'JavaScript', icon: 'JS' },
      { name: 'React.js', icon: 'R' },
    ],
  },
  {
    category: 'Backend',
    icon: 'λ',
    items: [
      { name: 'Java', icon: 'J' },
      { name: 'Core Java', icon: 'CJ' },
      { name: 'Advanced Java', icon: 'AJ' },
      { name: 'Node.js', icon: 'N' },
      { name: 'Express.js', icon: 'E' },
    ],
  },
  {
    category: 'Database',
    icon: 'DB',
    items: [
      { name: 'MySQL', icon: 'SQL' },
      { name: 'MongoDB', icon: 'M' },
    ],
  },
  {
    category: 'APIs & Security',
    icon: '🔐',
    items: [
      { name: 'REST APIs', icon: 'API' },
      { name: 'JWT Authentication', icon: 'JWT' },
    ],
  },
  {
    category: 'Tools',
    icon: '▣',
    items: [
      { name: 'Git', icon: 'G' },
      { name: 'GitHub', icon: 'GH' },
      { name: 'VS Code', icon: 'VS' },
      { name: 'Postman', icon: 'P' },
    ],
  },
]

const projects = [
  {
    number: '01',
    title: 'Small Business Invoice & Billing System',
    description:
      'A full-stack invoice and billing application designed to help small businesses manage invoices, payment records, and customer information.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    highlights: [
      'Responsive React.js frontend',
      'RESTful APIs with Node.js and Express.js',
      'JWT-based authentication',
      'MongoDB database integration',
      'Invoice, payment, and customer management',
    ],
    github: 'https://github.com/Daya25-daya',
    liveDemo: 'https://invoiceportal.kesug.com/login',
    caseStudy: {
      overview:
        'This project focuses on practical business operations for small businesses by centralizing invoice generation, payment tracking, and customer records into a single application.',
      problem:
        'Small businesses often need a simple but reliable system to manage billing workflows without complex setup or rigid processes. The goal was to build a full-stack solution that makes invoice and customer operations easier to handle.',
      solution:
        'I developed a full-stack web app with a responsive frontend and a backend API to support secure user authentication, invoice management, payment tracking, and customer data management.',
      features: [
        'Responsive UI for creating and managing billing records',
        'Secure login using JWT authentication',
        'Invoice and payment record management',
        'Customer information management',
        'RESTful API architecture for data operations',
      ],
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      implementation:
        'The frontend was developed using React.js to provide a clean and responsive interface, while the backend used Node.js and Express.js for API endpoints and business logic. MongoDB was used for data persistence, and JWT-based authentication was added to secure access to protected routes.',
      challenges:
        'The main challenge was building a complete workflow that felt practical and reliable for business use while maintaining a clean, simple interface and secure backend logic. The solution emphasized maintainability, modular API design, and responsive front-end interactions.',
      learned:
        'This project strengthened my understanding of full-stack application architecture, secure authentication flows, and how to design responsive interfaces around real-world business needs.',
    },
  },
  {
    number: '02',
    title: 'Real-Time Chat Application',
    description:
      'A full-stack real-time chat application supporting instant communication between users.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'JWT'],
    highlights: [
      'Socket.IO for real-time synchronization',
      'JWT authentication',
      'REST APIs and MongoDB persistence',
      'Responsive React frontend',
      'Dynamic message rendering and session handling',
    ],
    github: 'https://github.com/Daya25-daya',
    liveDemo: null,
    caseStudy: {
      overview:
        'This project is a practical real-time messaging application that allows users to communicate instantly while maintaining persistent chat data.',
      problem:
        'Real-time communication requires both fast front-end rendering and a reliable backend that can synchronize updates across connected clients. The aim was to implement that flow with clean session management and secure access.',
      solution:
        'I built a MERN-style real-time chat app with a React frontend, Node.js and Express.js backend, MongoDB persistence, and Socket.IO-based communication for instant updates.',
      features: [
        'Real-time message synchronization using Socket.IO',
        'JWT-based authentication',
        'REST API integration',
        'MongoDB-backed chat persistence',
        'Responsive, dynamic chat interface',
      ],
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'JWT'],
      implementation:
        'The frontend renders live conversations responsively, while the backend manages session and message flow. Socket.IO enabled event-driven message updates, and JWT authentication protected communication and user sessions.',
      challenges:
        'The core challenge was ensuring real-time communication remained timely and consistent while maintaining secure authentication and persistent storage. The project focused on balancing responsiveness with reliability.',
      learned:
        'This project deepened my understanding of event-driven architectures, real-time application patterns, and how authentication and session logic integrate with chat workflows.',
    },
  },
  {
    number: '03',
    title: 'Auto Diagnosis of Parkinson’s Disease Using Deep Learning',
    description:
      'A machine learning project focused on analyzing healthcare-related data for Parkinson’s disease diagnosis using neural-network-based learning methods.',
    stack: ['Python', 'Deep Learning', 'Machine Learning'],
    highlights: [
      'Data preprocessing and analysis',
      'Model training and evaluation',
      'Neural-network-based learning workflow',
      'Healthcare dataset analysis',
    ],
    github: 'https://github.com/Daya25-daya',
    liveDemo: null,
    caseStudy: {
      overview:
        'This project explores machine learning concepts applied to healthcare-related data for pattern detection and diagnosis support.',
      problem:
        'The goal was to work with a healthcare dataset, prepare it for model use, and apply deep learning concepts to study how machine learning can support disease diagnosis workflows.',
      solution:
        'I implemented a data-preprocessing and model-training pipeline using Python, with a focus on evaluating model performance and understanding the learning approach used for classification.',
      features: [
        'Dataset preprocessing',
        'Model training and performance evaluation',
        'Neural-network-based ML workflow',
        'Healthcare-focused data analysis',
      ],
      technologies: ['Python', 'Deep Learning', 'Machine Learning'],
      implementation:
        'The project involved preparing the dataset, training a learning model, and reviewing results to evaluate the effectiveness of the technique. It emphasized understanding the workflow behind model building and assessment.',
      challenges:
        'The key challenge was working with a data-driven healthcare problem while ensuring the workflow was methodical and grounded in proper preprocessing and evaluation practices.',
      learned:
        'This project strengthened my understanding of data preparation, model training, and evaluation practices in machine learning with a healthcare context.',
    },
  },
]

const experience = [
  {
    company: 'Edutainer',
    role: 'Web Development Intern',
    duration: '90 Days',
    details: [
      'Completed a 90-day web development internship with practical exposure to application development.',
      'Worked on problem solving, debugging, and project-based learning in web development.',
      'Strengthened understanding of building and improving application workflows through hands-on practice.',
    ],
  },
]

const strengths = [
  'Strong problem-solving and logical thinking',
  'Good communication and teamwork',
  'Time management and adaptability',
  'Quick learner with a positive attitude',
]

const certifications = [
  'Full Stack Web Development — Tap Academy',
  'Python Web Development Workshop — Minds Coding Academy',
]

const contactInfo = {
  email: 'nithidaya09@gmail.com',
  linkedin: 'https://linkedin.com/in/dayanidhi-k',
  github: 'https://github.com/Daya25-daya',
}

function App() {
  const [expandedProject, setExpandedProject] = useState(0)

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent('Portfolio enquiry')
    const body = encodeURIComponent(
      'Hello Dayanidhi,\n\nI would like to connect regarding an opportunity.\n',
    )
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`
  }

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#top" className="brand" aria-label="Dayanidhi K home">
            <span className="brand-mark">DK</span>
            <span className="brand-text">Dayanidhi K</span>
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="header-button" href="#contact">
            Contact
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero-section section-space">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Software Developer | Full Stack Web Developer</p>
              <h1>
                DAYANIDHI K
                <span>Java Full Stack Developer</span>
              </h1>
              <p className="lead">
                Building modern, reliable web applications with clean code and
                thoughtful user experiences.
              </p>

              <div className="button-row">
                <a className="primary-button" href="#projects">
                  View Projects
                </a>
              <div className="button-row">
                <a
                  className="secondary-button"
                  href="/Dayanidhi_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume
                </a>

                <a
                  className="secondary-button"
                  href="/Dayanidhi_Resume.pdf"
                  download="Dayanidhi_Resume.pdf"
                >
                  Download Resume
                </a>
            </div>
            </div>

              <div className="social-row" aria-label="Social links">
                <a href={contactInfo.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={contactInfo.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href={`mailto:${contactInfo.email}`}>Email</a>
              </div>
            </div>

            <div className="hero-visual" aria-label="Developer workspace preview">
              <div className="visual-panel">
                <div className="panel-header">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>

                <div className="code-window">
                  <div className="code-line">
                    <span className="token keyword">const</span>
                    <span className="token variable">developer</span>
                    <span className="token operator">=</span>
                    <span className="token string">'Dayanidhi K'</span>
                  </div>
                  <div className="code-line">
                    <span className="token keyword">const</span>
                    <span className="token variable">stack</span>
                    <span className="token operator">=</span>
                    <span className="token string">['Java', 'React', 'Node.js']</span>
                  </div>
                  <div className="code-line">
                    <span className="token keyword">const</span>
                    <span className="token variable">focus</span>
                    <span className="token operator">=</span>
                    <span className="token string">'Build useful software'</span>
                  </div>
                </div>

                <div className="stat-row">
                  <div>
                    <strong>Java</strong>
                    <span>Full Stack</span>
                  </div>
                  <div>
                    <strong>React</strong>
                    <span>UI</span>
                  </div>
                  <div>
                    <strong>APIs</strong>
                    <span>Secure</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-space">
          <div className="container section-head">
            <p className="section-label">About</p>
            <h2>Developer with a practical, full-stack foundation.</h2>
          </div>

          <div className="container about-grid">
            <div className="about-card">
              <p>
                I am a motivated Full Stack Developer with a B.E. in Information
                Science and a strong interest in building practical software. My
                foundation spans Java, React, backend/API development, and
                database work, with a focus on building dependable web
                applications that solve real problems.
              </p>
            </div>

            <div className="about-card">
              <ul className="info-list">
                <li>
                  <span>Background</span>
                  <strong>B.E. in Information Science</strong>
                </li>
                <li>
                  <span>Core focus</span>
                  <strong>Full-stack development</strong>
                </li>
                <li>
                  <span>Technologies</span>
                  <strong>Java, React, Node.js, APIs</strong>
                </li>
                <li>
                  <span>Experience</span>
                  <strong>Web applications and database integration</strong>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="tech-stack" className="section-space">
          <div className="container section-head">
            <p className="section-label">Tech Stack</p>
            <h2>Tools and systems I work with.</h2>
          </div>

          <div className="container tech-grid">
            {techCategories.map((group) => (
              <article className="tech-card" key={group.category}>
                <div className="tech-header">
                  <span className="tech-icon" aria-hidden="true">
                    {group.icon}
                  </span>
                  <h3>{group.category}</h3>
                </div>

                <ul className="tech-list">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <span className="chip-icon" aria-hidden="true">
                        {item.icon}
                      </span>
                      <span>{item.name}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-space">
          <div className="container section-head">
            <p className="section-label">Featured Projects</p>
            <h2>Applications built with a product-minded approach.</h2>
          </div>

          <div className="container project-list">
            {projects.map((project) => {
              const isExpanded = expandedProject === Number(project.number) - 1

              return (
                <article className="project-card" key={project.title}>
                  <div className="project-topline">
                    <span className="project-number">{project.number}</span>
                    <span className="project-divider"></span>
                    <span className="project-kicker">Project</span>
                  </div>

                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="stack-row" aria-label="Project technology stack">
                    {project.stack.map((tech) => (
                      <span key={tech} className="stack-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="highlight-list">
                    {project.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <div className="project-actions">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                    {project.liveDemo ? (
                      <a href={project.liveDemo} target="_blank" rel="noreferrer">
                        Live Demo
                      </a>
                    ) : (
                      <button type="button" className="ghost-button" disabled>
                        Live Demo unavailable
                      </button>
                    )}
                    <button
                      type="button"
                      className="text-button"
                      onClick={() =>
                        setExpandedProject(isExpanded ? -1 : Number(project.number) - 1)
                      }
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? 'Hide Case Study' : 'View Case Study'}
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="case-study">
                      <div className="case-grid">
                        <div>
                          <h4>Overview</h4>
                          <p>{project.caseStudy.overview}</p>
                        </div>
                        <div>
                          <h4>Problem</h4>
                          <p>{project.caseStudy.problem}</p>
                        </div>
                        <div>
                          <h4>Solution</h4>
                          <p>{project.caseStudy.solution}</p>
                        </div>
                        <div>
                          <h4>Features</h4>
                          <ul>
                            {project.caseStudy.features.map((feature) => (
                              <li key={feature}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4>Technologies</h4>
                          <p>{project.caseStudy.technologies.join(', ')}</p>
                        </div>
                        <div>
                          <h4>Technical Implementation</h4>
                          <p>{project.caseStudy.implementation}</p>
                        </div>
                        <div>
                          <h4>Challenges</h4>
                          <p>{project.caseStudy.challenges}</p>
                        </div>
                        <div>
                          <h4>What I Learned</h4>
                          <p>{project.caseStudy.learned}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        </section>

        <section id="experience" className="section-space">
          <div className="container section-head">
            <p className="section-label">Experience</p>
            <h2>Hands-on learning through practical application work.</h2>
          </div>

          <div className="container timeline-wrap">
            {experience.map((item) => (
              <article className="timeline-item" key={item.company}>
                <div className="timeline-dot" aria-hidden="true"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div>
                      <h3>{item.company}</h3>
                      <p>{item.role}</p>
                    </div>
                    <span>{item.duration}</span>
                  </div>
                  <ul>
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section-space">
          <div className="container section-head">
            <p className="section-label">Education</p>
            <h2>Academic foundation.</h2>
          </div>

          <div className="container education-grid">
            <article className="info-panel">
              <p className="panel-label">Institution</p>
              <h3>Mysore College of Engineering and Management</h3>
              <p className="meta-line">B.E. in Information Science</p>
              <p className="meta-line">Year of passing: 2026</p>
            </article>
          </div>
        </section>

        <section id="certifications" className="section-space">
          <div className="container section-head">
            <p className="section-label">Certifications</p>
            <h2>Focused learning and web development training.</h2>
          </div>

          <div className="container certification-grid">
            {certifications.map((cert) => (
              <article className="info-panel" key={cert}>
                <p className="panel-label">Certification</p>
                <h3>{cert}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="strengths" className="section-space">
          <div className="container section-head">
            <p className="section-label">Additional Strengths</p>
            <h2>What I bring to a team.</h2>
          </div>

          <div className="container strengths-wrap">
            {strengths.map((strength) => (
              <div key={strength} className="strength-pill">
                {strength}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section-space contact-section">
          <div className="container section-head">
            <p className="section-label">Contact</p>
            <h2>Let&apos;s build something useful.</h2>
          </div>

          <div className="container contact-grid">
            <div className="contact-card">
              <p>
                I am open to opportunities in full-stack web development, practical
                product work, and software engineering roles where I can learn,
                contribute, and build useful systems.
              </p>

              <ul className="contact-links">
                <li>
                  <span>Email</span>
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </li>
                <li>
                  <span>LinkedIn</span>
                  <a href={contactInfo.linkedin} target="_blank" rel="noreferrer">
                    linkedin.com/in/dayanidhi-k
                  </a>
                </li>
                <li>
                  <span>GitHub</span>
                  <a href={contactInfo.github} target="_blank" rel="noreferrer">
                    github.com/Daya25-daya
                  </a>
                </li>
                <li>
                  <span>Location</span>
                  <strong>Bangalore, Karnataka</strong>
                </li>
              </ul>
            </div>

            <form className="contact-form" onSubmit={handleFormSubmit}>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Your name" />

              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="your@email.com" />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me about the opportunity or project..."
              ></textarea>

              <button type="submit" className="primary-button form-button">
                Send via Email
              </button>
              <p className="form-note">
                This form opens your default email client for a draft message.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <p>© 2026 Dayanidhi K</p>
          <div className="footer-links">
            <a href={contactInfo.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={contactInfo.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${contactInfo.email}`}>Email</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
