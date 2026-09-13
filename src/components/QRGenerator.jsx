import { useState } from 'react'
import QRTypeTabs from './QRTypeTabs.jsx'
import ContentInputFields from './ContentInputFields.jsx'
import QRSettingsPanel from './QRSettingsPanel.jsx'
import QRPreview from './QRPreview.jsx'
import { DEFAULT_SETTINGS } from '../utils/constants.js'

export default function QRGenerator() {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS)

  const handleTypeChange = (type) => {
    setSettings((prev) => ({
      ...prev,
      qrType: type,
      content: '',
    }))
  }

  const handleReset = () => {
    setSettings(DEFAULT_SETTINGS)
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 420px',
      gap: '2rem',
      alignItems: 'start',
    }} className="qr-generator-grid">
      {/* العمود الأيسر - الإدخال والإعدادات */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* أنواع أكواد QR */}
        <div className="card">
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem' }}>اختر نوع المحتوى</h3>
          <QRTypeTabs activeType={settings.qrType} onChange={handleTypeChange} />
          <ContentInputFields settings={settings} onChange={setSettings} />
        </div>

        {/* لوحة الإعدادات */}
        <div className="card">
          <QRSettingsPanel settings={settings} onChange={setSettings} onReset={handleReset} />
        </div>
      </div>

      {/* العمود الأيمن - المعاينة والتحميل */}
      <div>
        <QRPreview settings={settings} />
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .qr-generator-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
