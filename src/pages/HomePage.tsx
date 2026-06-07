import { Link } from '@tanstack/react-router'
import { PlayCircle, ArrowRight } from 'lucide-react'
import { TikTokEmbed } from '../components/common/TikTokEmbed'

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
                <Link to="/courses" className="bg-white text-blue-600 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-yellow-300 hover:text-slate-900 transition-all text-center flex items-center justify-center gap-2 shadow-lg shadow-white/20">
                  Đăng ký học ngay <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="#intro-video" className="bg-blue-700/50 hover:bg-blue-700 backdrop-blur-sm border border-blue-400/50 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg transition-all text-center flex items-center justify-center gap-2">
                  <PlayCircle className="w-5 h-5" /> Xem giới thiệu
                </a>
              </div>
            </div>
            
            <div className="relative order-1 md:order-2 px-4 md:px-0">
              <div className="absolute inset-0 bg-blue-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <img 
                src="/images/common/thay-cuong-lee-avatar.webp" 
                alt="Thầy Cường Lee" 
                className="relative z-10 rounded-2xl shadow-2xl border-4 border-white/20 transform md:rotate-2 hover:rotate-0 transition-transform duration-500 w-full h-[350px] sm:h-[450px] md:h-[550px] object-cover object-top"
              />
            </div>
          </div>

          {/* Schedule Banner inside Hero */}
          <div className="w-full text-center max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-yellow-300 mb-6 drop-shadow-md uppercase tracking-wider">Lịch Khai Giảng Năm Học Mới</h2>
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/50 border-4 border-white/20 hover:border-white/40 transition-all transform hover:-translate-y-2 bg-white/10 backdrop-blur-sm">
              <img 
                src="/images/common/lich-hoc-toan-thay-cuong.webp" 
                alt="Lịch học toán năm học mới Thầy Cường Lee" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-12 md:h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.83,127,201.3,121.75,242.4,118.82,283.4,112.44,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
      </section>



      {/* Tiktok Gallery Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Video Nổi Bật Trên Tiktok</h2>
            <p className="text-slate-600 text-lg">Cùng hàng triệu lượt xem và chia sẻ những bài giảng thú vị</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 flex justify-center hover:shadow-lg transition-shadow overflow-hidden">
              <TikTokEmbed html={`<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@cuongleeminh/video/7647157225898741010" data-video-id="7647157225898741010" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@cuongleeminh" href="https://www.tiktok.com/@cuongleeminh?refer=embed">@cuongleeminh</a> </section> </blockquote>`} />
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 flex justify-center hover:shadow-lg transition-shadow overflow-hidden">
              <TikTokEmbed html={`<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@cuongleeminh/video/7647143820701994248" data-video-id="7647143820701994248" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@cuongleeminh" href="https://www.tiktok.com/@cuongleeminh?refer=embed">@cuongleeminh</a> </section> </blockquote>`} />
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 flex justify-center hover:shadow-lg transition-shadow overflow-hidden">
              <TikTokEmbed html={`<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@cuongleeminh/video/7646647377905962247" data-video-id="7646647377905962247" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@cuongleeminh" href="https://www.tiktok.com/@cuongleeminh?refer=embed">@cuongleeminh</a> </section> </blockquote>`} />
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 flex justify-center hover:shadow-lg transition-shadow overflow-hidden">
              <TikTokEmbed html={`<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@cuongleeminh/video/7646401480693533960" data-video-id="7646401480693533960" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@cuongleeminh" href="https://www.tiktok.com/@cuongleeminh?refer=embed">@cuongleeminh</a> </section> </blockquote>`} />
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 flex justify-center hover:shadow-lg transition-shadow overflow-hidden">
              <TikTokEmbed html={`<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@cuongleeminh/video/7644482436746824967" data-video-id="7644482436746824967" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@cuongleeminh" href="https://www.tiktok.com/@cuongleeminh?refer=embed">@cuongleeminh</a> Sách Toán 12 đã về tới! <a title="thaycuonglee" target="_blank" href="https://www.tiktok.com/tag/thaycuonglee?refer=embed">#thayCuongLee</a> <a title="xuhuongtiktok" target="_blank" href="https://www.tiktok.com/tag/xuhuongtiktok?refer=embed">#xuhuongtiktok</a> <a title="toanhoc" target="_blank" href="https://www.tiktok.com/tag/toanhoc?refer=embed">#ToanHoc</a> <a title="toan12" target="_blank" href="https://www.tiktok.com/tag/toan12?refer=embed">#Toan12</a> <a target="_blank" title="♬ 奶糖色的晴天脚印 - 暖星亲子社" href="https://www.tiktok.com/music/奶糖色的晴天脚印-7616264571356350473?refer=embed">♬ 奶糖色的晴天脚印 - 暖星亲子社</a> </section> </blockquote>`} />
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 flex justify-center hover:shadow-lg transition-shadow overflow-hidden">
              <TikTokEmbed html={`<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@cuongleeminh/video/7643835190053326098" data-video-id="7643835190053326098" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@cuongleeminh" href="https://www.tiktok.com/@cuongleeminh?refer=embed">@cuongleeminh</a> Tài liệu Toán 11 sắp hoàn thành! Để có những trang tài liệu chất lượng, thầy đã cẩn thận, cân nhắc biên soạn theo chuẩn kiến thức - kỹ năng chương trình SGK thống nhất! <a title="thaycuonglee" target="_blank" href="https://www.tiktok.com/tag/thaycuonglee?refer=embed">#thayCuongLee</a> <a title="toanhoc" target="_blank" href="https://www.tiktok.com/tag/toanhoc?refer=embed">#ToanHoc</a> <a title="xuhuongtiktok" target="_blank" href="https://www.tiktok.com/tag/xuhuongtiktok?refer=embed">#xuhuongtiktok</a> <a target="_blank" title="♬ nhạc nền - Trí tuệ Cổ nhân - trietlyconhan" href="https://www.tiktok.com/music/nhạc-nền-Trí-tuệ-Cổ-nhân-7537273698714127121?refer=embed">♬ nhạc nền - Trí tuệ Cổ nhân - trietlyconhan</a> </section> </blockquote>`} />
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a href="https://www.tiktok.com/@cuongleeminh" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-600 transition-all shadow-lg hover:-translate-y-1 transform">
              Xem thêm trên Tiktok <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>


    </div>
  )
}
