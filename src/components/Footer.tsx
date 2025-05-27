import React from 'react';

interface FooterProps {
  theme: 'light' | 'dark';
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
  return (
    <footer className={`${theme === 'dark' ? 'bg-black/20' : 'bg-white/20'} backdrop-blur-sm border-t ${theme === 'dark' ? 'border-blue-500/20' : 'border-blue-200/20'} mt-auto`}>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="flex items-center space-x-2">
            <span className={theme === 'dark' ? 'text-blue-300' : 'text-blue-700'}>Desenvolvido com</span>
            <span className="text-red-500">❤</span>
            <span className={theme === 'dark' ? 'text-blue-300' : 'text-blue-700'}>por Ícaro Gago</span>
          </div>
          <div className={`text-sm ${theme === 'dark' ? 'text-blue-300/60' : 'text-blue-700/60'}`}>
            © 2025 Nova Fronteira. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 