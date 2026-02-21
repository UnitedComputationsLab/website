import { articles } from '@/data/articles';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const article = articles.find(a => a.slug === params.slug);
  if (!article) return {};
  return {
    title: `${article.title} — Robotics Engineer`,
    description: article.excerpt,
  };
}

function renderContent(content) {
  // Simple markdown-ish renderer
  const lines = content.trim().split('\n');
  const elements = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (line.startsWith('## ')) {
      elements.push(<h2 key={i}>{line.slice(3)}</h2>);
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={i}>{line.slice(4)}</h3>);
    } else if (line.startsWith('```')) {
      const lang = line.slice(3);
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      elements.push(
        <pre key={i}>
          <code>{codeLines.join('\n')}</code>
        </pre>
      );
    } else if (line.length > 0) {
      // Inline code with backticks
      const parts = line.split(/(`[^`]+`)/g).map((part, j) => {
        if (part.startsWith('`') && part.endsWith('`')) {
          return <code key={j}>{part.slice(1, -1)}</code>;
        }
        return part;
      });
      elements.push(<p key={i}>{parts}</p>);
    }

    i++;
  }

  return elements;
}

export default function ArticlePage({ params }) {
  const article = articles.find(a => a.slug === params.slug);
  if (!article) notFound();

  return (
    <div className="article-page">
      <a
        href="/articles"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontFamily: 'var(--mono)',
          fontSize: '0.72rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--ink-muted)',
          marginBottom: '2.5rem',
          transition: 'color 0.2s',
        }}
      >
        ← All Articles
      </a>

      <div className="article-page-header">
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          {article.tags.map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
        <h1 className="article-page-title">{article.title}</h1>
        <div className="article-page-meta">
          <span>{article.date}</span>
          <span>·</span>
          <span>{article.readTime}</span>
        </div>
      </div>

      <div className="article-body">
        {renderContent(article.content)}
      </div>
    </div>
  );
}
