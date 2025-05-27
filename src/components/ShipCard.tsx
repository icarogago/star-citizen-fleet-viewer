
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Ship } from '../types/ship';

interface ShipCardProps {
  ship: Ship;
}

const ShipCard: React.FC<ShipCardProps> = ({ ship }) => {
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

        {/* Owner badge */}
        <div className="absolute top-3 right-3">
          <Badge variant="outline" className="bg-black/60 text-green-300 border-green-500/30">
            {ship.owner}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
            {ship.name}
          </h3>
          <Badge variant="outline" className="mt-1 text-yellow-300 border-yellow-500/30">
            {ship.category}
          </Badge>
        </div>

        <p className="text-blue-200/80 text-sm line-clamp-3">
          {ship.description}
        </p>

        {ship.specifications && (
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-blue-500/20">
            {ship.specifications.crew && (
              <div className="text-xs">
                <span className="text-blue-300">Tripulação:</span>
                <span className="text-white ml-1">{ship.specifications.crew}</span>
              </div>
            )}
            {ship.specifications.cargo && (
              <div className="text-xs">
                <span className="text-blue-300">Carga:</span>
                <span className="text-white ml-1">{ship.specifications.cargo}</span>
              </div>
            )}
            {ship.specifications.role && (
              <div className="text-xs col-span-2">
                <span className="text-blue-300">Função:</span>
                <span className="text-white ml-1">{ship.specifications.role}</span>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ShipCard;
