export default function Privacy() {
  return (
    <div>
      <section style={{ padding: '4rem 0 2rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 className="section-title" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', marginBottom: '0.5rem' }}>
            سياسة الخصوصية
          </h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            آخر تحديث: سبتمبر 2026
          </p>

          <div className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--accent-primary)' }}>
                1. مقدمة
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 2 }}>
                نحن في QRFlow نقدر خصوصيتك ونلتزم بحماية بياناتك. توضح سياسة الخصوصية هذه كيفية تعاملنا مع المعلومات عند استخدامك لمنصتنا. المبدأ الأساسي بسيط: <strong>كل شيء يحدث محليًا داخل متصفحك، ولا نجمع أو نخزن أو نرفع أي بيانات شخصية أو محتوى أكواد QR التي تنشئها.</strong>
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--accent-primary)' }}>
                2. كيف يعمل QRFlow
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 2, marginBottom: '0.75rem' }}>
                تم تصميم QRFlow ليعمل بالكامل على جهازك (عميل-side) باستخدام JavaScript:
              </p>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: 2, paddingRight: '1.5rem', listStyle: 'disc' }}>
                <li>يتم توليد جميع أكواد QR محليًا داخل متصفحك باستخدام مكتبة qrcode.</li>
                <li>لا يتم إرسال النصوص أو الروابط أو الصور أو أي بيانات أخرى إلى خوادمنا.</li>
                <li>لا نستخدم أي قواعد بيانات لتخزين محتوى المستخدمين.</li>
                <li>الملفات التي ترفعها كشعارات تظل على جهازك ولا تُرفع أبدًا.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--accent-primary)' }}>
                3. المعلومات التي قد نجمعها
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 2, marginBottom: '0.75rem' }}>
                نظرًا لأن المعالجة كلها محلية، فإننا <strong>لا نجمع أي معلومات شخصية</strong>. ومع ذلك، قد يتم جمع معلومات تقنية أساسية من قبل خدمة الاستضافة (مثل Vercel أو Netlify) لأغراض تشغيل الموقع فقط، وتشمل:
              </p>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: 2, paddingRight: '1.5rem', listStyle: 'disc' }}>
                <li>عنوان IP (قد يتم تخزينه مؤقتًا في سجلات الخادم)</li>
                <li>نوع المتصفح ونظام التشغيل</li>
                <li>الصفحات التي تمت زيارتها</li>
                <li>أوقات الوصول</li>
              </ul>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 2, marginTop: '0.75rem' }}>
                هذه البيانات تقنية فقط ولا يمكن استخدامها لتحديد هويتك الشخصية مباشرة.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--accent-primary)' }}>
                4. ملفات تعريف الارتباط (Cookies)
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 2 }}>
                QRFlow <strong>لا يستخدم ملفات تعريف الارتباط</strong> لأغراض التتبع أو الإعلانات. قد يستخدم المتصفح تخزينًا محليًا (localStorage) مؤقتًا لتحسين الأداء، ولكن هذا يظل على جهازك ولا يُرسل إلى أي خادم.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--accent-primary)' }}>
                5. الخدمات الخارجية
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 2, marginBottom: '0.75rem' }}>
                قد يستخدم الموقع خدمات خارجية لتحسين الأداء، مثل:
              </p>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: 2, paddingRight: '1.5rem', listStyle: 'disc' }}>
                <li><strong>Google Fonts:</strong> لتحميل الخطوط العربية. قد يتم جمع بيانات استخدام من قبل Google.</li>
                <li><strong>خدمات الاستضافة:</strong> مثل Vercel أو Netlify لتشغيل الموقع.</li>
              </ul>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 2, marginTop: '0.75rem' }}>
                نوصي بمراجعة سياسات الخصوصية لهذه الخدمات لفهم ممارساتهم.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--accent-primary)' }}>
                6. مسؤولية المستخدم
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 2 }}>
                أنت المسؤول الوحيد عن المحتوى الذي تدخله في QRFlow وعن كيفية استخدام أكواد QR التي تنشئها. ننصح بعدم وضع معلومات حساسة أو شخصية في أكواد QR العامة.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--accent-primary)' }}>
                7. التغييرات المستقبلية
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 2 }}>
                قد يتم تحديث هذه السياسة في المستقبل إذا تمت إضافة ميزات جديدة تتطلب خدمات خارجية. سيتم الإشارة إلى أي تغييرات بوضوح في هذه الصفحة مع تحديث تاريخ "آخر تحديث".
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--accent-primary)' }}>
                8. الإعلانات والتتبع
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 2 }}>
                حاليًا، لا نعرض أي إعلانات ولا نستخدم أي أدوات تتبع سلوكي أو تحليلات تجمع بيانات المستخدمين الشخصية.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--accent-primary)' }}>
                9. تواصل معنا
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 2 }}>
                لأي استفسارات حول سياسة الخصوصية، يرجى التواصل معنا عبر البريد الإلكتروني:{' '}
                <a href="mailto:hello@qrflow.app" style={{ direction: 'ltr', display: 'inline-block' }}>hello@qrflow.app</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
