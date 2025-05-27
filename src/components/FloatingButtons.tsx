import React from 'react';
import { Github, Twitch } from 'lucide-react';
import { Button } from '@/components/ui/button';

const getDiscordIcon = () => {
  if (typeof window !== 'undefined') {
    const isDark = document.documentElement.classList.contains('dark');
    return isDark ? '/img/discord-white.svg' : '/img/discord.svg';
  }
  return '/img/discord.svg';
};

const FloatingButtons = () => {
  const [discordIcon, setDiscordIcon] = React.useState('/img/discord.svg');

  React.useEffect(() => {
    const updateIcon = () => {
      setDiscordIcon(document.documentElement.classList.contains('dark') ? '/img/discord-white.svg' : '/img/discord.svg');
    };
    updateIcon();
    window.addEventListener('classChange', updateIcon);
    return () => window.removeEventListener('classChange', updateIcon);
  }, []);

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 flex-col gap-4 z-50 hidden md:flex">
      <Button
        variant="ghost"
        size="icon"
        className="bg-white/10 hover:bg-white/20 dark:bg-black/20 dark:hover:bg-black/30 backdrop-blur-sm border border-black/20 dark:border-transparent md:transition-colors"
        asChild
      >
        <a
          href="https://github.com/icarogago/star-citizen-fleet-viewer"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white md:transition-colors"
        >
          <Github className="w-5 h-5" />
        </a>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="bg-white/10 hover:bg-white/20 dark:bg-black/20 dark:hover:bg-black/30 backdrop-blur-sm border border-black/20 dark:border-transparent md:transition-colors"
        asChild
      >
        <a
          href="https://www.twitch.tv/metro2030"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 md:transition-colors"
        >
          <Twitch className="w-5 h-5" />
        </a>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="bg-white/10 hover:bg-white/20 dark:bg-black/20 dark:hover:bg-black/30 backdrop-blur-sm border border-black/20 dark:border-transparent md:transition-colors"
        asChild
      >
        <a
          href="https://discord.gg/novafronteira"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#5865F2] dark:text-[#7289DA] hover:text-[#4752C4] dark:hover:text-[#5B6EAE] md:transition-colors"
        >
          <img
            src={discordIcon}
            alt="Discord"
            className="w-5 h-5"
          />
        </a>
      </Button>
    </div>
  );
};

export default FloatingButtons; 