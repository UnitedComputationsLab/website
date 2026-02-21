import { articles } from '@/data/articles';

export const metadata = {
  title: 'Articles — Robotics Engineer',
  description: 'In-depth articles on robotics, ROS2, embedded systems, and autonomous navigation.',
};

export default function ArticlesPage() {
  return (
    <div style={{ padding: '4rem 0' }}>
      <div className="container">
        <div style={{ marginBottom: '3rem' }}>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: '0.8rem' }}>
            Writing
          </p>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--ink)', marginBottom: '1rem' }}>
            Articles
          </h1>
          <p style={{ color: 'var(--ink-muted)', maxWidth: '55ch', lineHeight: 1.75 }}>
            Practical write-ups on what I build and how it works. Topics span ROS2, embedded control, mechanical design, and autonomous systems.
          </p>
        </div>

        <div className="articles-grid">
          {articles.map((article, i) => (
            <a
              key={article.slug}
              href={`/articles/${article.slug}`}
              className={`article-card${i === 0 ? ' featured' : ''}`}
            >
              {i === 0 ? (
                <>
                  <div>
                    <div className="article-meta">
                      <span className="tag">Featured</span>
                      <span className="article-date">{article.date}</span>
                    </div>
                    <h2 className="article-title">{article.title}</h2>
                    <p className="article-excerpt">{article.excerpt}</p>
                    <span className="article-readmore">{article.readTime} →</span>
                  </div>
                  <div>
                    {article.tags.map(t => (
                      <span key={t} className="tag" style={{ marginRight: '0.4rem', marginBottom: '0.4rem' }}>{t}</span>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div className="article-meta">
                    <span className="tag">{article.tags[0]}</span>
                    <span className="article-date">{article.date}</span>
                  </div>
                  <h2 className="article-title">{article.title}</h2>
                  <p className="article-excerpt">{article.excerpt}</p>
                  <span className="article-readmore">{article.readTime} →</span>
                </>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
