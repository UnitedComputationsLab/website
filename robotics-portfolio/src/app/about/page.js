export const metadata = {
  title: 'About — Robotics Engineer',
  description: 'Robotics engineer specializing in autonomous systems, embedded control, and ROS2.',
};

const skills = [
  'ROS2 / ROS1', 'Nav2 Navigation', 'SLAM & Localization', 'PID & MPC Control',
  'Python & C++', 'STM32 / ESP32', 'PCB Design (KiCad)', 'Fusion 360 / SolidWorks',
  'Computer Vision (OpenCV)', 'Machine Learning (PyTorch)', 'Linux & Git', 'Docker',
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-grid">
          {/* Photo */}
          <div className="about-photo-wrap">
            <div className="about-photo-placeholder">
              Your Photo Here
            </div>
            <div className="about-label">Robotics Engineer</div>
          </div>

          {/* Content */}
          <div className="about-content">
            <h2>
              Hi, I&apos;m <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Your Name</em>
            </h2>
            <p>
              I&apos;m a robotics engineer with 5+ years of experience designing and building autonomous systems — from bare-metal embedded firmware to full ROS2 navigation stacks deployed on real hardware.
            </p>
            <p>
              My work spans mobile robotics, robotic arms, and custom electronics. I believe in understanding every layer of the stack, which is why I&apos;m equally comfortable in KiCad designing a motor driver PCB as I am tuning a Nav2 behavior tree.
            </p>
            <p>
              This site is where I document what I build. Articles go deep on the engineering decisions and trade-offs. Videos show the real hardware working — and sometimes failing, which is often more instructive.
            </p>
            <p>
              I&apos;m currently working on [your current project or role]. Previously I [previous experience]. I studied [your degree] at [your university].
            </p>

            {/* Skills */}
            <div style={{ marginTop: '2.5rem' }}>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: '1rem' }}>
                Skills &amp; Tools
              </p>
              <div className="skills-grid">
                {skills.map(skill => (
                  <div key={skill} className="skill-item">
                    <span className="skill-dot" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: '1rem' }}>
                Get in Touch
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="mailto:you@email.com" className="btn-primary">Email Me →</a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="btn-secondary">LinkedIn</a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
