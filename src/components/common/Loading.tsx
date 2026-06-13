import { Loader2, GraduationCap } from 'lucide-react'
import { useState, useEffect } from 'react'

interface LoadingProps {
  fullScreen?: boolean;
  text?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'spinner' | 'dots' | 'logo' | 'math';
}

export function Loading({ 
  fullScreen = false, 
  text = 'Đang chuẩn bị bài giảng...', 
  size = 'md',
  variant = 'math'
}: LoadingProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (variant !== 'math') return;
    
    // Simulate progress bar filling up
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 0; // Reset or keep at 100, let's keep looping for a loading effect
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 400);
    
    return () => clearInterval(interval);
  }, [variant]);

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const renderContent = () => {
    switch (variant) {
      case 'math':
        return (
          <div className="relative flex flex-col items-center justify-center w-72 mt-6">
            {/* Floating Math Symbols */}
            <div className="absolute inset-0 -top-16 pointer-events-none overflow-hidden h-full">
              <div className="absolute top-0 left-4 text-blue-500 text-2xl font-bold opacity-0 animate-[ping_2s_infinite_0s]">∑</div>
              <div className="absolute top-8 right-8 text-yellow-500 text-3xl font-bold opacity-0 animate-[ping_2.5s_infinite_1s]">∫</div>
              <div className="absolute -top-4 left-1/2 text-green-500 text-2xl font-bold opacity-0 animate-[ping_3s_infinite_0.5s]">π</div>
            </div>

            {/* Blackboard */}
            <div className="relative w-full h-36 bg-slate-800 rounded-lg border-[8px] border-amber-900 shadow-2xl mb-8 flex items-center justify-center overflow-hidden">
               {/* Board texture simulation */}
               <div className="absolute inset-0 bg-white/5 opacity-50 mix-blend-overlay"></div>
               
               {/* Math formulas written on board */}
               <div className="text-white/40 font-serif text-sm absolute top-3 left-4 -rotate-6">f(x) = x² + 2x</div>
               <div className="text-white/40 font-serif text-sm absolute bottom-3 right-4 rotate-6">∫ e^x dx = e^x + C</div>
               <div className="text-white/40 font-serif text-xl absolute top-4 right-8 rotate-12">π ≈ 3.14159</div>
               <div className="text-white/40 font-serif text-2xl absolute bottom-2 left-6 -rotate-12">∆</div>
               <div className="text-white/30 font-serif text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">lim x→∞</div>
               
               {/* Animated Progress Text */}
               <div className="text-yellow-300 font-mono text-2xl animate-pulse font-bold tracking-widest z-10 bg-slate-800/80 px-4 py-1 rounded shadow-lg border border-yellow-500/30">
                  {Math.min(progress, 100)}%
               </div>
            </div>

            {/* Teacher Icon overlapping the board */}
            <div className="absolute top-20 -right-6 bg-white p-3 rounded-full shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)] border-4 border-blue-100 flex items-center justify-center animate-bounce z-10" style={{ animationDuration: '2s' }}>
              <GraduationCap className="w-10 h-10 text-blue-600" />
            </div>
            
            {/* Loading Bar */}
            <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden shadow-inner relative border border-slate-300">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 ease-out"
                style={{ width: `${Math.min(progress, 100)}%` }}
              >
                {/* Shine effect on progress bar */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-white/30"></div>
              </div>
            </div>
          </div>
        );
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
              src="/images/common/logo.webp" 
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
    <div className="flex flex-col items-center justify-center gap-6">
      {renderContent()}
      {text && (
        <p className="text-slate-700 font-semibold text-lg tracking-wide animate-pulse mt-2 bg-white/80 px-4 py-1 rounded-full shadow-sm">
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-slate-50/95 backdrop-blur-md z-[100] flex items-center justify-center transition-all duration-300">
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
