import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Ship } from '../types/ship';

interface ShipCardProps {
  ship: Ship;
  ownerCount: number;
  owners: string[];
}

const ShipCard: React.FC<ShipCardProps> = ({ ship, ownerCount, owners }) => {
  return (
    <Card className="group bg-black/20 backdrop-blur-sm border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 overflow-hidden">
      <div className="relative">
        <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
          {ship.image ? (
            <img
              src={ship.image}
              alt={ship.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-blue-300/50">
              <div className="text-4xl">🚀</div>
            </div>
          )}
        </div>
        
        {/* Overlay with manufacturer */}
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-black/60 text-blue-300 border-blue-500/30">
            {ship.manufacturer}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="text-xl font-bold group-hover:text-blue-300 transition-colors text-white dark:text-white text-gray-900">
            {ship.name}
          </h3>
          <Badge variant="outline" className="mt-1 mr-auto text-blue-300 border border-[#0a2d62]/60 dark:border-blue-500/60 text-blue-800 dark:text-blue-300">
            {ownerCount} {ownerCount === 1 ? 'Dono' : 'Donos'}
          </Badge>
        </div>

        {/* Lista de donos */}
        <div className={`text-sm ${'dark:text-blue-300/80 text-blue-900/90'}`}>
          <div className={`font-medium mb-1 ${'dark:text-blue-300 text-blue-900'}`}>Donos:</div>
          <div className="space-y-1">
            {owners.map((owner, index) => (
              <div key={index} className="flex items-center gap-2">
                <img
                  src={typeof window !== 'undefined' && document.documentElement.classList.contains('dark')
                    ? 'https://img.icons8.com/forma-bold-filled/24/ffffff/forward.png'
                    : 'https://img.icons8.com/forma-bold-filled/24/forward.png'}
                  alt="Forward"
                  className="w-4 h-4"
                />
                <span className="dark:text-blue-300 text-blue-900">{owner}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShipCard;
