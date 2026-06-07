import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { MessageCircle, Phone, LogIn, LayoutDashboard, Video, Menu, X } from 'lucide-react'

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  // In a real app, you would check auth state here
  const isAuthenticated = false; // Mock state

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Main Navigation */}
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 md:py-5 flex justify-between items-center max-w-7xl">
          <Link to="/" className="flex items-center gap-2 md:gap-3 group">
            <img src="/images/common/logo.jpg" alt="Logo Thầy Cường Lee" className="w-10 h-10 md:w-14 md:h-14 rounded-xl object-cover border border-slate-200 shadow-sm" />
            <div>
              <h1 className="font-bold text-base md:text-xl text-slate-800 leading-tight">Trung Tâm Tri Thức Mới</h1>
              <p className="text-[10px] md:text-xs text-blue-600 font-medium tracking-wider">Hệ Thống học Toán</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Trang chủ</Link>
            <Link to="/about" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Giới thiệu</Link>
            <Link to="/courses" className="text-slate-600 hover:text-blue-600 font-medium transition-colors flex items-center gap-1">
              Khóa học
            </Link>
            <Link to="/documents" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Tài liệu</Link>
            <Link to="/achievements" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Thành tích</Link>
            <Link to="/blog" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Tin tức</Link>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3">
              {isAuthenticated ? (
                <Link to="/student/dashboard" className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-full font-medium transition-all">
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Bảng điều khiển</span>
                </Link>
              ) : (
                <Link to="/login" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition-all shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 transform hover:-translate-y-0.5">
                  <LogIn className="w-4 h-4" />
                  <span>Đăng nhập</span>
                </Link>
              )}
            </div>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b shadow-lg py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-blue-600 font-medium py-2 border-b border-slate-50">Trang chủ</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-blue-600 font-medium py-2 border-b border-slate-50">Giới thiệu</Link>
            <Link to="/courses" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-blue-600 font-medium py-2 border-b border-slate-50">Khóa học</Link>
            <Link to="/documents" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-blue-600 font-medium py-2 border-b border-slate-50">Tài liệu</Link>
            <Link to="/achievements" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-blue-600 font-medium py-2 border-b border-slate-50">Thành tích</Link>
            <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 hover:text-blue-600 font-medium py-2 border-b border-slate-50">Tin tức</Link>
            
            <div className="pt-2 md:hidden">
              {isAuthenticated ? (
                <Link to="/student/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center gap-2 bg-slate-100 text-slate-700 px-4 py-3 rounded-xl font-medium w-full">
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Bảng điều khiển</span>
                </Link>
              ) : (
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-xl font-medium w-full shadow-md shadow-blue-600/20">
                  <LogIn className="w-4 h-4" />
                  <span>Đăng nhập E-Learning</span>
                </Link>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-6 group">
                <img src="/images/common/logo.jpg" alt="Logo Thầy Cường Lee" className="w-12 h-12 rounded-xl object-cover border border-slate-700 shadow-md" />
                <div>
                  <h2 className="font-bold text-lg text-white">Thầy Cường Lee</h2>
                </div>
              </Link>
              <p className="text-sm mb-4 leading-relaxed">
                Hệ thống giáo dục Toán học hàng đầu, giúp học sinh phát triển tư duy logic và đạt kết quả cao trong các kỳ thi.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Về chúng tôi</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-white transition-colors">Giới thiệu</Link></li>
                <li><Link to="/achievements" className="hover:text-white transition-colors">Thành tích học sinh</Link></li>
                <li><Link to="/feedback" className="hover:text-white transition-colors">Đánh giá & Feedback</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Liên hệ</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Học tập</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/courses" className="hover:text-white transition-colors">Danh sách khóa học</Link></li>
                <li><Link to="/documents" className="hover:text-white transition-colors">Kho tài liệu miễn phí</Link></li>
                <li><Link to="/qa" className="hover:text-white transition-colors">Hỏi đáp học tập</Link></li>
                <li><Link to="/login" className="hover:text-white transition-colors">Hệ thống E-Learning</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Liên hệ</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2 items-start">
                  <Phone className="w-4 h-4 mt-0.5 text-blue-400" />
                  <span>036 665 8231</span>
                </li>
                <li className="flex gap-2 items-start">
                  <MessageCircle className="w-4 h-4 mt-0.5 text-blue-400" />
                  <span>Zalo: 036 665 8231</span>
                </li>
                <li className="flex gap-2 items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 text-blue-400"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  <a href="https://www.facebook.com/GiaiTriHayGiaiToan/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">Giải Tri Hay Giải Toán</a>
                </li>
                <li className="flex gap-2 items-start">
                  <Video className="w-4 h-4 mt-0.5 text-blue-400" />
                  <a href="https://www.tiktok.com/@cuongleeminh" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">Tiktok: @cuongleeminh</a>
                </li>

              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-center text-slate-500">
            <p>&copy; {new Date().getFullYear()} Hệ Thống Học Toán Thầy Cường Lee. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
