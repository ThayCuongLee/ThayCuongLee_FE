import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { mockCourses } from '../../mock/data'
import { Search, Filter, Star, Users, Clock, BookOpen } from 'lucide-react'

export default function CoursesPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Các Khóa Học Toán</h1>
          <p className="text-slate-600 text-lg">Hệ thống khóa học bài bản từ lớp 6 đến lớp 12, giúp học sinh bứt phá điểm số và chinh phục các kỳ thi quan trọng.</p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Tìm kiếm khóa học..." 
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white min-w-[150px]">
              <option value="">Tất cả các lớp</option>
              <option value="12">Lớp 12</option>
              <option value="11">Lớp 11</option>
              <option value="10">Lớp 10</option>
              <option value="thcs">Cấp THCS</option>
            </select>
            <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-3 rounded-lg flex items-center gap-2 transition-colors">
              <Filter className="w-5 h-5" /> Lọc
            </button>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all group flex flex-col h-full">
              <div className="relative h-52 overflow-hidden">
                <img src={course.img} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-blue-700 px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                  {course.grade}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-1 text-yellow-500 mb-3">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-slate-500 text-sm ml-1">({course.rating})</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-3 hover:text-blue-600 transition-colors line-clamp-2">
                  {course.title}
                </h3>
                
                <p className="text-slate-600 text-sm mb-6 line-clamp-3 flex-1">
                  {course.description}
                </p>
                
                <div className="grid grid-cols-2 gap-y-3 text-sm text-slate-500 mb-6 bg-slate-50 p-4 rounded-xl">
                  <span className="flex items-center gap-2"><Users className="w-4 h-4 text-blue-500" /> {course.students} học viên</span>
                  <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-blue-500" /> {course.duration}</span>
                  <span className="flex items-center gap-2 col-span-2"><BookOpen className="w-4 h-4 text-blue-500" /> {course.lessons} bài giảng video + tài liệu</span>
                </div>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="font-bold text-xl text-blue-600">
                    {course.price.toLocaleString('vi-VN')}đ
                  </div>
                  <Link to="/courses" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-medium transition-colors shadow-md shadow-blue-600/20">
                    Đăng ký
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


export const Route = createFileRoute('/_public/courses')({
  component: CoursesPage,
})
