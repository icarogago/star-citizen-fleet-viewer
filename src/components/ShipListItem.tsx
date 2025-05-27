import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Ship } from '../types/ship';

interface ShipListItemProps {
  ship: Ship;
  ownerCount: number;
  owners: string[];
}

const ShipListItem: React.FC<ShipListItemProps> = ({ ship, ownerCount, owners }) => {
  return (
    <Card className="bg-black/20 backdrop-blur-sm border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
      <CardContent className="p-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Image */}
          <div className="w-full md:w-32 h-20 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden flex-shrink-0">
            {ship.image ? (
              <img
                src={ship.image}
                alt={ship.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-blue-300/50">
                <div className="text-2xl">🚀</div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div>
                <h3 className="text-lg font-bold text-white hover:text-blue-300 transition-colors">
                  {ship.name}
                </h3>
                <div className="flex flex-wrap gap-2 mt-1">
                  <Badge variant="secondary" className="bg-black/60 text-blue-300 border-blue-500/30">
                    {ship.manufacturer}
                  </Badge>
                  <Badge variant="outline" className="text-blue-300 border border-[#0a2d62]/60 dark:border-blue-500/60 text-blue-800 dark:text-blue-300">
                    {ownerCount} {ownerCount === 1 ? 'Dono' : 'Donos'}
                  </Badge>
                </div>
              </div>

              {ship.specifications && (
                <div className="flex flex-col gap-1 text-xs">
                  {ship.specifications.crew && (
                    <div>
                      <span className="text-blue-300">Tripulação:</span>
                      <span className="text-white ml-1">{ship.specifications.crew}</span>
                    </div>
                  )}
                  {ship.specifications.cargo && (
                    <div>
                      <span className="text-blue-300">Carga:</span>
                      <span className="text-white ml-1">{ship.specifications.cargo}</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            <p className="text-blue-200/80 text-sm">
              {ship.description}
            </p>

            {ship.specifications?.role && (
              <div className="text-xs">
                <span className="text-blue-300">Função:</span>
                <span className="text-white ml-1">{ship.specifications.role}</span>
              </div>
            )}

            {/* Lista de donos */}
            <div className="text-sm dark:text-blue-300/80 text-blue-900/90">
              <div className="font-medium mb-1 dark:text-blue-300 text-blue-900">Donos:</div>
              <div className="space-y-1">
                <span className="dark:text-blue-300 text-blue-900">
                  {owners.map(owner => `[NF] ${owner}`).join(', ')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShipListItem;
