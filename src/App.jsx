import './App.css'

const skills = [
  { name: 'フロントエンド', items: ['React', 'TypeScript', 'Vite', 'HTML / CSS'] },
  { name: 'バックエンド', items: ['Node.js', 'Express', 'REST API', 'PostgreSQL'] },
  { name: 'ツール', items: ['Git / GitHub', 'Figma', 'Docker', 'Vitest'] },
]

const works = [
  {
    title: 'Task Flow',
    description:
      'チームでタスクを共有・管理できるカンバン型のWebアプリ。React とドラッグ&ドロップで直感的なUIを実現。',
    tags: ['React', 'TypeScript', 'Node.js'],
    link: '#',
  },
  {
    title: 'Weather Now',
    description:
      '現在地や任意の都市の天気を表示するシンプルなアプリ。外部APIと連携し、レスポンシブに対応。',
    tags: ['React', 'REST API', 'CSS'],
    link: '#',
  },
  {
    title: 'Portfolio Site',
    description:
      'このポートフォリオサイト。Vite + React で構築し、ライト/ダークモードに対応した軽量な構成。',
    tags: ['Vite', 'React', 'Design'],
    link: '#',
  },
]

function App() {
  return (
    <div className="page">
      <header className="site-header">
        <a className="brand" href="#top">
          Ochun
        </a>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#works">Works</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="top" className="hero">
          <p className="eyebrow">Web Developer</p>
          <h1>
            はじめまして、
            <br />
            <span className="accent-text">Ochun</span> です。
          </h1>
          <p className="lead">
            React を中心に、使いやすく心地よいWebをつくるフロントエンド開発者です。
            アイデアを形にすることが好きで、日々新しい技術を学んでいます。
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#works">
              制作物を見る
            </a>
            <a className="btn btn-ghost" href="#contact">
              お問い合わせ
            </a>
          </div>
        </section>

        <section id="about" className="section">
          <h2>About</h2>
          <div className="about">
            <p>
              Webアプリケーションの開発を中心に活動しています。ユーザーが直感的に
              使えるインターフェースと、保守しやすいコードの両立を大切にしています。
            </p>
            <p>
              普段はフロントエンドを担当することが多いですが、必要に応じて
              バックエンドやインフラにも手を伸ばします。趣味は個人開発と、
              気になった技術を触ってみることです。
            </p>
          </div>
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map((group) => (
              <div key={group.name} className="skill-card">
                <h3>{group.name}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="works" className="section">
          <h2>Works</h2>
          <div className="works-grid">
            {works.map((work) => (
              <a
                key={work.title}
                className="work-card"
                href={work.link}
                target={work.link === '#' ? undefined : '_blank'}
                rel="noreferrer"
              >
                <h3>{work.title}</h3>
                <p>{work.description}</p>
                <div className="tags">
                  {work.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p className="contact-lead">
            お仕事のご相談・ご質問など、お気軽にご連絡ください。
          </p>
          <div className="social">
            <a
              className="social-link"
              href="mailto:ochun@example.com"
            >
              <svg className="social-icon" aria-hidden="true">
                <use href="/icons.svg#social-icon"></use>
              </svg>
              Email
            </a>
            <a
              className="social-link"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="social-icon" aria-hidden="true">
                <use href="/icons.svg#github-icon"></use>
              </svg>
              GitHub
            </a>
            <a
              className="social-link"
              href="https://x.com/"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="social-icon" aria-hidden="true">
                <use href="/icons.svg#x-icon"></use>
              </svg>
              X.com
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Ochun. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
