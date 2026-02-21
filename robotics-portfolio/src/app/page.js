import { articles } from '@/data/articles';
import { videos } from '@/data/videos';

export default function Home() {
  const featuredArticle = articles.find(a => a.featured);
  const recentArticles = articles.filter(a => !a.featured).slice(0, 2);
  const recentVideos = videos.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <p className="hero-eyebrow">Robotics Engineer &amp; Researcher</p>
          <h1>
            Building machines that <em>think</em> and move
          </h1>
          <p className="hero-desc">
            I design autonomous systems — from bare-metal embedded control to full-stack ROS2 navigation stacks.
            Here I write about what I build, what breaks, and what I learn.
          </p>
          <div className="hero-ctas">
            <a href="/articles" className="btn-primary">
              Read Articles →
            </a>
            <a href="/about" className="btn-secondary">
              About Me
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <div className="stat-num">{articles.length}</div>
              <div className="stat-label">Articles</div>
            </div>
            <div>
              <div className="stat-num">{videos.length}</div>
              <div className="stat-label">Project Videos</div>
            </div>
            <div>
              <div className="stat-num">5+</div>
              <div className="stat-label">Years in Robotics</div>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="articles-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Latest Articles</h2>
            <a href="/articles" className="section-link">View all →</a>
          </div>

          <div className="articles-grid">
            {featuredArticle && (
              <a href={`/articles/${featuredArticle.slug}`} className="article-card featured">
                <div>
                  <div className="article-meta">
                    <span className="tag">Featured</span>
                    <span className="article-date">{featuredArticle.date}</span>
                  </div>
                  <h3 className="article-title">{featuredArticle.title}</h3>
                  <p className="article-excerpt">{featuredArticle.excerpt}</p>
                  <span className="article-readmore">{featuredArticle.readTime} →</span>
                </div>
                <div>
                  {featuredArticle.tags.map(t => (
                    <span key={t} className="tag" style={{ marginRight: '0.4rem', marginBottom: '0.4rem' }}>{t}</span>
                  ))}
                </div>
              </a>
            )}
            {recentArticles.map(article => (
              <a key={article.slug} href={`/articles/${article.slug}`} className="article-card">
                <div className="article-meta">
                  <span className="tag">{article.tags[0]}</span>
                  <span className="article-date">{article.date}</span>
                </div>
                <h3 className="article-title">{article.title}</h3>
                <p className="article-excerpt">{article.excerpt}</p>
                <span className="article-readmore">{article.readTime} →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEOS */}
      <section className="videos-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Project Videos</h2>
            <a href="/videos" className="section-link">View all →</a>
          </div>

          <div className="videos-grid">
            {recentVideos.map(video => (
              <div key={video.id} className="video-card">
                <div className="video-thumb">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="video-info">
                  <h3 className="video-title">{video.title}</h3>
                  <p className="video-duration">{video.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
