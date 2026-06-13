import { CheckCircle2, MapPin, MonitorPlay, Users, Award } from 'lucide-react'

export function TeachingExpertise() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* KHÓA HỌC THƯỜNG NIÊN */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 border-b-2 border-blue-600 pb-4 inline-block">
              KHÓA HỌC THƯỜNG NIÊN
            </h2>
            
            <ul className="space-y-6 text-lg text-slate-700">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">Toán 9 tuyển sinh 10:</span> "Học đúng trọng tâm, đạt điểm cao".
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">Toán 10:</span> "Hiểu bản chất Toán – Xây nền vững chắc".
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">Toán 11:</span> "Tư duy & kỹ thuật giải Toán hiệu quả".
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">Toán 12:</span> "Chiến lược 9+ Toán THPT".
                </div>
              </li>
              
              <li className="flex items-start gap-4 pt-6 mt-6 border-t border-slate-100">
                <Users className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">Khóa kèm 1-1; nhóm 3hs-5hs-10hs; ...</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Award className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">Bồi dưỡng HSG 12; Olympic Tháng 4 lớp 10 và 11.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* HÌNH THỨC HỌC */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 border-b-2 border-emerald-600 pb-4 inline-block">
              HÌNH THỨC HỌC
            </h2>
            
            <ul className="space-y-4 text-lg text-slate-700">
              <li className="flex items-center gap-4 bg-slate-50 hover:bg-slate-100 transition-colors p-5 rounded-2xl border border-slate-200">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 block md:inline">Học Offline</span> 
                  <span className="hidden md:inline"> </span>
                  tại trung tâm Q3
                </div>
              </li>
              <li className="flex items-center gap-4 bg-slate-50 hover:bg-slate-100 transition-colors p-5 rounded-2xl border border-slate-200">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <MonitorPlay className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 block md:inline">Học Online</span>
                  <span className="hidden md:inline"> </span>
                  qua app Zoom
                </div>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  )
}
