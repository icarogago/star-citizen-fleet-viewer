
import React, { useState, useEffect } from 'react';
import { Search, Grid, List, RefreshCw, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { shipData } from '../data/shipData';
import ShipCard from './ShipCard';
import ShipListItem from './ShipListItem';
import LoadingSpinner from './LoadingSpinner';

const FleetViewer = () => {
  const [ships, setShips] = useState(shipData);
  const [filteredShips, setFilteredShips] = useState(shipData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedManufacturer, setSelectedManufacturer] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedOwner, setSelectedOwner] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [loading, setLoading] = useState(false);

  // Get unique values for filters
  const manufacturers = [...new Set(ships.map(ship => ship.manufacturer))];
  const categories = [...new Set(ships.map(ship => ship.category))];
  const owners = [...new Set(ships.map(ship => ship.owner))];

  // Filter ships based on search and filters
  useEffect(() => {
    let filtered = ships.filter(ship => {
      const matchesSearch = ship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           ship.manufacturer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           ship.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesManufacturer = selectedManufacturer === 'all' || ship.manufacturer === selectedManufacturer;
      const matchesCategory = selectedCategory === 'all' || ship.category === selectedCategory;
      const matchesOwner = selectedOwner === 'all' || ship.owner === selectedOwner;

      return matchesSearch && matchesManufacturer && matchesCategory && matchesOwner;
    });

    setFilteredShips(filtered);
  }, [ships, searchTerm, selectedManufacturer, selectedCategory, selectedOwner]);

  const handleReloadFleet = async () => {
    setLoading(true);
    // Simulate loading delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    setShips([...shipData]);
    setLoading(false);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedManufacturer('all');
    setSelectedCategory('all');
    setSelectedOwner('all');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-blue-500/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">★</span>
              </div>
              <h1 className="text-3xl font-bold text-white">Frota Star Citizen</h1>
            </div>
            
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-blue-300 border-blue-300">
                {filteredShips.length} naves
              </Badge>
              <Button
                onClick={handleReloadFleet}
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                Recarregar Frota
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 py-6">
        <Card className="bg-black/20 backdrop-blur-sm border-blue-500/20 mb-6">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 items-end">
              <div className="lg:col-span-2">
                <label className="text-sm font-medium text-blue-300 mb-2 block">
                  Buscar naves
                </label>
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
                  <Input
                    placeholder="Nome, fabricante ou descrição..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-black/20 border-blue-500/30 text-white placeholder:text-blue-300/50"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-blue-300 mb-2 block">
                  Fabricante
                </label>
                <Select value={selectedManufacturer} onValueChange={setSelectedManufacturer}>
                  <SelectTrigger className="bg-black/20 border-blue-500/30 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-blue-500/30">
                    <SelectItem value="all">Todos</SelectItem>
                    {manufacturers.map(manufacturer => (
                      <SelectItem key={manufacturer} value={manufacturer} className="text-white">
                        {manufacturer}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-blue-300 mb-2 block">
                  Categoria
                </label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="bg-black/20 border-blue-500/30 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-blue-500/30">
                    <SelectItem value="all">Todas</SelectItem>
                    {categories.map(category => (
                      <SelectItem key={category} value={category} className="text-white">
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-blue-300 mb-2 block">
                  Proprietário
                </label>
                <Select value={selectedOwner} onValueChange={setSelectedOwner}>
                  <SelectTrigger className="bg-black/20 border-blue-500/30 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-blue-500/30">
                    <SelectItem value="all">Todos</SelectItem>
                    {owners.map(owner => (
                      <SelectItem key={owner} value={owner} className="text-white">
                        {owner}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={clearFilters}
                  className="flex-1 border-blue-500/30 text-blue-300 hover:bg-blue-500/10"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Limpar
                </Button>
                <div className="flex rounded-md overflow-hidden border border-blue-500/30">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className={`rounded-none ${viewMode === 'grid' ? 'bg-blue-600' : 'text-blue-300 hover:bg-blue-500/10'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className={`rounded-none ${viewMode === 'list' ? 'bg-blue-600' : 'text-blue-300 hover:bg-blue-500/10'}`}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Loading */}
        {loading && <LoadingSpinner />}

        {/* Ships Display */}
        {!loading && (
          <>
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                {filteredShips.map((ship) => (
                  <ShipCard key={ship.id} ship={ship} />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredShips.map((ship) => (
                  <ShipListItem key={ship.id} ship={ship} />
                ))}
              </div>
            )}

            {filteredShips.length === 0 && (
              <div className="text-center py-12">
                <div className="text-blue-300 text-lg mb-2">Nenhuma nave encontrada</div>
                <div className="text-blue-300/60">Tente ajustar os filtros de busca</div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default FleetViewer;
