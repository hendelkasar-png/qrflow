import QRGenerator from '../components/QRGenerator.jsx'
import { Link } from 'react-router-dom'

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'سريع ومباشر',
    desc: 'أنشئ كود QR في ثوانٍ دون تسجيل دخول أو انتظار.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: 'تخصيص كامل',
    desc: 'تحكم في الألوان، الأشكال، الحجم، الشعار، والنص السفلي.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'خصوصية تامة',
    desc: 'كل شيء يتم محليًا في متصفحك. لا نرفع أي بيانات إلى خوادمنا.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
    title: 'صيغ متعددة',
    desc: 'حمّل كودك بصيغ PNG عالية الجودة، SVG، JPEG، و PDF.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
    title: '12 نوع محتوى',
    desc: 'روابط، نصوص، WiFi، جهات اتصال، بريد، هاتف، واتساب، يوتيوب، والمزيد.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: 'دعم كامل للعربية',
    desc: 'معالجة صحيحة للنصوص العربية باستخدام UTF-8 و Byte mode.',
  },
]

const useCases = [
  { title: 'القوائم التجارية', desc: 'قوائم مطاعم ومحلات قابلة للمسح الضوئي' },
  { title: 'بطاقات العمل', desc: 'بطاقات عمل رقمية يمكن حفظها مباشرة' },
  { title: 'شبكات WiFi', desc: 'مشاركة كلمة مرور WiFi بسهولة' },
  { title: 'روابط المنتجات', desc: 'ربط المنتجات بالمواقع الإلكترونية' },
  { title: 'حملات تسويقية', desc: 'تتبع وتحليل الحملات التسويقية' },
  { title: 'المدفوعات', desc: 'روابط دفع سريعة وآمنة' },
]

const faqs = [
  {
    q: 'هل QRFlow مجاني بالكامل؟',
    a: 'نعم، QRFlow مجاني بالكامل لإنشاء وتحميل أكواد QR. لا يوجد اشتراكات أو رسوم خفية.',
  },
  {
    q: 'هل يتم رفع بياناتي إلى خوادمكم؟',
    a: 'لا. يتم إنشاء جميع أكواد QR محليًا داخل متصفحك باستخدام JavaScript. لا نرسل أي بيانات إلى خوادمنا أبدًا.',
  },
  {
    q: 'ما هي الصيغ المدعومة للتحميل؟',
    a: 'يمكنك تحميل أكواد QR بصيغ PNG عالية الجودة، SVG متجه، JPEG، و PDF.',
  },
  {
    q: 'هل تدعمون النصوص العربية؟',
    a: 'نعم تمامًا. نستخدم ترميز UTF-8 صحيح مع Byte mode لضمان قراءة النصوص العربية بشكل مثالي من جميع أجهزة القراءة.',
  },
  {
    q: 'هل يمكنني إضافة شعاري للكود؟',
    a: 'نعم، يمكنك رفع شعارك والتحكم في حجمه. يُنصح باستخدام مستوى تصحيح أخطاء عالي (Q أو H) عند إضافة شعار.',
  },
  {
    q: 'ما هو الحد الأقصى لطول المحتوى؟',
    a: 'يعتمد على مستوى تصحيح الأخطاء: L (4296 بايت)، M (3391 بايت)، Q (2420 بايت)، H (1852 بايت). يُظهر التطبيق شريطًا يشير إلى الاستخدام.',
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{
        padding: '4rem 0 3rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '-50%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(196, 112, 70, 0.15) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 1rem',
            background: 'rgba(196, 112, 70, 0.1)',
            border: '1px solid rgba(196, 112, 70, 0.3)',
            borderRadius: '50px',
            color: 'var(--accent-primary)',
            fontSize: '0.85rem',
            fontWeight: 600,
            marginBottom: '1.5rem',
          }}>
            <span style={{ width: '8px', height: '8px', background: 'var(--accent-primary)', borderRadius: '50%' }} />
            مجاني بالكامل · لا يحتاج تسجيل دخول
          </div>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.25rem)',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '1rem',
            maxWidth: '800px',
            marginInline: 'auto',
          }}>
            مولد أكواد <span style={{ color: 'var(--accent-primary)' }}>QR</span> عربي
            <br />
            سريع ومجاني واحترافي
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.8,
          }}>
            أنشئ كود QR مخصص للروابط، النصوص، WiFi، جهات الاتصال، البريد، الهاتف، واتساب، يوتيوب، والمزيد. حمّل بصيغ متعددة مع خيارات تخصيص متقدمة.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#generator" className="btn btn-primary" style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}>
              ابدأ الآن مجانًا
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <Link to="/how-to-use" className="btn btn-secondary" style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}>
              كيفية الاستخدام
            </Link>
          </div>
        </div>
      </section>

      {/* QR Generator Section */}
      <section id="generator" style={{ padding: '2rem 0 4rem' }}>
        <div className="container">
          <QRGenerator />
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-card)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">لماذا QRFlow؟</h2>
            <p className="section-subtitle">كل ما تحتاجه لإنشاء أكواد QR احترافية في مكان واحد</p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}>
            {features.map((f, i) => (
              <div key={i} className="card" style={{
                transition: 'transform 0.2s ease, border-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.borderColor = 'var(--accent-primary)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'var(--border-color)'
              }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  background: 'rgba(196, 112, 70, 0.12)',
                  color: 'var(--accent-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                }}>
                  {f.icon}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>{f.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">أين تستخدم أكواد QR؟</h2>
            <p className="section-subtitle">استخدامات عملية ومتنوعة للأعمال والأفراد</p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
          }}>
            {useCases.map((u, i) => (
              <div key={i} style={{
                padding: '1.5rem',
                background: 'var(--bg-card)',
                borderRadius: '12px',
                border: '1px solid var(--border-color)',
                textAlign: 'center',
              }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: 'rgba(123, 168, 184, 0.12)',
                  color: 'var(--accent-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 0.75rem',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.35rem' }}>{u.title}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Space Placeholder */}
      <section style={{ padding: '2rem 0' }}>
        <div className="container">
          <div style={{
            padding: '2rem',
            background: 'var(--bg-card)',
            borderRadius: '16px',
            border: '2px dashed var(--border-color)',
            textAlign: 'center',
            color: 'var(--text-muted)',
            fontSize: '0.9rem',
          }}>
            <span style={{ opacity: 0.6 }}>مساحة إعلانية · يمكن تفعيلها مستقبلًا</span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">الأسئلة الشائعة</h2>
            <p className="section-subtitle">إجابات على أكثر الأسئلة شيوعًا حول QRFlow</p>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqs.map((faq, i) => (
              <details key={i} style={{
                borderBottom: '1px solid var(--border-color)',
                padding: '1rem 0',
              }}>
                <summary style={{
                  cursor: 'pointer',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  fontSize: '1rem',
                  padding: '0.5rem 0',
                  listStyle: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                }}>
                  <span>{faq.q}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0, transition: 'transform 0.2s', color: 'var(--accent-primary)' }}>
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <p style={{
                  padding: '0.5rem 0 1rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  fontSize: '0.95rem',
                }}>
                  {faq.a}
                </p>
                <style>{`
                  details[open] summary svg { transform: rotate(180deg); }
                  summary::-webkit-details-marker { display: none; }
                `}</style>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{
            padding: '3rem 2rem',
            background: 'linear-gradient(135deg, rgba(196, 112, 70, 0.15) 0%, rgba(123, 168, 184, 0.1) 100%)',
            borderRadius: '20px',
            border: '1px solid var(--border-color)',
            textAlign: 'center',
          }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, marginBottom: '0.75rem' }}>
              جاهز لإنشاء كود QR الأول؟
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', maxWidth: '500px', marginInline: 'auto' }}>
              انضم إلى آلاف المستخدمين الذين يثقون بـ QRFlow لإنشاء أكواد QR احترافية مجانًا.
            </p>
            <a href="#generator" className="btn btn-primary" style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}>
              ابدأ الآن مجانًا
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
