import React, { useState, useEffect } from 'react';
import { Search, Grid, List, RefreshCw, Filter, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Ship } from '../types/ship';
import ShipCard from './ShipCard';
import ShipListItem from './ShipListItem';
import LoadingSpinner from './LoadingSpinner';
import Footer from './Footer';
import FloatingButtons from './FloatingButtons';
import { loadAllShips, groupShipsByOwners } from '../lib/playerService';

const FleetViewer = () => {
  const [ships, setShips] = useState<Ship[]>([]);
  const [groupedShips, setGroupedShips] = useState<{ [key: string]: { ship: Ship, owners: string[] } }>({});
  const [filteredShips, setFilteredShips] = useState<{ [key: string]: { ship: Ship, owners: string[] } }>({});
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOwner, setSelectedOwner] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('nf-theme') === 'light' ? 'light' : 'dark';
    }
    return 'dark';
  });

  // Restaurar tema ao carregar
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('nf-theme', theme);
    document.documentElement.style.transition = 'background 0.3s, color 0.3s';
    // Notificar FloatingButtons para atualizar ícone do Discord
    const event = new Event('classChange');
    window.dispatchEvent(event);
  }, [theme]);

  // Toggle theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark');
  };

  // Load ships on component mount
  useEffect(() => {
    const loadShips = async () => {
      setLoading(true);
      setError(null);
      try {
        console.log('Iniciando carregamento de naves...');
        const loadedShips = await loadAllShips();
        console.log('Naves carregadas:', loadedShips);
        
        if (loadedShips.length === 0) {
          setError('Nenhuma nave foi encontrada. Verifique se os arquivos JSON estão no lugar correto.');
          return;
        }

        setShips(loadedShips);
        const grouped = groupShipsByOwners(loadedShips);
        console.log('Naves agrupadas:', grouped);
        setGroupedShips(grouped);
        setFilteredShips(grouped);
      } catch (error) {
        console.error('Erro ao carregar naves:', error);
        setError('Erro ao carregar as naves. Por favor, tente novamente.');
      } finally {
        setLoading(false);
      }
    };

    loadShips();
  }, []);

  // Get unique values for filters
  const owners = [...new Set(ships.map(ship => ship.owner))].sort();

  // Filter ships based on search and filters
  useEffect(() => {
    const filtered = Object.entries(groupedShips).reduce((acc, [key, value]) => {
      const matchesSearch = value.ship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          value.ship.manufacturer.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesOwner = selectedOwner === 'all' || value.owners.includes(selectedOwner);

      if (matchesSearch && matchesOwner) {
        acc[key] = value;
      }

      return acc;
    }, {} as { [key: string]: { ship: Ship, owners: string[] } });

    setFilteredShips(filtered);
  }, [groupedShips, searchTerm, selectedOwner]);

  const handleReloadFleet = async () => {
    setLoading(true);
    try {
      const loadedShips = await loadAllShips();
      setShips(loadedShips);
      const grouped = groupShipsByOwners(loadedShips);
      setGroupedShips(grouped);
      setFilteredShips(grouped);
    } catch (error) {
      console.error('Erro ao recarregar naves:', error);
    } finally {
      setLoading(false);
    }
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedOwner('all');
  };

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900' : 'bg-gradient-to-br from-slate-100 via-blue-100 to-slate-100'}`}>
      {/* Floating Buttons */}
      <FloatingButtons />

      {/* Header */}
      <div className={`${theme === 'dark' ? 'bg-black/20' : 'bg-white/20'} backdrop-blur-sm border-b ${theme === 'dark' ? 'border-blue-500/20' : 'border-blue-200/20'}`}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/img/ships/FRONTEIRA-Logo.png" alt="Logo Nova Fronteira" className="w-12 h-12 object-contain" />
              <h1 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Nova Fronteira</h1>
            </div>
            
            <div className="flex items-center gap-2">
              <Badge variant="outline" className={`${theme === 'dark' ? 'text-blue-300 border-blue-300' : 'text-blue-600 border-blue-600'}`}>
                {Object.keys(filteredShips).length} naves
              </Badge>
              <Button
                onClick={toggleTheme}
                variant="ghost"
                size="icon"
                className={`${theme === 'dark' ? 'text-yellow-300 hover:text-yellow-400' : 'text-gray-700 hover:text-gray-900'}`}
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
              <Button
                onClick={handleReloadFleet}
                disabled={loading}
                className={`${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                Recarregar Frota
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Filters */}
        <div className="container mx-auto px-4 py-6">
          <Card className={`${theme === 'dark' ? 'bg-black/20 border-blue-500/20' : 'bg-white/20 border-black/20'} backdrop-blur-sm mb-6`}>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-end">
                <div className="lg:col-span-2">
                  <label className={`text-sm font-medium mb-2 block ${theme === 'dark' ? 'text-blue-300' : 'text-[#0a2d62]'}`}>
                    Buscar naves
                  </label>
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
                    <Input
                      placeholder="Nome ou fabricante..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className={`pl-10 ${theme === 'dark' ? 'bg-black/20 border-blue-500/30 text-white placeholder:text-blue-300/50' : 'bg-white border-[#c0c2c4] text-[#3d71b1] placeholder:text-[#65758c]'}`}
                    />
                  </div>
                </div>

                <div>
                  <label className={`text-sm font-medium mb-2 block ${theme === 'dark' ? 'text-blue-300' : 'text-[#0a2d62]'}`}>
                    Dono
                  </label>
                  <Select value={selectedOwner} onValueChange={setSelectedOwner}>
                    <SelectTrigger className={`${theme === 'dark' ? 'bg-black/20 border-blue-500/30 text-white' : 'bg-white border-[#c0c2c4] text-[#3d71b1]'}`}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className={`${theme === 'dark' ? 'bg-slate-800 border-blue-500/30' : 'bg-white border-[#c0c2c4]'}`}>
                      <SelectItem value="all" className={theme === 'dark' ? 'text-white' : 'text-[#3d71b1]'}>Todos</SelectItem>
                      {owners.map(owner => (
                        <SelectItem key={owner} value={owner} className={theme === 'dark' ? 'text-white' : 'text-[#3d71b1]'}>
                          {owner}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-2 items-end md:items-center h-full">
                  <Button
                    variant="outline"
                    onClick={clearFilters}
                    className={`flex-1 ${theme === 'dark' ? 'border-blue-500/30 text-blue-300 hover:bg-blue-500/10' : 'border-[#c0c2c4] text-[#0a2d62] bg-[#f5f7fa] hover:bg-[#c0c2c4]/30 hover:text-[#3d71b1]'} transition-colors`}
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    Limpar
                  </Button>
                  <div className={`flex rounded-md overflow-hidden border ${theme === 'dark' ? 'border-blue-500/30' : 'border-black/20'}`}>
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                      className={`rounded-none ${viewMode === 'grid' ? 'bg-blue-600 text-white dark:bg-blue-600 dark:text-white' : 'text-blue-300 hover:bg-blue-500/10 dark:text-blue-300 dark:hover:bg-blue-500/10 text-blue-700 hover:bg-blue-200/20'} h-10`}
                    >
                      <Grid className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                      className={`rounded-none ${viewMode === 'list' ? 'bg-blue-600 text-white dark:bg-blue-600 dark:text-white' : 'text-blue-300 hover:bg-blue-500/10 dark:text-blue-300 dark:hover:bg-blue-500/10 text-blue-700 hover:bg-blue-200/20'} h-10`}
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

          {/* Error Message */}
          {error && !loading && (
            <div className="text-center py-12">
              <div className="text-red-300 text-lg mb-2">Erro ao carregar naves</div>
              <div className="text-red-300/60">{error}</div>
              <Button
                onClick={handleReloadFleet}
                className="mt-4 bg-red-600 hover:bg-red-700 text-white"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Tentar Novamente
              </Button>
            </div>
          )}

          {/* Ships Display */}
          {!loading && !error && (
            <>
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                  {Object.entries(filteredShips)
                    .sort(([keyA, { ship: shipA }], [keyB, { ship: shipB }]) => {
                      // Verifica se a nave começa com número
                      const aStartsWithNumber = /^\d/.test(shipA.name);
                      const bStartsWithNumber = /^\d/.test(shipB.name);

                      // Se uma começa com número e a outra não, a que começa com número vem primeiro
                      if (aStartsWithNumber && !bStartsWithNumber) return -1;
                      if (!aStartsWithNumber && bStartsWithNumber) return 1;

                      // Se ambas começam com número ou ambas não começam, ordena alfabeticamente
                      return shipA.name.localeCompare(shipB.name);
                    })
                    .map(([key, { ship, owners }]) => (
                      <ShipCard
                        key={key}
                        ship={ship}
                        ownerCount={owners.length}
                        owners={owners}
                      />
                    ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {Object.entries(filteredShips)
                    .sort(([keyA, { ship: shipA }], [keyB, { ship: shipB }]) => {
                      // Verifica se a nave começa com número
                      const aStartsWithNumber = /^\d/.test(shipA.name);
                      const bStartsWithNumber = /^\d/.test(shipB.name);

                      // Se uma começa com número e a outra não, a que começa com número vem primeiro
                      if (aStartsWithNumber && !bStartsWithNumber) return -1;
                      if (!aStartsWithNumber && bStartsWithNumber) return 1;

                      // Se ambas começam com número ou ambas não começam, ordena alfabeticamente
                      return shipA.name.localeCompare(shipB.name);
                    })
                    .map(([key, { ship, owners }]) => (
                      <ShipListItem key={key} ship={ship} ownerCount={owners.length} />
                    ))}
                </div>
              )}

              {Object.keys(filteredShips).length === 0 && (
                <div className="text-center py-12">
                  <div className="text-blue-300 text-lg mb-2">Nenhuma nave encontrada</div>
                  <div className="text-blue-300/60">Tente ajustar os filtros de busca</div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer theme={theme} />
    </div>
  );
};

export default FleetViewer;
