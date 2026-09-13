export default function Contact() {
  return (
    <div>
      {/* Hero */}
      <section style={{ padding: '4rem 0 2rem', textAlign: 'center' }}>
        <div className="container">
          <h1 className="section-title" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            تواصل مع <span style={{ color: 'var(--accent-primary)' }}>QRFlow</span>
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            نحن هنا للإجابة على استفساراتك واستقبال ملاحظاتك واقتراحاتك
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section style={{ padding: '2rem 0 4rem' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <div className="card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'rgba(196, 112, 70, 0.12)',
              color: 'var(--accent-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
            }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </div>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.75rem' }}>
              البريد الإلكتروني
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              للاستفسارات، الاقتراحات، الإبلاغ عن مشاكل، أو أي تعاون، يرجى التواصل معنا عبر البريد الإلكتروني:
            </p>

            <a
              href="mailto:hello@qrflow.app"
              className="btn btn-primary"
              style={{
                display: 'inline-flex',
                fontSize: '1.1rem',
                padding: '1rem 2rem',
                marginBottom: '2rem',
                direction: 'ltr',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '0.5rem' }}>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              hello@qrflow.app
            </a>

            <div style={{
              padding: '1.25rem',
              background: 'rgba(123, 168, 184, 0.08)',
              border: '1px solid rgba(123, 168, 184, 0.2)',
              borderRadius: '12px',
              textAlign: 'right',
            }}>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.8 }}>
                <strong style={{ color: 'var(--accent-secondary)' }}>ملاحظة:</strong> نحن نحاول الرد على جميع الرسائل في أقرب وقت ممكن (عادة خلال 24-48 ساعة). شكرًا لصبرك ودعمك لـ QRFlow!
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginTop: '2rem',
          }}>
            <div className="card" style={{ textAlign: 'center', padding: '1.5rem' }}>
              <div style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h4 style={{ fontWeight: 700, marginBottom: '0.25rem' }}>وقت الرد</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>24-48 ساعة</p>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '1.5rem' }}>
              <div style={{ color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h4 style={{ fontWeight: 700, marginBottom: '0.25rem' }}>عالمي</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>نخدم المستخدمين في جميع أنحاء العالم</p>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '1.5rem' }}>
              <div style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h4 style={{ fontWeight: 700, marginBottom: '0.25rem' }}>خصوصية تامة</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>جميع بياناتك محمية وسرية</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
