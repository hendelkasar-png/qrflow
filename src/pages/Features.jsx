const allFeatures = [
  {
    category: 'أنواع المحتوى',
    color: '#C47046',
    items: [
      { title: 'روابط URL', desc: 'أنشئ كود QR لأي رابط ويب' },
      { title: 'نص حر', desc: 'أي نص عربي أو إنجليزي بطول يصل إلى آلاف الأحرف' },
      { title: 'ملفات PDF', desc: 'اربط مباشرة بملفات PDF المستضافة' },
      { title: 'فيديوهات YouTube', desc: 'افتح الفيديو مباشرة في تطبيق يوتيوب' },
      { title: 'فيديوهات مباشرة', desc: 'روابط ملفات فيديو مباشرة' },
      { title: 'شبكات WiFi', desc: 'اتصال تلقائي بشبكة WiFi دون كتابة كلمة المرور' },
      { title: 'جهات اتصال vCard', desc: 'حفظ جهة اتصال مباشرة في دفتر الهاتف' },
      { title: 'بريد إلكتروني', desc: 'فتح بريد جديد مع عنوان وموضوع مسبقين' },
      { title: 'أرقام الهواتف', desc: 'اتصال مباشر برقم الهاتف' },
      { title: 'رسائل SMS', desc: 'فتح رسالة نصية جاهزة' },
      { title: 'واتساب', desc: 'فتح محادثة واتساب مع رسالة افتراضية' },
      { title: 'خرائط Google', desc: 'فتح موقع على خرائط جوجل' },
    ],
  },
  {
    category: 'التخصيص والتصميم',
    color: '#7BA8B8',
    items: [
      { title: 'ألوان مخصصة', desc: 'اختر لون الكود ولون الخلفية بحرية كاملة' },
      { title: 'أشكال النقاط', desc: 'مربع، دائري، مستدير، أعمدة، خطوط' },
      { title: 'أشكال الزوايا', desc: 'تحكم في شكل زوايا الكود الثلاثة' },
      { title: 'مستويات تصحيح الأخطاء', desc: 'L, M, Q, H - من منخفض إلى عالي جدًا' },
      { title: 'تحكم في الحجم', desc: 'من 128px إلى 1024px دقة عالية' },
      { title: 'الهامش', desc: 'اضبط هامش الكود الأبيض حسب الحاجة' },
      { title: 'إضافة شعار', desc: 'ارفع شعارك الخاص بالكود' },
      { title: 'حجم الشعار', desc: 'تحكم دقيق في حجم الشعار داخل الكود' },
      { title: 'إخفاء خلفية الشعار', desc: 'إزالة النقاط خلف الشعار لوضوح أفضل' },
      { title: 'نص سفلي', desc: 'أضف نصًا توضيحيًا أسفل الكود' },
      { title: 'خطوط النص', desc: 'اختر من خطوط Cairo و Tajawal وغيرها' },
      { title: 'إطارات متعددة', desc: 'إطار بسيط، مستدير، أو بظل' },
    ],
  },
  {
    category: 'التحميل والتقنيات',
    color: '#C47046',
    items: [
      { title: 'تحميل PNG', desc: 'صورة نقطية عالية الجودة' },
      { title: 'تحميل SVG', desc: 'صورة متجهة قابلة للتكبير بدون فقدان الجودة' },
      { title: 'تحميل JPEG', desc: 'صورة بحجم أصغر للاستخدام العام' },
      { title: 'تصدير PDF', desc: 'فتح نافذة طباعة PDF مباشرة' },
      { title: 'أسماء ملفات منظمة', desc: 'QRFlow-Code.png - اسم موحد واحترافي' },
      { title: 'دعم UTF-8', desc: 'معالجة صحيحة للغة العربية والرموز الخاصة' },
      { title: 'Byte Mode', desc: 'وضع بايتات لضمان قراءة النصوص العربية' },
      { title: 'معاينة مباشرة', desc: 'تحديث فوري أثناء الكتابة والتعديل' },
      { title: 'نسخ المحتوى', desc: 'نسخ محتوى الكود بنقرة واحدة' },
      { title: 'مشاركة سريعة', desc: 'Web Share API للهواتف المحمولة' },
      { title: 'شريط طول المحتوى', desc: 'تنبيه مرئي عند اقتراب الحد الأقصى' },
      { title: 'إعادة ضبط', desc: 'إرجاع جميع الإعدادات للوضع الافتراضي' },
    ],
  },
  {
    category: 'الخصوصية والأداء',
    color: '#7BA8B8',
    items: [
      { title: 'معالجة محلية', desc: 'كل شيء يتم في متصفحك - لا رفع للخوادم' },
      { title: 'لا تسجيل دخول', desc: 'استخدم الموقع مباشرة بدون حسابات' },
      { title: 'لا تتبع', desc: 'لا نجمع بيانات المستخدمين الشخصية' },
      { title: 'سريع جدًا', desc: 'توليد فوري مع تأخير بسيط لتحسين الأداء' },
      { title: 'تصميم متجاوب', desc: 'يعمل على الهواتف والتابلت والكمبيوتر' },
      { title: 'واجهة RTL', desc: 'دعم كامل للغة العربية من اليمين لليسار' },
      { title: 'خطوط عربية', desc: 'خطوط Cairo و Tajawal واضحة وجميلة' },
      { title: 'إمكانية الوصول', desc: 'عناصر دلالية، تباين ألوان، دعم لوحة المفاتيح' },
      { title: 'جاهز للنشر', desc: 'مبني بـ Vite + React، سريع وخفيف' },
      { title: 'SEO محسّن', desc: 'Meta tags، Schema.org، sitemap، robots.txt' },
      { title: 'PWA جاهز', desc: 'يمكن تحويله إلى تطبيق ويب تقدمي' },
      { title: 'مفتوح المصدر', desc: 'كود منظم وقابل للتعديل والتوسيع' },
    ],
  },
]

export default function Features() {
  return (
    <div>
      {/* Hero */}
      <section style={{ padding: '4rem 0 2rem', textAlign: 'center' }}>
        <div className="container">
          <h1 className="section-title" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            مميزات <span style={{ color: 'var(--accent-primary)' }}>QRFlow</span> الكاملة
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            مجموعة شاملة من الأدوات والخيارات لإنشاء أكواد QR احترافية تلبي جميع احتياجاتك
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ padding: '2rem 0 4rem' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {allFeatures.map((group, gi) => (
              <div key={gi}>
                <h2 style={{
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  marginBottom: '1.5rem',
                  paddingBottom: '0.75rem',
                  borderBottom: `2px solid ${group.color}`,
                  display: 'inline-block',
                  color: group.color,
                }}>
                  {group.category}
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '1rem',
                }}>
                  {group.items.map((item, ii) => (
                    <div key={ii} className="card" style={{ padding: '1.25rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                        <div style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: group.color,
                          flexShrink: 0,
                        }} />
                        <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>{item.title}</h3>
                      </div>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, paddingRight: '1.5rem' }}>
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
