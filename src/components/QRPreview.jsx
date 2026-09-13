import { useEffect, useRef, useState } from 'react'
import { renderQRToCanvas, buildQRContent, downloadFile, generateQRSVG, generatePDF } from '../services/qrService.js'
import { getMaxContentLength } from '../utils/constants.js'

export default function QRPreview({ settings }) {
  const canvasRef = useRef(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState(null)
  const [contentLength, setContentLength] = useState(0)
  const [copied, setCopied] = useState(false)

  // توليد المعاينة عند تغيير الإعدادات
  useEffect(() => {
    let cancelled = false
    const generate = async () => {
      if (!canvasRef.current) return
      setIsGenerating(true)
      setError(null)

      try {
        const content = buildQRContent(settings)
        setContentLength(content ? new Blob([content]).size : 0)

        if (!content) {
          const ctx = canvasRef.current.getContext('2d')
          const w = settings.size + (settings.frameStyle !== 'none' ? 40 : 0)
          const h = settings.size + (settings.captionText ? 40 : 0) + (settings.frameStyle !== 'none' ? 40 : 0)
          canvasRef.current.width = w
          canvasRef.current.height = h
          ctx.fillStyle = settings.bgColor
          ctx.fillRect(0, 0, w, h)
          ctx.fillStyle = '#999'
          ctx.font = '14px Cairo, sans-serif'
          ctx.textAlign = 'center'
          ctx.fillText('أدخل المحتوى لإنشاء الكود', w / 2, h / 2)
          setIsGenerating(false)
          return
        }

        const maxLen = getMaxContentLength(settings.errorLevel)
        if (content.length > maxLen * 0.9) {
          setError(`تحذير: المحتوى طويل جدًا وقد لا يتم قراءته بشكل صحيح.`)
        }

        await renderQRToCanvas(canvasRef.current, settings)
      } catch (err) {
        console.error('Preview error:', err)
        setError('حدث خطأ أثناء توليد الكود. يرجى تقليل حجم المحتوى.')
      }
      setIsGenerating(false)
    }

    const timeout = setTimeout(generate, 150)
    return () => {
      cancelled = true
      clearTimeout(timeout)
    }
  }, [settings])

  const handleDownloadPNG = () => {
    if (!canvasRef.current) return
    const dataUrl = canvasRef.current.toDataURL('image/png')
    downloadFile(dataUrl, 'QRFlow-Code.png', 'image/png')
  }

  const handleDownloadSVG = async () => {
    try {
      const content = buildQRContent(settings)
      if (!content) return
      const svgString = await generateQRSVG(content, {
        errorLevel: settings.errorLevel,
        margin: settings.margin,
        size: settings.size,
        fgColor: settings.fgColor,
        bgColor: settings.bgColor,
      })
      const blob = new Blob([svgString], { type: 'image/svg+xml' })
      const url = URL.createObjectURL(blob)
      downloadFile(url, 'QRFlow-Code.svg', 'image/svg+xml')
      setTimeout(() => URL.revokeObjectURL(url), 1000)
    } catch (err) {
      alert('فشل تحميل SVG')
    }
  }

  const handleDownloadJPEG = () => {
    if (!canvasRef.current) return
    const dataUrl = canvasRef.current.toDataURL('image/jpeg', 0.95)
    downloadFile(dataUrl, 'QRFlow-Code.jpg', 'image/jpeg')
  }

  const handleDownloadPDF = () => {
    if (!canvasRef.current) return
    const dataUrl = canvasRef.current.toDataURL('image/png')
    generatePDF(dataUrl)
  }

  const handleCopyContent = async () => {
    const content = buildQRContent(settings)
    if (!content) return
    try {
      await navigator.clipboard.writeText(content)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      alert('فشل النسخ')
    }
  }

  const handleShare = async () => {
    const content = buildQRContent(settings)
    if (!content) return
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'كود QR من QRFlow',
          text: content,
        })
      } catch (err) {
        // المستخدم ألغى المشاركة
      }
    } else {
      handleCopyContent()
    }
  }

  const maxLen = getMaxContentLength(settings.errorLevel)
  const usagePercent = Math.min(100, (contentLength / maxLen) * 100)

  return (
    <div className="card" style={{
      position: 'sticky',
      top: '90px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1.25rem',
    }}>
      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, alignSelf: 'flex-start' }}>المعاينة المباشرة</h3>

      {/* معاينة الكود */}
      <div style={{
        padding: '1rem',
        background: 'var(--bg-primary)',
        borderRadius: '12px',
        border: '1px solid var(--border-color)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '320px',
        width: '100%',
        position: 'relative',
      }}>
        {isGenerating && (
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
          }}>
            جاري التحديث...
          </div>
        )}
        <canvas
          ref={canvasRef}
          style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '4px',
            opacity: isGenerating ? 0.5 : 1,
            transition: 'opacity 0.2s',
          }}
        />
      </div>

      {/* شريط طول المحتوى */}
      <div style={{ width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
          <span>طول المحتوى</span>
          <span>{contentLength} / {maxLen}</span>
        </div>
        <div style={{
          height: '6px',
          background: 'var(--bg-primary)',
          borderRadius: '3px',
          overflow: 'hidden',
        }}>
          <div style={{
            height: '100%',
            width: `${usagePercent}%`,
            background: usagePercent > 85 ? 'var(--error)' : usagePercent > 60 ? 'var(--warning)' : 'var(--accent-primary)',
            borderRadius: '3px',
            transition: 'all 0.3s',
          }} />
        </div>
      </div>

      {error && (
        <div style={{
          width: '100%',
          padding: '0.75rem 1rem',
          background: 'rgba(229, 115, 115, 0.1)',
          border: '1px solid rgba(229, 115, 115, 0.3)',
          borderRadius: '8px',
          color: 'var(--error)',
          fontSize: '0.85rem',
        }}>
          {error}
        </div>
      )}

      {/* أزرار التحميل */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
          <button onClick={handleDownloadPNG} className="btn btn-primary" style={{ padding: '0.7rem 1rem', fontSize: '0.9rem' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            PNG
          </button>
          <button onClick={handleDownloadSVG} className="btn btn-secondary" style={{ padding: '0.7rem 1rem', fontSize: '0.9rem' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            SVG
          </button>
          <button onClick={handleDownloadJPEG} className="btn btn-secondary" style={{ padding: '0.7rem 1rem', fontSize: '0.9rem' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            JPEG
          </button>
          <button onClick={handleDownloadPDF} className="btn btn-secondary" style={{ padding: '0.7rem 1rem', fontSize: '0.9rem' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
            </svg>
            PDF
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
          <button onClick={handleCopyContent} className="btn btn-ghost" style={{ padding: '0.6rem 0.75rem', fontSize: '0.85rem', border: '1px solid var(--border-color)' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            {copied ? 'تم النسخ!' : 'نسخ المحتوى'}
          </button>
          <button onClick={handleShare} className="btn btn-ghost" style={{ padding: '0.6rem 0.75rem', fontSize: '0.85rem', border: '1px solid var(--border-color)' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
            مشاركة
          </button>
        </div>
      </div>
    </div>
  )
}
