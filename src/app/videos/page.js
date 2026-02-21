import { videos } from '@/data/videos';

export const metadata = {
  title: 'Videos — Robotics Engineer',
  description: 'Project videos covering robotics builds, tutorials, and live demos.',
};

export default function VideosPage() {
  return (
    <div className="videos-page">
      <div className="container">
        <div style={{ marginBottom: '3rem' }}>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: '0.8rem' }}>
            Project Videos
          </p>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--ink)', marginBottom: '1rem' }}>
            Videos
          </h1>
          <p style={{ color: 'var(--ink-muted)', maxWidth: '55ch', lineHeight: 1.75 }}>
            Build logs, live demos, and tutorials from my robotics projects. Replace the YouTube IDs in <code style={{ fontFamily: 'var(--mono)', fontSize: '0.85em', background: 'var(--accent-light)', color: 'var(--accent)', padding: '0.1em 0.35em', borderRadius: '2px' }}>src/data/videos.js</code> with your own.
          </p>
        </div>

        <div className="videos-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
          {videos.map(video => (
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
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.6rem' }}>
                  {video.tags.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <h2 className="video-title" style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>{video.title}</h2>
                <p style={{ fontSize: '0.85rem', color: 'var(--ink-muted)', lineHeight: 1.6, marginBottom: '0.5rem' }}>{video.description}</p>
                <p className="video-duration">{video.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
