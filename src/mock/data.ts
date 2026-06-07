export const mockCourses = [
  {
    id: 'course-1',
    title: 'Luyện thi THPT Quốc Gia (Mục tiêu 9+)',
    grade: 'Lớp 12',
    description: 'Khóa học ôn thi THPT Quốc gia môn Toán bao gồm toàn bộ kiến thức lớp 12 và ôn tập 10, 11. Các chuyên đề được giảng dạy chi tiết, bài bản từ cơ bản đến vận dụng cao.',
    students: 1250,
    rating: 4.9,
    price: 1500000,
    lessons: 45,
    duration: '6 tháng',
    img: 'https://images.unsplash.com/photo-1632516643720-e7f0d7e6a727?q=80&w=600&auto=format&fit=crop',
    chapters: [
      { id: 'c1', title: 'Hàm số và các bài toán liên quan', lessons: 12 },
      { id: 'c2', title: 'Khối đa diện và thể tích', lessons: 8 },
      { id: 'c3', title: 'Mũ và Logarit', lessons: 10 },
      { id: 'c4', title: 'Nguyên hàm, Tích phân', lessons: 15 }
    ]
  },
  {
    id: 'course-2',
    title: 'Toán Nâng Cao Lớp 11',
    grade: 'Lớp 11',
    description: 'Trang bị kiến thức nền tảng và nâng cao Toán 11, chuẩn bị tốt nhất cho kỳ thi THPT Quốc gia năm sau.',
    students: 840,
    rating: 4.8,
    price: 1200000,
    lessons: 38,
    duration: '5 tháng',
    img: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=600&auto=format&fit=crop',
    chapters: []
  },
  {
    id: 'course-3',
    title: 'Lấy lại Gốc Toán 10',
    grade: 'Lớp 10',
    description: 'Khóa học dành cho các bạn mất gốc, kiến thức hổng. Giảng chậm, chi tiết, bài tập áp dụng thực tế dễ hiểu.',
    students: 920,
    rating: 4.9,
    price: 1000000,
    lessons: 30,
    duration: '4 tháng',
    img: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=600&auto=format&fit=crop',
    chapters: []
  }
];

export const mockDocuments = [
  { id: 'doc-1', title: 'Bộ 50 đề thi thử THPT QG 2024 môn Toán', type: 'pdf', downloads: 15420, grade: 'Lớp 12', size: '15MB' },
  { id: 'doc-2', title: 'Tổng hợp Công thức Toán 12 siêu tốc', type: 'pdf', downloads: 8300, grade: 'Lớp 12', size: '3MB' },
  { id: 'doc-3', title: 'Chuyên đề Hình học không gian VDC', type: 'doc', downloads: 5120, grade: 'Lớp 11', size: '5MB' },
  { id: 'doc-4', title: 'Giải nhanh Trắc nghiệm bằng Casio', type: 'zip', downloads: 12000, grade: 'Lớp 12', size: '45MB' },
];

export const mockAchievements = [
  { id: 'ach-1', name: 'Nguyễn Văn A', school: 'THPT Chuyên Lê Hồng Phong', score: 9.8, year: '2025', quote: 'Nhờ thầy Cường mà em đã chinh phục được bài toán khó nhất đề thi.' },
  { id: 'ach-2', name: 'Trần Thị B', school: 'THPT Năng Khiếu', score: 9.6, year: '2025', quote: 'Hệ thống học E-learning cực kỳ tiện lợi, em có thể ôn bài mọi lúc.' },
  { id: 'ach-3', name: 'Lê Hoàng C', school: 'THPT Gia Định', score: 9.4, year: '2024', quote: 'Từ một đứa mất gốc Toán, thầy đã giúp em đạt 9.4 trong kỳ thi ĐH.' },
];
