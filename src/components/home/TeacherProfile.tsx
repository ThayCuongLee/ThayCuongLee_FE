import { Award, Trophy, GraduationCap, Medal, Star, CheckCircle, Briefcase, BookOpen } from 'lucide-react'

const achievements = [
  {
    title: 'Giải NHẤT',
    subtitle: 'HSG Toán 12 - TP Hồ Chí Minh',
    year: '2012',
    icon: Trophy,
    color: 'from-amber-400 to-yellow-600',
    shadowColor: 'hover:shadow-amber-500/30',
  },
  {
    title: 'Thủ Khoa',
    subtitle: 'Đầu vào ĐH Sư Phạm',
    year: '2013',
    icon: Star,
    color: 'from-blue-400 to-blue-600',
    shadowColor: 'hover:shadow-blue-500/30',
  },
  {
    title: 'Giải Nhất',
    subtitle: 'HSG Toán 12 - TP HCM',
    year: '2013',
    icon: Award,
    color: 'from-yellow-400 to-amber-600',
    shadowColor: 'hover:shadow-yellow-500/30',
  },
  {
    title: 'Giải NHẤT',
    subtitle: 'HSG Vật Lý 12 - TP Hồ Chí Minh',
    year: '2013',
    icon: Medal,
    color: 'from-purple-400 to-purple-600',
    shadowColor: 'hover:shadow-purple-500/30',
  },
  {
    title: 'Giải NHẤT',
    subtitle: 'HSG Toán 9 - Tỉnh Đồng Nai',
    year: '2010',
    icon: Trophy,
    color: 'from-emerald-400 to-emerald-600',
    shadowColor: 'hover:shadow-emerald-500/30',
  },
  {
    title: 'Giải Ba',
    subtitle: 'HSG CASIO Toán 9 - Đồng Nai',
    year: '2010',
    icon: Award,
    color: 'from-slate-400 to-slate-600',
    shadowColor: 'hover:shadow-slate-500/30',
  },
]

const roadmap = [
  {
    year: 'Hiện tại',
    title: 'Chuyên gia Luyện Thi',
    icon: Briefcase,
    color: 'bg-blue-600',
    items: [
      'Giáo viên luyện thi Đại học trên 10 năm kinh nghiệm.',
      'Bồi dưỡng Olympic Toán 10 đạt 3 HCV - 3 HCB - 7 HCĐ.'
    ]
  },
  {
    year: '2020',
    title: 'Thạc sỹ Toán học',
    school: 'ĐH Khoa học Tự nhiên',
    icon: BookOpen,
    color: 'bg-blue-500',
    items: [
      'Điểm Luận văn Tốt nghiệp: 9.4/10',
      'Điểm GPA: 9.0/10'
    ]
  },
  {
    year: '2017',
    title: 'Cử nhân Sư phạm',
    school: 'ĐH Sư phạm TP.HCM',
    icon: GraduationCap,
    color: 'bg-emerald-500',
    items: [
      'Xếp loại Giỏi',
      'Khóa luận: 10đ',
      'Điểm TB: 3.24/4'
    ]
  }
]

export function TeacherProfile() {
  return (
    <section id="teacher-profile" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration matching blue/white theme */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-100/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Về <span className="text-blue-600">Thầy Cường Lee</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          
          {/* Left Column: BIGGER Wheel of Achievements */}
          <div className="lg:col-span-7 flex flex-col justify-center items-center py-10 lg:py-24">
            
            <div className="flex lg:hidden items-center gap-3 mb-8">
              <div className="p-3 bg-blue-100 rounded-xl border border-blue-200">
                <Trophy className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900">Bảng Vàng Thành Tích</h3>
            </div>

            {/* Desktop Wheel Container (Hidden on mobile, visible on lg) */}
            <div className="hidden lg:flex relative w-[600px] h-[600px] items-center justify-center">
              {/* Outer glowing massive ring */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-200 shadow-[0_0_80px_rgba(59,130,246,0.1)] animate-[spin_60s_linear_infinite]"></div>
              {/* Inner dashed ring */}
              <div className="absolute inset-8 rounded-full border-2 border-dashed border-blue-300/50 animate-[spin_40s_linear_infinite_reverse]"></div>
              
              {/* Center Icon */}
              <div className="relative z-20 w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex flex-col items-center justify-center shadow-lg shadow-blue-500/30 animate-pulse border-4 border-white">
                <Trophy className="w-14 h-14 text-white mb-1" />
                <span className="text-white font-extrabold text-sm uppercase tracking-wider">Thành Tích</span>
              </div>

              {/* Achievement Cards placed around the circle */}
              {achievements.map((achievement, idx) => {
                const Icon = achievement.icon;
                // Calculate position on a circle with radius 280px
                const radius = 280;
                const angle = (idx * 60 * Math.PI) / 180;
                const x = Math.round(Math.sin(angle) * radius);
                const y = Math.round(-Math.cos(angle) * radius);

                return (
                  <div 
                    key={idx}
                    className={`absolute left-1/2 top-1/2 w-64 group bg-white/95 backdrop-blur-xl rounded-2xl p-5 border border-slate-200 hover:border-blue-400 transition-all duration-300 shadow-lg ${achievement.shadowColor} z-30 hover:z-40 hover:scale-110 cursor-default`}
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                    }}
                  >
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    
                    <div className="flex items-center gap-3 mb-3 relative z-10">
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 shadow-sm group-hover:bg-blue-50 transition-colors">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <span className="text-sm font-extrabold text-slate-500 group-hover:text-blue-600 transition-colors bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                        {achievement.year}
                      </span>
                    </div>
                    
                    <div className="relative z-10">
                      <h4 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-blue-700 transition-colors leading-tight">
                        {achievement.title}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed font-medium">
                        {achievement.subtitle}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Mobile / Tablet List (Visible on < lg, hidden on lg) */}
            <div className="flex lg:hidden flex-col gap-5 w-full mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((achievement, idx) => {
                  const Icon = achievement.icon
                  return (
                    <div 
                      key={idx} 
                      className={`group relative bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-400 transition-all duration-300 hover:-translate-y-1 shadow-md ${achievement.shadowColor}`}
                    >
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                      
                      <div className="flex items-start justify-between mb-4 relative z-10">
                        <div className={`p-3 rounded-xl bg-slate-50 border border-slate-100 shadow-sm`}>
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <span className="text-sm font-extrabold text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                          {achievement.year}
                        </span>
                      </div>
                      
                      <div className="relative z-10">
                        <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700">
                          {achievement.title}
                        </h4>
                        <p className="text-slate-600 text-sm font-medium">
                          {achievement.subtitle}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Teacher Image & ROADMAP */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            {/* Teacher Header */}
            <div className="flex flex-col items-center sm:items-start sm:flex-row gap-6 relative z-10">
              <div className="w-40 h-40 md:w-48 md:h-48 shrink-0 rounded-full border-4 border-white shadow-xl bg-slate-100 overflow-hidden relative group">
                <img src="/images/common/logo.webp" alt="Thầy Cường Lee" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="flex flex-col justify-center items-center sm:items-start text-center sm:text-left mt-2">
                <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">Thầy Cường Lee</h3>
                <p className="text-blue-600 font-bold text-lg mb-4 flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
                  <Star className="w-5 h-5 fill-blue-500" />
                  Chuyên gia luyện thi Toán
                </p>
              </div>
            </div>

            {/* ROADMAP TIMELINE */}
            <div className="relative pl-6 md:pl-8 border-l-2 border-slate-200 ml-4 md:ml-6 mt-4">
              <div className="absolute top-0 bottom-0 left-[-2px] w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-emerald-400"></div>

              {roadmap.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="mb-12 relative group">
                    {/* Timeline Dot */}
                    <div className={`absolute -left-[45px] md:-left-[57px] top-1 w-10 h-10 md:w-12 md:h-12 rounded-full ${step.color} border-4 border-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>

                    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md group-hover:border-blue-300 transition-colors relative overflow-hidden group-hover:shadow-lg">
                      <div className={`absolute top-0 left-0 w-full h-1 ${step.color}`}></div>
                      
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl md:text-2xl font-bold text-slate-900">{step.title}</h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-black text-white ${step.color} shadow-sm`}>
                          {step.year}
                        </span>
                      </div>
                      
                      {step.school && (
                        <p className="text-blue-600 font-semibold mb-4 text-sm md:text-base">{step.school}</p>
                      )}

                      <ul className="space-y-2 mt-4">
                        {step.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-700">
                            <CheckCircle className={`w-5 h-5 shrink-0 mt-0.5 ${step.color.replace('bg-', 'text-')}`} />
                            <span className="font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
