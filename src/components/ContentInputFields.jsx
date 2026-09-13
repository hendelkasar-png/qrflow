import { QR_TYPES } from '../utils/constants.js'

export default function ContentInputFields({ settings, onChange }) {
  const currentType = QR_TYPES.find((t) => t.id === settings.qrType)

  const handleChange = (field, value) => {
    onChange({ ...settings, [field]: value })
  }

  // حقول بسيطة - حقل واحد
  const simpleTypes = ['url', 'text', 'pdf', 'youtube', 'video', 'phone', 'whatsapp', 'maps']

  if (simpleTypes.includes(settings.qrType)) {
    const isTextarea = settings.qrType === 'text'
    return (
      <div>
        <label className="label" htmlFor="content">المحتوى</label>
        {isTextarea ? (
          <textarea
            id="content"
            className="input-field"
            placeholder={currentType?.placeholder || 'أدخل المحتوى...'}
            value={settings.content}
            onChange={(e) => handleChange('content', e.target.value)}
            rows={4}
            style={{ resize: 'vertical', minHeight: '100px' }}
          />
        ) : (
          <input
            id="content"
            type="text"
            className="input-field"
            placeholder={currentType?.placeholder || 'أدخل المحتوى...'}
            value={settings.content}
            onChange={(e) => handleChange('content', e.target.value)}
            dir={settings.qrType === 'url' || settings.qrType === 'pdf' || settings.qrType === 'youtube' || settings.qrType === 'video' || settings.qrType === 'maps' ? 'ltr' : 'rtl'}
          />
        )}
        {settings.qrType === 'whatsapp' && (
          <div style={{ marginTop: '1rem' }}>
            <label className="label" htmlFor="whatsappMessage">الرسالة (اختياري)</label>
            <textarea
              id="whatsappMessage"
              className="input-field"
              placeholder="اكتب رسالة افتراضية..."
              value={settings.whatsappMessage}
              onChange={(e) => handleChange('whatsappMessage', e.target.value)}
              rows={2}
              style={{ resize: 'vertical', minHeight: '60px' }}
            />
          </div>
        )}
      </div>
    )
  }

  // WiFi
  if (settings.qrType === 'wifi') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label className="label" htmlFor="wifiSSID">اسم الشبكة (SSID)</label>
          <input
            id="wifiSSID"
            type="text"
            className="input-field"
            placeholder="HomeWiFi"
            value={settings.wifiSSID}
            onChange={(e) => handleChange('wifiSSID', e.target.value)}
          />
        </div>
        <div>
          <label className="label" htmlFor="wifiPassword">كلمة المرور</label>
          <input
            id="wifiPassword"
            type="text"
            className="input-field"
            placeholder="••••••••"
            value={settings.wifiPassword}
            onChange={(e) => handleChange('wifiPassword', e.target.value)}
          />
        </div>
        <div>
          <label className="label" htmlFor="wifiEncryption">نوع التشفير</label>
          <select
            id="wifiEncryption"
            className="input-field"
            value={settings.wifiEncryption}
            onChange={(e) => handleChange('wifiEncryption', e.target.value)}
          >
            <option value="WPA">WPA/WPA2</option>
            <option value="WEP">WEP</option>
            <option value="nopass">بدون كلمة مرور</option>
          </select>
        </div>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={settings.wifiHidden}
            onChange={(e) => handleChange('wifiHidden', e.target.checked)}
            style={{ width: '18px', height: '18px', accentColor: 'var(--accent-primary)' }}
          />
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>شبكة مخفية</span>
        </label>
      </div>
    )
  }

  // vCard
  if (settings.qrType === 'vcard') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label className="label" htmlFor="vcardName">الاسم الكامل</label>
          <input
            id="vcardName"
            type="text"
            className="input-field"
            placeholder="أحمد محمد"
            value={settings.vcardName}
            onChange={(e) => handleChange('vcardName', e.target.value)}
          />
        </div>
        <div>
          <label className="label" htmlFor="vcardPhone">رقم الهاتف</label>
          <input
            id="vcardPhone"
            type="tel"
            className="input-field"
            placeholder="+966 50 123 4567"
            value={settings.vcardPhone}
            onChange={(e) => handleChange('vcardPhone', e.target.value)}
            dir="ltr"
          />
        </div>
        <div>
          <label className="label" htmlFor="vcardEmail">البريد الإلكتروني</label>
          <input
            id="vcardEmail"
            type="email"
            className="input-field"
            placeholder="name@example.com"
            value={settings.vcardEmail}
            onChange={(e) => handleChange('vcardEmail', e.target.value)}
            dir="ltr"
          />
        </div>
        <div>
          <label className="label" htmlFor="vcardOrg">الشركة / المنظمة</label>
          <input
            id="vcardOrg"
            type="text"
            className="input-field"
            placeholder="شركة تقنية"
            value={settings.vcardOrg}
            onChange={(e) => handleChange('vcardOrg', e.target.value)}
          />
        </div>
        <div>
          <label className="label" htmlFor="vcardUrl">الموقع الإلكتروني</label>
          <input
            id="vcardUrl"
            type="url"
            className="input-field"
            placeholder="https://example.com"
            value={settings.vcardUrl}
            onChange={(e) => handleChange('vcardUrl', e.target.value)}
            dir="ltr"
          />
        </div>
      </div>
    )
  }

  // Email
  if (settings.qrType === 'email') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label className="label" htmlFor="emailAddress">عنوان البريد</label>
          <input
            id="emailAddress"
            type="email"
            className="input-field"
            placeholder="name@example.com"
            value={settings.emailAddress}
            onChange={(e) => handleChange('emailAddress', e.target.value)}
            dir="ltr"
          />
        </div>
        <div>
          <label className="label" htmlFor="emailSubject">الموضوع (اختياري)</label>
          <input
            id="emailSubject"
            type="text"
            className="input-field"
            placeholder="موضوع الرسالة"
            value={settings.emailSubject}
            onChange={(e) => handleChange('emailSubject', e.target.value)}
          />
        </div>
        <div>
          <label className="label" htmlFor="emailBody">نص الرسالة (اختياري)</label>
          <textarea
            id="emailBody"
            className="input-field"
            placeholder="اكتب نص الرسالة..."
            value={settings.emailBody}
            onChange={(e) => handleChange('emailBody', e.target.value)}
            rows={3}
            style={{ resize: 'vertical', minHeight: '80px' }}
          />
        </div>
      </div>
    )
  }

  // SMS
  if (settings.qrType === 'sms') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label className="label" htmlFor="smsPhone">رقم الهاتف</label>
          <input
            id="smsPhone"
            type="tel"
            className="input-field"
            placeholder="+966 50 123 4567"
            value={settings.smsPhone}
            onChange={(e) => handleChange('smsPhone', e.target.value)}
            dir="ltr"
          />
        </div>
        <div>
          <label className="label" htmlFor="smsMessage">نص الرسالة (اختياري)</label>
          <textarea
            id="smsMessage"
            className="input-field"
            placeholder="اكتب الرسالة..."
            value={settings.smsMessage}
            onChange={(e) => handleChange('smsMessage', e.target.value)}
            rows={3}
            style={{ resize: 'vertical', minHeight: '80px' }}
          />
        </div>
      </div>
    )
  }

  return null
}
