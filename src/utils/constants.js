// قائمة أنواع أكواد QR المدعومة
export const QR_TYPES = [
  { id: 'url', label: 'رابط URL', icon: 'link', placeholder: 'https://example.com' },
  { id: 'text', label: 'نص حر', icon: 'text', placeholder: 'اكتب النص هنا...' },
  { id: 'pdf', label: 'رابط PDF', icon: 'file', placeholder: 'https://example.com/file.pdf' },
  { id: 'youtube', label: 'فيديو YouTube', icon: 'video', placeholder: 'https://youtube.com/watch?v=...' },
  { id: 'video', label: 'رابط فيديو مباشر', icon: 'play', placeholder: 'https://example.com/video.mp4' },
  { id: 'wifi', label: 'شبكة WiFi', icon: 'wifi', placeholder: '' },
  { id: 'vcard', label: 'جهة اتصال vCard', icon: 'user', placeholder: '' },
  { id: 'email', label: 'بريد إلكتروني', icon: 'mail', placeholder: 'name@example.com' },
  { id: 'phone', label: 'رقم هاتف', icon: 'phone', placeholder: '+966 50 123 4567' },
  { id: 'sms', label: 'رسالة SMS', icon: 'message', placeholder: '' },
  { id: 'whatsapp', label: 'واتساب', icon: 'whatsapp', placeholder: '+966 50 123 4567' },
  { id: 'maps', label: 'خرائط Google', icon: 'map', placeholder: 'https://maps.google.com/?q=...' },
]

// أشكال النقاط
export const DOT_STYLES = [
  { id: 'square', label: 'مربع' },
  { id: 'rounded', label: 'مستدير' },
  { id: 'dots', label: 'دائري' },
  { id: 'columns', label: 'أعمدة' },
  { id: 'lines', label: 'خطوط' },
]

// أشكال الزوايا
export const CORNER_STYLES = [
  { id: 'square', label: 'مربع' },
  { id: 'rounded', label: 'مستدير' },
  { id: 'circle', label: 'دائري' },
]

// مستويات تصحيح الأخطاء
export const ERROR_LEVELS = [
  { id: 'L', label: 'L - منخفض (7%)' },
  { id: 'M', label: 'M - متوسط (15%)' },
  { id: 'Q', label: 'Q - عالي (25%)' },
  { id: 'H', label: 'H - عالي جدًا (30%)' },
]

// أشكال الإطارات
export const FRAME_STYLES = [
  { id: 'none', label: 'بدون إطار' },
  { id: 'simple', label: 'إطار بسيط' },
  { id: 'rounded', label: 'إطار مستدير' },
  { id: 'shadow', label: 'إطار بظل' },
]

// الخطوط المتاحة للنص السفلي
export const FONT_FAMILIES = [
  { id: 'Cairo', label: 'Cairo' },
  { id: 'Tajawal', label: 'Tajawal' },
  { id: 'Arial', label: 'Arial' },
  { id: 'sans-serif', label: 'Sans-serif' },
]

// الإعدادات الافتراضية
export const DEFAULT_SETTINGS = {
  qrType: 'url',
  content: '',
  // WiFi
  wifiSSID: '',
  wifiPassword: '',
  wifiEncryption: 'WPA',
  wifiHidden: false,
  // vCard
  vcardName: '',
  vcardPhone: '',
  vcardEmail: '',
  vcardOrg: '',
  vcardUrl: '',
  // Email
  emailAddress: '',
  emailSubject: '',
  emailBody: '',
  // SMS
  smsPhone: '',
  smsMessage: '',
  // WhatsApp
  whatsappPhone: '',
  whatsappMessage: '',
  // Customization
  fgColor: '#000000',
  bgColor: '#ffffff',
  dotStyle: 'square',
  cornerStyle: 'square',
  errorLevel: 'M',
  size: 300,
  margin: 2,
  // Logo
  logoImage: null,
  logoSize: 60,
  hideLogoBackground: true,
  // Caption
  captionText: '',
  captionFont: 'Cairo',
  captionColor: '#333333',
  // Frame
  frameStyle: 'none',
  frameColor: '#C47046',
}

// أقصى طول للمحتوى حسب مستوى التصحيح والحجم
export const getMaxContentLength = (errorLevel = 'M') => {
  const limits = { L: 4296, M: 3391, Q: 2420, H: 1852 }
  return limits[errorLevel] || 3391
}
