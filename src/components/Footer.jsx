import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      background: 'var(--bg-card)',
      borderTop: '1px solid var(--border-color)',
      marginTop: '4rem',
      padding: '3rem 0 1.5rem',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2.5rem',
          marginBottom: '2.5rem',
        }}>
          {/* Brand */}
          <div>
            <Link to="/" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none',
              marginBottom: '1rem',
            }}>
              <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                <rect width="48" height="48" rx="10" fill="#202024" stroke="#3a3a40" strokeWidth="1"/>
                <g fill="#C47046">
                  <rect x="6" y="6" width="12" height="12" rx="2"/>
                  <rect x="30" y="6" width="12" height="12" rx="2"/>
                  <rect x="6" y="30" width="12" height="12" rx="2"/>
                </g>
                <g fill="#2A2A2F">
                  <rect x="9" y="9" width="6" height="6" rx="1"/>
                  <rect x="33" y="9" width="6" height="6" rx="1"/>
                  <rect x="9" y="33" width="6" height="6" rx="1"/>
                </g>
              </svg>
              <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>QRFlow</span>
            </Link>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
              مولد أكواد QR مجاني وسريع باللغة العربية. أنشئ كود QR مخصص بسهولة واحترافية.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ color: 'var(--text-primary)', fontSize: '1rem', fontWeight: 700, marginBottom: '1rem' }}>
              روابط سريعة
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li><Link to="/" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>الرئيسية</Link></li>
              <li><Link to="/features" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>المميزات</Link></li>
              <li><Link to="/how-to-use" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>كيفية الاستخدام</Link></li>
              <li><Link to="/about" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>عن QRFlow</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ color: 'var(--text-primary)', fontSize: '1rem', fontWeight: 700, marginBottom: '1rem' }}>
              قانوني
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li><Link to="/privacy" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>سياسة الخصوصية</Link></li>
              <li><Link to="/terms" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>شروط الاستخدام</Link></li>
              <li><Link to="/contact" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>تواصل معنا</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: 'var(--text-primary)', fontSize: '1rem', fontWeight: 700, marginBottom: '1rem' }}>
              تواصل معنا
            </h4>
            <a href="mailto:hello@qrflow.app" style={{
              color: 'var(--text-secondary)',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              hello@qrflow.app
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: '1px solid var(--border-color)',
          paddingTop: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
        }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            © {year} QRFlow. جميع الحقوق محفوظة.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            مُصنع بـ <span style={{ color: 'var(--accent-primary)' }}>♥</span> للمجتمع العربي
          </p>
        </div>
      </div>
    </footer>
  )
}
