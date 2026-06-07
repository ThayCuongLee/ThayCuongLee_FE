import { useEffect } from 'react'

interface TikTokEmbedProps {
  html: string
}

export function TikTokEmbed({ html }: TikTokEmbedProps) {
  useEffect(() => {
    // Kiểm tra xem script đã được thêm vào chưa để tránh việc thêm/xóa liên tục (race condition)
    if (!document.getElementById('tiktok-embed-script')) {
      const script = document.createElement('script')
      script.id = 'tiktok-embed-script'
      script.src = 'https://www.tiktok.com/embed.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <div 
      className="flex justify-center w-full"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
