import { createFileRoute } from '@tanstack/react-router'

import { PlayCircle, ArrowRight } from 'lucide-react'
import { TeacherProfile } from '@/components/home/TeacherProfile'
import { TeachingExpertise } from '@/components/home/TeachingExpertise'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635372722656-389f87a941b7?q=80&w=2000&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/90 to-blue-500/80"></div>
        
        <div className="container mx-auto px-4 pt-16 pb-32 md:pt-24 md:pb-40 relative z-10 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20">
            <div className="order-2 md:order-1 text-center md:text-left">

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
                Chinh phục điểm 9+ Toán cùng <br className="hidden md:block" />
                <span className="text-yellow-300">Thầy Cường Lee</span>
              </h1>
              <p className="text-base md:text-xl text-blue-100 mb-6 md:mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                Phương pháp giảng dạy hiện đại, tư duy logic bứt phá. Hệ thống học tập toàn diện từ cơ bản đến nâng cao dành cho học sinh từ lớp cấp 2 và cấp 3.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="https://zalo.me/0366658231" target="_blank" rel="noreferrer" className="bg-white text-blue-600 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-yellow-300 hover:text-slate-900 transition-all text-center flex items-center justify-center gap-2 shadow-lg shadow-white/20">
                  Liên hệ ngay <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#teacher-profile" className="bg-blue-700/50 hover:bg-blue-700 backdrop-blur-sm border border-blue-400/50 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg transition-all text-center flex items-center justify-center gap-2">
                  <PlayCircle className="w-5 h-5" /> Tìm hiểu về thầy
                </a>
              </div>
            </div>
            
            <div className="relative order-1 md:order-2 px-4 md:px-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <img 
                src="/images/common/lich-hoc-toan-thay-cuong.webp" 
                alt="Lịch học toán năm học mới Thầy Cường Lee" 
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl border-4 border-white/20 hover:border-white/40 transition-all hover:-translate-y-2"
              />
            </div>
          </div>
        </div>
        
      </section>

      <TeacherProfile />
      <TeachingExpertise />

    </div>
  )
}

export const Route = createFileRoute('/_public/')({
  component: HomePage,
})
