import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Lock, User, ArrowRight } from 'lucide-react'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock login action
    alert(`Đăng nhập với username: ${username}`)
  }

  return (
    <div className="min-h-[calc(100vh-80px)] bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side - Info/Branding */}
        <div className="w-full md:w-1/2 bg-blue-600 text-white p-12 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513258496099-481620d4ce8d?q=80&w=1000&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-700/90 to-blue-500/80"></div>
          
          <div className="relative z-10">
            <Link to="/" className="inline-flex items-center gap-2 mb-12 group">
              <img src="/images/common/logo.jpg" alt="Logo Thầy Cường Lee" className="w-12 h-12 rounded-xl object-cover border-2 border-white/50 group-hover:scale-105 transition-transform" />
              <span className="font-bold text-2xl tracking-tight">Thầy Cường Lee</span>
            </Link>
            
            <h2 className="text-4xl font-bold mb-6 leading-tight">Chào mừng trở lại E-Learning</h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Hệ thống học tập và thi cử trực tuyến dành riêng cho học sinh của Thầy Cường. Đăng nhập để tiếp tục lộ trình học tập của bạn.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/50 flex items-center justify-center">✓</div>
                <span>Hơn 1000+ bài giảng chất lượng</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/50 flex items-center justify-center">✓</div>
                <span>Ngân hàng đề thi đa dạng</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/50 flex items-center justify-center">✓</div>
                <span>Theo dõi tiến độ học tập chi tiết</span>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 mt-12 text-sm text-blue-200">
            &copy; {new Date().getFullYear()} Hệ Thống Học Toán Thầy Cường Lee
          </div>
        </div>
        
        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 p-12 md:p-16 flex flex-col justify-center bg-white">
          <div className="mb-10 text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Đăng nhập tài khoản</h3>
            <p className="text-slate-500">Sử dụng tài khoản do Thầy/Cô giáo viên cung cấp</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Tên đăng nhập (ID học sinh)</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <User className="h-5 w-5" />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full pl-11 pr-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all bg-slate-50 focus:bg-white"
                  placeholder="Nhập mã học sinh hoặc ID"
                  required
                />
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-slate-700">Mật khẩu</label>
                <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors">
                  Quên mật khẩu?
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <Lock className="h-5 w-5" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-11 pr-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all bg-slate-50 focus:bg-white"
                  placeholder="Nhập mật khẩu"
                  required
                />
              </div>
            </div>
            
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-600">
                Ghi nhớ đăng nhập
              </label>
            </div>
            
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 border border-transparent rounded-xl shadow-md text-base font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Đăng nhập <ArrowRight className="w-5 h-5" />
            </button>
          </form>
          
          <div className="mt-10 text-center">
            <p className="text-slate-500 text-sm">
              Bạn chưa có tài khoản?{' '}
              <Link to="/contact" className="font-bold text-blue-600 hover:text-blue-500 transition-colors">
                Liên hệ đăng ký học
              </Link>
            </p>
          </div>
        </div>
        
      </div>
    </div>
  )
}
