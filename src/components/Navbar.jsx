import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'الرئيسية' },
  { to: '/features', label: 'المميزات' },
  { to: '/how-to-use', label: 'كيفية الاستخدام' },
  { to: '/about', label: 'عن QRFlow' },
  { to: '/contact', label: 'تواصل معنا' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(32, 32, 36, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-color)',
    }}>
      <nav className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '70px',
      }}>
        <Link to="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          textDecoration: 'none',
        }}>
          <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
            <rect width="48" height="48" rx="10" fill="#2A2A2F" stroke="#3a3a40" strokeWidth="1"/>
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
            <g fill="#C47046">
              <rect x="30" y="30" width="3" height="3" rx="0.5"/>
              <rect x="35" y="30" width="3" height="3" rx="0.5"/>
              <rect x="40" y="30" width="3" height="3" rx="0.5"/>
              <rect x="30" y="35" width="3" height="3" rx="0.5"/>
              <rect x="40" y="35" width="3" height="3" rx="0.5"/>
              <rect x="30" y="40" width="3" height="3" rx="0.5"/>
              <rect x="35" y="40" width="3" height="3" rx="0.5"/>
              <rect x="40" y="40" width="3" height="3" rx="0.5"/>
            </g>
          </svg>
          <span style={{
            fontSize: '1.4rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            fontFamily: 'Cairo, sans-serif',
          }}>QRFlow</span>
        </Link>

        {/* Desktop Navigation */}
        <ul style={{
          display: 'flex',
          gap: '2rem',
          listStyle: 'none',
          alignItems: 'center',
        }} className="desktop-nav">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                style={({ isActive }) => ({
                  color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  fontWeight: isActive ? 600 : 500,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  padding: '0.5rem 0',
                  borderBottom: isActive ? '2px solid var(--accent-primary)' : '2px solid transparent',
                  transition: 'all 0.2s ease',
                })}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/" className="btn btn-primary" style={{ minHeight: '40px', padding: '0.5rem 1.25rem' }}>
              ابدأ الآن
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="فتح القائمة"
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-primary)',
            padding: '0.5rem',
            cursor: 'pointer',
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isOpen ? (
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          background: 'var(--bg-card)',
          borderTop: '1px solid var(--border-color)',
          padding: '1rem',
        }} className="mobile-menu">
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setIsOpen(false)}
                  style={({ isActive }) => ({
                    display: 'block',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    color: isActive ? 'var(--accent-primary)' : 'var(--text-primary)',
                    background: isActive ? 'rgba(196, 112, 70, 0.1)' : 'transparent',
                    textDecoration: 'none',
                    fontWeight: 500,
                  })}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  )
}
