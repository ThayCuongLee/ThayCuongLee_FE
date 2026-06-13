import { Link } from '@tanstack/react-router'
import { PlayCircle, ArrowRight } from 'lucide-react'
import { TikTokEmbed } from '../../components/common/TikTokEmbed'

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
              <TikTokEmbed html={`<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@cuongleeminh/video/7647157225898741010" data-video-id="7647157225898741010" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@cuongleeminh" href="https://www.tiktok.com/@cuongleeminh?refer=embed">@cuongleeminh</a> Có bạn 4 năm kỷ niệm, có bạn 3 năm học thầy, có bạn mới vào vài tháng, nhưng tất cả đều đã trải qua một thanh xuân tươi đẹp cùng nhau, chúc các con đường đời trải phẳng, chân cứng đá mềm nhé! Sài gòn, 03&#47;6&#47;2026 <a title="thaycuonglee" target="_blank" href="https://www.tiktok.com/tag/thaycuonglee?refer=embed">#thayCuongLee</a> <a title="xuhuongtiktok" target="_blank" href="https://www.tiktok.com/tag/xuhuongtiktok?refer=embed">#xuhuongtiktok</a> <a title="capcut" target="_blank" href="https://www.tiktok.com/tag/capcut?refer=embed">#CapCut</a> <a target="_blank" title="♬ suara asli  - Pama pani mala" href="https://www.tiktok.com/music/suara-asli-Pama-pani-mala-7578109143198812946?refer=embed">♬ suara asli  - Pama pani mala</a> </section> </blockquote>`} />
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 flex justify-center hover:shadow-lg transition-shadow overflow-hidden">
              <TikTokEmbed html={`<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@cuongleeminh/video/7647143820701994248" data-video-id="7647143820701994248" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@cuongleeminh" href="https://www.tiktok.com/@cuongleeminh?refer=embed">@cuongleeminh</a> Hãy bay cao, bay xa các con nhé! <a title="thaycuonglee" target="_blank" href="https://www.tiktok.com/tag/thaycuonglee?refer=embed">#thayCuongLee</a> <a title="xuhuongtiktok" target="_blank" href="https://www.tiktok.com/tag/xuhuongtiktok?refer=embed">#xuhuongtiktok</a> <a target="_blank" title="♬ Come My Way - Sơn Tùng M-TP &#38; Tyga" href="https://www.tiktok.com/music/Come-My-Way-7641539894133835792?refer=embed">♬ Come My Way - Sơn Tùng M-TP &#38; Tyga</a> </section> </blockquote>`} />
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 flex justify-center hover:shadow-lg transition-shadow overflow-hidden">
              <TikTokEmbed html={`<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@cuongleeminh/video/7644482436746824967" data-video-id="7644482436746824967" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@cuongleeminh" href="https://www.tiktok.com/@cuongleeminh?refer=embed">@cuongleeminh</a> Sách Toán 12 đã về tới! <a title="thaycuonglee" target="_blank" href="https://www.tiktok.com/tag/thaycuonglee?refer=embed">#thayCuongLee</a> <a title="xuhuongtiktok" target="_blank" href="https://www.tiktok.com/tag/xuhuongtiktok?refer=embed">#xuhuongtiktok</a> <a title="toanhoc" target="_blank" href="https://www.tiktok.com/tag/toanhoc?refer=embed">#ToanHoc</a> <a title="toan12" target="_blank" href="https://www.tiktok.com/tag/toan12?refer=embed">#Toan12</a> <a target="_blank" title="♬ 奶糖色的晴天脚印 - 暖星亲子社" href="https://www.tiktok.com/music/奶糖色的晴天脚印-7616264571356350473?refer=embed">♬ 奶糖色的晴天脚印 - 暖星亲子社</a> </section> </blockquote>`} />
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 flex justify-center hover:shadow-lg transition-shadow overflow-hidden">
              <TikTokEmbed html={`<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@cuongleeminh/video/7641994809284234517" data-video-id="7641994809284234517" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@cuongleeminh" href="https://www.tiktok.com/@cuongleeminh?refer=embed">@cuongleeminh</a> Ôn thi TS10  | sở TP Hồ Chí Minh | Toán Vi-ét Bài toán vi-ét cũng là một bài toán thường gặp trong các đề thi, các bạn biết thêm một số dạng sẽ tự tin hơn trong quá trình làm bài nhé! <a title="học_sinh" target="_blank" href="https://www.tiktok.com/tag/h%E1%BB%8Dc_sinh?refer=embed">#học_sinh</a> <a title="toan9onthivaolop10" target="_blank" href="https://www.tiktok.com/tag/toan9onthivaolop10?refer=embed">#toan9onthivaolop10</a> <a title="xuhuongtiktok" target="_blank" href="https://www.tiktok.com/tag/xuhuongtiktok?refer=embed">#xuhuongtiktok</a> <a title="tuyensinh10" target="_blank" href="https://www.tiktok.com/tag/tuyensinh10?refer=embed">#tuyensinh10</a> <a title="matgoctoan" target="_blank" href="https://www.tiktok.com/tag/matgoctoan?refer=embed">#MatGocToan</a> <a target="_blank" title="♬ original sound  - Thầy Cường Lee" href="https://www.tiktok.com/music/original-sound-Thầy-Cường-Lee-7641994866360912661?refer=embed">♬ original sound  - Thầy Cường Lee</a> </section> </blockquote>`} />
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 flex justify-center hover:shadow-lg transition-shadow overflow-hidden">
              <TikTokEmbed html={`<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@cuongleeminh/video/7602214190551403784" data-video-id="7602214190551403784" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@cuongleeminh" href="https://www.tiktok.com/@cuongleeminh?refer=embed">@cuongleeminh</a> Có tới 90% học sinh sai câu này vì nhầm lẫn là vì sao??? <a title="giaitoan" target="_blank" href="https://www.tiktok.com/tag/giaitoan?refer=embed">#Giaitoan</a> <a title="toan12" target="_blank" href="https://www.tiktok.com/tag/toan12?refer=embed">#Toan12</a> <a title="tichphan" target="_blank" href="https://www.tiktok.com/tag/tichphan?refer=embed">#tichphan</a> <a target="_blank" title="♬ Cinnamon Whisker Twitch - h0pe less" href="https://www.tiktok.com/music/Cinnamon-Whisker-Twitch-7599962087255115826?refer=embed">♬ Cinnamon Whisker Twitch - h0pe less</a> </section> </blockquote>`} />
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 flex justify-center hover:shadow-lg transition-shadow overflow-hidden">
              <TikTokEmbed html={`<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@cuongleeminh/video/7601382128022015239" data-video-id="7601382128022015239" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@cuongleeminh" href="https://www.tiktok.com/@cuongleeminh?refer=embed">@cuongleeminh</a> [Phần 2] Tại sao thuộc công thức nguyên hàm, thuộc luôn công thức lượng giác rồi mà lại không làm được bài? <a title="Giaitoan" target="_blank" href="https://www.tiktok.com/tag/Giaitoan?refer=embed">#Giaitoan</a> <a title="Toan12" target="_blank" href="https://www.tiktok.com/tag/Toan12?refer=embed">#Toan12</a> <a title="Nguyenham" target="_blank" href="https://www.tiktok.com/tag/Nguyenham?refer=embed">#Nguyenham</a> <a title="giaitri" target="_blank" href="https://www.tiktok.com/tag/giaitri?refer=embed">#giaitri</a> <a target="_blank" title="♬ vanilla flavor - nemu music" href="https://www.tiktok.com/music/vanilla-flavor-7405532015485257745?refer=embed">♬ vanilla flavor - nemu music</a> </section> </blockquote>`} />
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
