// frontend/components/GlassCard.js

export default function GlassCard({ children, className = '', padding = 'p-6' }) {
  return (
    <div 
      className={`bg-glass-white backdrop-blur-xl rounded-3xl border border-white/20 shadow-lg ${padding} ${className}`}
      style={{
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(25px)',
        WebkitBackdropFilter: 'blur(25px)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
      }}
    >
      {children}
    </div>
  );
}