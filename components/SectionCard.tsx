
import React from 'react';

interface SectionCardProps {
  title: string;
  subtitle?: string;
  icon: string;
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

const SectionCard: React.FC<SectionCardProps> = ({ title, subtitle, icon, children, active, onClick }) => {
  return (
    <div 
      className={`bg-white rounded-3xl p-6 shadow-xl border-4 transition-all cursor-pointer ${
        active ? 'border-yellow-400 scale-105' : 'border-transparent hover:border-yellow-200'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-yellow-100 text-yellow-600 p-3 rounded-2xl">
          <i className={`fas ${icon} text-2xl`}></i>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800 comic-font">{title}</h2>
          {subtitle && <p className="text-gray-500 font-medium">{subtitle}</p>}
        </div>
      </div>
      <div className="mt-4">
        {children}
      </div>
    </div>
  );
};

export default SectionCard;
