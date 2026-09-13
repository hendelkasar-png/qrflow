import { useRef } from 'react'
import { DOT_STYLES, CORNER_STYLES, ERROR_LEVELS, FRAME_STYLES, FONT_FAMILIES } from '../utils/constants.js'
import { fileToDataURL } from '../services/qrService.js'

export default function QRSettingsPanel({ settings, onChange, onReset }) {
  const logoInputRef = useRef(null)

  const handleLogoUpload = async (e) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert('حجم الصورة يجب أن يكون أقل من 2 ميجابايت')
        return
      }
      try {
        const dataUrl = await fileToDataURL(file)
        onChange({ ...settings, logoImage: dataUrl })
      } catch (err) {
        alert('فشل تحميل الصورة')
      }
    }
  }

  const removeLogo = () => {
    onChange({ ...settings, logoImage: null })
    if (logoInputRef.current) logoInputRef.current.value = ''
  }

  const Section = ({ title, children, defaultOpen = true }) => (
    <details open={defaultOpen} style={{
      borderBottom: '1px solid var(--border-color)',
      padding: '0.75rem 0',
    }}>
      <summary style={{
        cursor: 'pointer',
        fontWeight: 600,
        color: 'var(--text-primary)',
        fontSize: '0.95rem',
        padding: '0.25rem 0',
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <span>{title}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transition: 'transform 0.2s' }}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </summary>
      <div style={{ paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {children}
      </div>
      <style>{`
        details[open] summary svg { transform: rotate(180deg); }
        summary::-webkit-details-marker { display: none; }
      `}</style>
    </details>
  )

  const ColorRow = ({ label, value, field }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <label className="label" style={{ marginBottom: 0, flex: 1 }}>{label}</label>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <input
          type="color"
          value={value}
          onChange={(e) => onChange({ ...settings, [field]: e.target.value })}
          style={{
            width: '44px',
            height: '36px',
            border: '1px solid var(--border-color)',
            borderRadius: '8px',
            cursor: 'pointer',
            background: 'none',
            padding: '2px',
          }}
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange({ ...settings, [field]: e.target.value })}
          style={{
            width: '90px',
            padding: '0.5rem',
            background: 'var(--bg-primary)',
            border: '1px solid var(--border-color)',
            borderRadius: '8px',
            color: 'var(--text-primary)',
            fontSize: '0.85rem',
            fontFamily: 'monospace',
            direction: 'ltr',
          }}
        />
      </div>
    </div>
  )

  const SelectRow = ({ label, value, field, options }) => (
    <div>
      <label className="label">{label}</label>
      <select
        className="input-field"
        value={value}
        onChange={(e) => onChange({ ...settings, [field]: e.target.value })}
      >
        {options.map((opt) => (
          <option key={opt.id} value={opt.id}>{opt.label}</option>
        ))}
      </select>
    </div>
  )

  const SliderRow = ({ label, value, field, min, max, step = 1, unit = '' }) => (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
        <label className="label" style={{ marginBottom: 0 }}>{label}</label>
        <span style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '0.875rem' }}>
          {value}{unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange({ ...settings, [field]: Number(e.target.value) })}
        style={{ width: '100%', accentColor: 'var(--accent-primary)' }}
      />
    </div>
  )

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>إعدادات التخصيص</h3>
        <button
          onClick={onReset}
          className="btn btn-ghost"
          style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', minHeight: '36px' }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ display: 'inline', marginLeft: '4px' }}>
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" />
          </svg>
          إعادة الضبط
        </button>
      </div>

      <Section title="الألوان">
        <ColorRow label="لون الكود" value={settings.fgColor} field="fgColor" />
        <ColorRow label="لون الخلفية" value={settings.bgColor} field="bgColor" />
      </Section>

      <Section title="الشكل والتصميم" defaultOpen={false}>
        <SelectRow label="شكل النقاط" value={settings.dotStyle} field="dotStyle" options={DOT_STYLES} />
        <SelectRow label="شكل الزوايا" value={settings.cornerStyle} field="cornerStyle" options={CORNER_STYLES} />
        <SelectRow label="مستوى تصحيح الأخطاء" value={settings.errorLevel} field="errorLevel" options={ERROR_LEVELS} />
      </Section>

      <Section title="الحجم والهامش" defaultOpen={false}>
        <SliderRow label="حجم الكود" value={settings.size} field="size" min={128} max={1024} step={32} unit="px" />
        <SliderRow label="الهامش" value={settings.margin} field="margin" min={0} max={10} step={1} />
      </Section>

      <Section title="الشعار" defaultOpen={false}>
        <div>
          <label className="label">رفع شعار (اختياري)</label>
          <input
            ref={logoInputRef}
            type="file"
            accept="image/*"
            onChange={handleLogoUpload}
            style={{ display: 'none' }}
            id="logo-upload"
          />
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <label htmlFor="logo-upload" className="btn btn-secondary" style={{ cursor: 'pointer', minHeight: '40px', padding: '0.5rem 1rem' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              اختيار صورة
            </label>
            {settings.logoImage && (
              <>
                <img src={settings.logoImage} alt="logo preview" style={{ width: '40px', height: '40px', objectFit: 'contain', borderRadius: '6px', border: '1px solid var(--border-color)' }} />
                <button onClick={removeLogo} className="btn btn-ghost" style={{ padding: '0.4rem 0.75rem', fontSize: '0.8rem', color: 'var(--error)', minHeight: '36px' }}>
                  إزالة
                </button>
              </>
            )}
          </div>
          {settings.logoImage && (
            <>
              <SliderRow label="حجم الشعار" value={settings.logoSize} field="logoSize" min={20} max={150} step={5} unit="px" />
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={settings.hideLogoBackground}
                  onChange={(e) => onChange({ ...settings, hideLogoBackground: e.target.checked })}
                  style={{ width: '18px', height: '18px', accentColor: 'var(--accent-primary)' }}
                />
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>إخفاء النقاط خلف الشعار</span>
              </label>
            </>
          )}
        </div>
      </Section>

      <Section title="النص السفلي" defaultOpen={false}>
        <div>
          <label className="label">النص (اختياري)</label>
          <input
            type="text"
            className="input-field"
            placeholder="اكتب نصًا أسفل الكود..."
            value={settings.captionText}
            onChange={(e) => onChange({ ...settings, captionText: e.target.value })}
          />
        </div>
        {settings.captionText && (
          <>
            <SelectRow label="نوع الخط" value={settings.captionFont} field="captionFont" options={FONT_FAMILIES} />
            <ColorRow label="لون النص" value={settings.captionColor} field="captionColor" />
          </>
        )}
      </Section>

      <Section title="الإطار" defaultOpen={false}>
        <SelectRow label="شكل الإطار" value={settings.frameStyle} field="frameStyle" options={FRAME_STYLES} />
        {settings.frameStyle !== 'none' && (
          <ColorRow label="لون الإطار" value={settings.frameColor} field="frameColor" />
        )}
      </Section>
    </div>
  )
}
