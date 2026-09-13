export default function About() {
  return (
    <div>
      {/* Hero */}
      <section style={{ padding: '4rem 0 2rem', textAlign: 'center' }}>
        <div className="container">
          <h1 className="section-title" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            عن <span style={{ color: 'var(--accent-primary)' }}>QRFlow</span>
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '650px', margin: '0 auto 2rem' }}>
            قصة ورؤية منصة QRFlow، المولد العربي الأول لأكواد QR المجانية والاحترافية
          </p>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: '2rem 0 4rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="card" style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--accent-primary)' }}>
              قصتنا
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 2, marginBottom: '1rem' }}>
              وُلدت فكرة QRFlow من حاجة بسيطة: الحاجة إلى أداة عربية موثوقة وسهلة الاستخدام لإنشاء أكواد QR دون تعقيدات أو رسوم خفية. لاحظنا أن معظم الأدوات المتاحة إما باللغة الإنجليزية فقط، أو تتطلب تسجيل دخول، أو تفرض قيودًا على الاستخدام المجاني.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 2, marginBottom: '1rem' }}>
              قررنا بناء منصة عربية كاملة، مصممة خصيصًا لاحتياجات المستخدم العربي، مع دعم كامل للغة العربية في الواجهة وفي محتوى أكواد QR نفسها. هدفنا هو جعل تقنية QR متاحة للجميع، من الأفراد إلى الشركات الصغيرة والمتوسطة.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 2 }}>
              نؤمن بأن التكنولوجيا يجب أن تكون بسيطة ومتاحة. QRFlow هو تعبير عن هذا الإيمان: أداة قوية، سريعة، مجانية، ومفتوحة للجميع.
            </p>
          </div>

          <div className="card" style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--accent-secondary)' }}>
              رؤيتنا
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 2 }}>
              أن نكون المنصة العربية الرائدة والأكثر موثوقية لإنشاء أكواد QR، نساهم في جسر الفجوة الرقمية في المنطقة العربية، ونمكّن الأفراد والشركات من الاستفادة من تقنية QR في حياتهم اليومية وأعمالهم.
            </p>
          </div>

          <div className="card">
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--accent-primary)' }}>
              قيمنا
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
              <div>
                <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>🔒 الخصوصية أولاً</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  بياناتك تبقى معك. لا نرفع أي محتوى إلى خوادمنا أبدًا.
                </p>
              </div>
              <div>
                <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>✨ الجودة والاحترافية</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  نلتزم بأعلى معايير الجودة في التصميم والأداء والتجربة.
                </p>
              </div>
              <div>
                <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>🤝 الإنفتاح والمجتمع</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  نستمع لمستخدمينا ونطور المنصة بناءً على ملاحظاتهم واحتياجاتهم.
                </p>
              </div>
              <div>
                <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>🇸🇦 دعم اللغة العربية</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  نفتخر بتقديم تجربة عربية متكاملة، من الواجهة إلى محتوى أكواد QR.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
