const steps = [
  {
    step: '01',
    title: 'اختر نوع المحتوى',
    desc: 'حدد نوع المحتوى الذي تريد تحويله إلى كود QR. يمكنك الاختيار من 12 نوعًا مختلفًا بما في ذلك الروابط، النصوص، شبكات WiFi، جهات الاتصال، البريد الإلكتروني، الهاتف، واتساب، يوتيوب، والمزيد.',
  },
  {
    step: '02',
    title: 'أدخل بياناتك',
    desc: 'املأ الحقول المطلوبة بناءً على نوع المحتوى المختار. على سبيل المثال: أدخل الرابط أو النص، أو بيانات شبكة WiFi، أو معلومات جهة الاتصال. سيتم تحديث المعاينة تلقائيًا.',
  },
  {
    step: '03',
    title: 'خصّص تصميم الكود',
    desc: 'استخدم لوحة الإعدادات لتخصيص مظهر الكود: غير الألوان، اختر شكل النقاط والزوايا، اضبط الحجم والهامش، أضف شعارك الخاص، أو أضف نصًا سفليًا وإطارًا للكود.',
  },
  {
    step: '04',
    title: 'شاهد المعاينة المباشرة',
    desc: 'ترى التغييرات فورًا في لوحة المعاينة على اليمين. تأكد من أن الكود يبدو بالشكل الذي تريده، وتحقق من شريط طول المحتوى للتأكد من أن الكود سيكون قابلاً للقراءة.',
  },
  {
    step: '05',
    title: 'اختبر الكود (موصى به)',
    desc: 'قبل التحميل، امسح الكود بكاميرا هاتفك للتأكد من أنه يعمل بشكل صحيح ويؤدي إلى المحتوى المطلوب. هذا مهم خاصة مع النصوص العربية والبيانات المعقدة.',
  },
  {
    step: '06',
    title: 'حمّل الكود',
    desc: 'اختر الصيغة المناسبة واحفظ الكود على جهازك. الصيغ المدعومة: PNG (للصور عالية الجودة)، SVG (للطباعة والتكبير)، JPEG (للمواقع الإلكترونية)، و PDF (للطباعة والوثائق).',
  },
]

const tips = [
  { title: 'استخدم مستوى تصحيح أخطاء عالي', desc: 'عند إضافة شعار أو عند طباعة الكود على مواد قد تتلف، استخدم مستوى Q أو H لضمان القراءة.' },
  { title: 'تأكد من التباين بين الألوان', desc: 'يجب أن يكون هناك تباين كافٍ بين لون الكود ولون الخلفية. الأفضل استخدام لون داكن على خلفية فاتحة.' },
  { title: 'لا تجعل الكود صغيرًا جدًا', desc: 'يُنصح بأن يكون الحجم الأدنى 2×2 سم عند الطباعة، أو 128 بكسل عند العرض على الشاشات.' },
  { title: 'اختبر على أجهزة متعددة', desc: 'اختبر قراءة الكود على هواتف مختلفة وأنظمة تشغيل متعددة قبل النشر.' },
  { title: 'احتفظ بالنسخة الأصلية', desc: 'احفظ ملف SVG الأصلي للكود، حيث يمكن تكبيره أو تعديله لاحقًا دون فقدان الجودة.' },
  { title: 'استخدم الهامش المناسب', desc: 'اترك هامشًا أبيض حول الكود (على الأقل 4 وحدات) لضمان قدرة الكاميرا على اكتشافه بسهولة.' },
]

export default function HowToUse() {
  return (
    <div>
      {/* Hero */}
      <section style={{ padding: '4rem 0 2rem', textAlign: 'center' }}>
        <div className="container">
          <h1 className="section-title" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            كيفية استخدام <span style={{ color: 'var(--accent-primary)' }}>QRFlow</span>
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            دليل بسيط خطوة بخطوة لإنشاء كود QR احترافي في أقل من دقيقة
          </p>
        </div>
      </section>

      {/* Steps */}
      <section style={{ padding: '2rem 0 4rem' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {steps.map((s, i) => (
              <div key={i} className="card" style={{
                display: 'flex',
                gap: '1.5rem',
                alignItems: 'flex-start',
              }}>
                <div style={{
                  flexShrink: 0,
                  width: '60px',
                  height: '60px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: 'white',
                }}>
                  {s.step}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-card)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 className="section-title">نصائح احترافية</h2>
            <p className="section-subtitle">لضمان أفضل أداء وأعلى جودة لأكواد QR الخاصة بك</p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.25rem',
          }}>
            {tips.map((tip, i) => (
              <div key={i} style={{
                padding: '1.5rem',
                background: 'var(--bg-primary)',
                borderRadius: '12px',
                border: '1px solid var(--border-color)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                  <h4 style={{ fontWeight: 700, fontSize: '1rem' }}>{tip.title}</h4>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
