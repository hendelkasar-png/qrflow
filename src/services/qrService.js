import QRCode from 'qrcode'

/**
 * إنشاء محتوى QR حسب النوع المختار
 */
export const buildQRContent = (settings) => {
  const { qrType } = settings

  switch (qrType) {
    case 'url':
    case 'text':
    case 'pdf':
    case 'youtube':
    case 'video':
    case 'maps':
      return settings.content || ''

    case 'wifi': {
      const { wifiSSID, wifiPassword, wifiEncryption, wifiHidden } = settings
      if (!wifiSSID) return ''
      const enc = wifiEncryption === 'nopass' ? 'nopass' : wifiEncryption
      const hidden = wifiHidden ? 'H:true;' : ''
      return `WIFI:T:${enc};S:${escapeWifiString(wifiSSID)};P:${escapeWifiString(wifiPassword)};${hidden};`
    }

    case 'vcard': {
      const { vcardName, vcardPhone, vcardEmail, vcardOrg, vcardUrl } = settings
      if (!vcardName && !vcardPhone && !vcardEmail) return ''
      let vcard = 'BEGIN:VCARD\nVERSION:3.0\n'
      if (vcardName) vcard += `FN:${vcardName}\n`
      if (vcardPhone) vcard += `TEL:${vcardPhone}\n`
      if (vcardEmail) vcard += `EMAIL:${vcardEmail}\n`
      if (vcardOrg) vcard += `ORG:${vcardOrg}\n`
      if (vcardUrl) vcard += `URL:${vcardUrl}\n`
      vcard += 'END:VCARD'
      return vcard
    }

    case 'email': {
      const { emailAddress, emailSubject, emailBody } = settings
      if (!emailAddress) return ''
      let mailto = `mailto:${emailAddress}`
      const params = []
      if (emailSubject) params.push(`subject=${encodeURIComponent(emailSubject)}`)
      if (emailBody) params.push(`body=${encodeURIComponent(emailBody)}`)
      if (params.length > 0) mailto += `?${params.join('&')}`
      return mailto
    }

    case 'phone': {
      if (!settings.content) return ''
      return `tel:${settings.content.replace(/\s/g, '')}`
    }

    case 'sms': {
      const { smsPhone, smsMessage } = settings
      if (!smsPhone) return ''
      let sms = `SMSTO:${smsPhone.replace(/\s/g, '')}`
      if (smsMessage) sms += `:${smsMessage}`
      return sms
    }

    case 'whatsapp': {
      const { whatsappPhone, whatsappMessage } = settings
      if (!whatsappPhone) return ''
      const phone = whatsappPhone.replace(/\D/g, '')
      let url = `https://wa.me/${phone}`
      if (whatsappMessage) url += `?text=${encodeURIComponent(whatsappMessage)}`
      return url
    }

    default:
      return settings.content || ''
  }
}

/**
 * تهريب الأحرف الخاصة في سلسلة WiFi
 */
const escapeWifiString = (str) => {
  if (!str) return ''
  return str.replace(/([\\;,"':])/g, '\\$1')
}

/**
 * توليد كود QR وإرجاع Data URL بصيغة PNG
 */
export const generateQRDataURL = async (content, options = {}) => {
  if (!content) return null

  const defaultOpts = {
    errorCorrectionLevel: options.errorLevel || 'M',
    margin: options.margin ?? 2,
    width: options.size || 300,
    color: {
      dark: options.fgColor || '#000000',
      light: options.bgColor || '#ffffff',
    },
  }

  try {
    return await QRCode.toDataURL(content, defaultOpts)
  } catch (error) {
    console.error('QR generation error:', error)
    throw error
  }
}

/**
 * توليد كود QR بصيغة SVG
 */
export const generateQRSVG = async (content, options = {}) => {
  if (!content) return null

  const defaultOpts = {
    errorCorrectionLevel: options.errorLevel || 'M',
    margin: options.margin ?? 2,
    width: options.size || 300,
    color: {
      dark: options.fgColor || '#000000',
      light: options.bgColor || '#ffffff',
    },
    type: 'svg',
  }

  try {
    return await QRCode.toString(content, defaultOpts)
  } catch (error) {
    console.error('QR SVG generation error:', error)
    throw error
  }
}

/**
 * رسم كود QR على Canvas مع دعم الشعار والنص السفلي والإطار
 */
export const renderQRToCanvas = async (canvas, settings) => {
  const content = buildQRContent(settings)
  if (!content) {
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    return null
  }

  const ctx = canvas.getContext('2d')
  const qrSize = settings.size
  const captionHeight = settings.captionText ? 40 : 0
  const framePadding = settings.frameStyle !== 'none' ? 20 : 0
  const totalHeight = qrSize + captionHeight + framePadding * 2
  const totalWidth = qrSize + framePadding * 2

  canvas.width = totalWidth
  canvas.height = totalHeight

  // خلفية
  ctx.fillStyle = settings.bgColor
  ctx.fillRect(0, 0, totalWidth, totalHeight)

  // إنشاء QR مؤقت للحصول على البيانات
  const qrCanvas = document.createElement('canvas')
  await QRCode.toCanvas(qrCanvas, content, {
    errorCorrectionLevel: settings.errorLevel,
    margin: settings.margin,
    width: qrSize,
    color: {
      dark: settings.fgColor,
      light: settings.bgColor,
    },
  })

  // رسم QR على الكانفاس الرئيسي
  ctx.drawImage(qrCanvas, framePadding, framePadding)

  // رسم الشعار
  if (settings.logoImage) {
    const logoSize = settings.logoSize
    const logoX = framePadding + (qrSize - logoSize) / 2
    const logoY = framePadding + (qrSize - logoSize) / 2

    if (settings.hideLogoBackground) {
      ctx.fillStyle = settings.bgColor
      const padding = 4
      ctx.fillRect(logoX - padding, logoY - padding, logoSize + padding * 2, logoSize + padding * 2)
    }

    try {
      const logoImg = new Image()
      logoImg.src = settings.logoImage
      await new Promise((resolve, reject) => {
        logoImg.onload = resolve
        logoImg.onerror = reject
      })
      ctx.drawImage(logoImg, logoX, logoY, logoSize, logoSize)
    } catch (e) {
      console.warn('Could not load logo image')
    }
  }

  // رسم الإطار
  if (settings.frameStyle !== 'none') {
    ctx.strokeStyle = settings.frameColor
    ctx.lineWidth = 3

    if (settings.frameStyle === 'rounded') {
      const radius = 16
      roundRect(ctx, 5, 5, totalWidth - 10, totalHeight - 10, radius)
      ctx.stroke()
    } else if (settings.frameStyle === 'shadow') {
      ctx.shadowColor = settings.frameColor
      ctx.shadowBlur = 15
      ctx.strokeRect(8, 8, totalWidth - 16, totalHeight - 16)
      ctx.shadowBlur = 0
    } else {
      ctx.strokeRect(8, 8, totalWidth - 16, totalHeight - 16)
    }
  }

  // رسم النص السفلي
  if (settings.captionText) {
    ctx.fillStyle = settings.captionColor
    ctx.font = `bold 16px "${settings.captionFont}", Cairo, sans-serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    const textY = framePadding + qrSize + captionHeight / 2 + 5
    ctx.fillText(settings.captionText, totalWidth / 2, textY)
  }

  return canvas.toDataURL('image/png')
}

/**
 * رسم مستطيل بزوايا مستديرة
 */
const roundRect = (ctx, x, y, width, height, radius) => {
  ctx.beginPath()
  ctx.moveTo(x + radius, y)
  ctx.lineTo(x + width - radius, y)
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
  ctx.lineTo(x + width, y + height - radius)
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
  ctx.lineTo(x + radius, y + height)
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius)
  ctx.lineTo(x, y + radius)
  ctx.quadraticCurveTo(x, y, x + radius, y)
  ctx.closePath()
}

/**
 * تحميل صورة الشعار وتحويلها إلى Data URL
 */
export const fileToDataURL = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => resolve(e.target.result)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

/**
 * تنزيل ملف
 */
export const downloadFile = (dataUrl, filename, mimeType) => {
  const link = document.createElement('a')
  link.download = filename
  link.href = dataUrl
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

/**
 * تحويل Canvas إلى صيغة JPEG
 */
export const canvasToJPEG = (canvas, quality = 0.95) => {
  return canvas.toDataURL('image/jpeg', quality)
}

/**
 * إنشاء ملف PDF بسيط يحتوي على صورة QR
 */
export const generatePDF = (imageDataUrl, width, height) => {
  // إنشاء PDF باستخدام HTML -> طباعة
  const printWindow = window.open('', '_blank')
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>QRFlow - ${filename || 'QRCode'}</title>
        <style>
          body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
          img { max-width: 100%; max-height: 100vh; }
          @media print {
            body { margin: 0; }
            img { width: 100%; max-width: 180mm; }
          }
        </style>
      </head>
      <body>
        <img src="${imageDataUrl}" alt="QR Code" />
        <script>
          window.onload = function() {
            setTimeout(function() {
              window.print();
            }, 250);
          };
        <\/script>
      </body>
    </html>
  `)
  printWindow.document.close()
}
