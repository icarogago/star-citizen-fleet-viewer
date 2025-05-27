import React from 'react';
import { Github, Twitch } from 'lucide-react';

interface FooterProps {
  theme: 'light' | 'dark';
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
  const discordIcon = theme === 'dark' ? '/img/discord-white.svg' : '/img/discord.svg';
  return (
    <footer className={`${theme === 'dark' ? 'bg-black/20' : 'bg-white/20'} backdrop-blur-sm border-t ${theme === 'dark' ? 'border-blue-500/20' : 'border-blue-200/20'} mt-auto`}>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Links sociais no rodapé, visíveis em mobile onde botões flutuantes estão ocultos */}
          <div className="flex items-center space-x-6 md:hidden">
            <a
              href="https://github.com/icarogago/star-citizen-fleet-viewer"
              target="_blank"
              rel="noopener noreferrer"
              className={theme === 'dark' ? 'text-blue-300 md:hover:text-blue-400 transition-none md:transition-colors' : 'text-blue-700 md:hover:text-blue-900 transition-none md:transition-colors'}
            >
              <Github className="w-6 h-6" />
            </a>
            
            <a
              href="https://www.twitch.tv/metro2030"
              target="_blank"
              rel="noopener noreferrer"
              className={theme === 'dark' ? 'text-purple-300 md:hover:text-purple-400 transition-none md:transition-colors' : 'text-purple-700 md:hover:text-purple-900 transition-none md:transition-colors'}
            >
              <Twitch className="w-6 h-6" />
            </a>
            
            <a
              href="https://discord.gg/novafronteira"
              target="_blank"
              rel="noopener noreferrer"
              className={theme === 'dark' ? 'text-[#7289DA] md:hover:text-[#5B6EAE] transition-none md:transition-colors' : 'text-[#5865F2] md:hover:text-[#4752C4] transition-none md:transition-colors'}
            >
              <img
                src={discordIcon}
                alt="Discord"
                className="w-6 h-6"
              />
            </a>
          </div>

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