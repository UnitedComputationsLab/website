import './globals.css';

export const metadata = {
  title: 'Your Name — Robotics Engineer',
  description: 'Robotics engineer sharing articles, project videos, and research on autonomous systems, embedded control, and mechanical design.',
};

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/articles', label: 'Articles' },
  { href: '/videos', label: 'Videos' },
  { href: '/about', label: 'About' },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <div className="container nav-inner">
            <a href="/" className="nav-logo">
              Your<span>.</span>Name
            </a>
            <ul className="nav-links">
              {navLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <main>{children}</main>

        <footer>
          <div className="container footer-inner">
            <p className="footer-copy">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <div className="footer-links">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
