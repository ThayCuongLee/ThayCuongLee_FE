import { Loader2 } from 'lucide-react'

interface LoadingProps {
  fullScreen?: boolean;
  text?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'spinner' | 'dots' | 'logo';
}

export function Loading({ 
  fullScreen = false, 
  text = 'Đang xử lý...', 
  size = 'md',
  variant = 'spinner'
}: LoadingProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const renderContent = () => {
    switch (variant) {
      case 'dots':
        return (
          <div className="flex items-center justify-center gap-2 h-8">
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        );
      case 'logo':
        return (
          <div className="relative flex justify-center items-center">
            {/* Vòng sáng tỏa ra xung quanh */}
            <div className="absolute inset-0 bg-blue-400 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
            <img 
              src="/images/common/logo.jpg" 
              alt="Loading" 
              className="w-20 h-20 rounded-2xl object-cover relative z-10 animate-bounce shadow-2xl border-2 border-white/50" 
              style={{ animationDuration: '2s' }}
            />
          </div>
        );
      case 'spinner':
      default:
        return (
          <div className="relative">
            <div className={`absolute inset-0 rounded-full border-4 border-blue-100 ${sizeClasses[size]}`}></div>
            <Loader2 className={`animate-spin text-blue-600 relative z-10 ${sizeClasses[size]}`} />
          </div>
        );
    }
  };

  const content = (
    <div className="flex flex-col items-center justify-center gap-4">
      {renderContent()}
      {text && (
        <p className="text-slate-600 font-semibold tracking-wide animate-pulse mt-2">
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/95 backdrop-blur-md z-[100] flex items-center justify-center transition-all duration-300">
        {content}
      </div>
    );
  }

  return (
    <div className="w-full py-12 flex justify-center items-center">
      {content}
    </div>
  );
}
