
import { Ship } from '../types/ship';

export const shipData: Ship[] = [
  {
    id: '1',
    name: 'Apollo Medivac',
    manufacturer: 'RSI',
    category: 'Medical',
    description: 'A dedicated medical ship designed for search and rescue operations. Features advanced medical bay and emergency response capabilities.',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop',
    owner: 'Nova Fronteira',
    specifications: {
      crew: '1-3',
      cargo: '12 SCU',
      role: 'Medical Support',
      length: '61m',
      beam: '61m',
      height: '20m'
    }
  },
  {
    id: '2',
    name: 'Arrow',
    manufacturer: 'Anvil Aerospace',
    category: 'Fighter',
    description: 'Light fighter designed for speed and agility. Perfect for escort missions and quick response scenarios.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
    owner: 'Nova Fronteira',
    specifications: {
      crew: '1',
      cargo: '0 SCU',
      role: 'Light Fighter',
      length: '16m',
      beam: '12m',
      height: '4m'
    }
  },
  {
    id: '3',
    name: 'Constellation Taurus',
    manufacturer: 'RSI',
    category: 'Freight',
    description: 'Dedicated freight hauler with massive cargo capacity. Built for long-distance commercial transport.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
    owner: 'Nova Fronteira',
    specifications: {
      crew: '1-5',
      cargo: '174 SCU',
      role: 'Heavy Freight',
      length: '61m',
      beam: '26m',
      height: '14m'
    }
  },
  {
    id: '4',
    name: 'Cutlass Black',
    manufacturer: 'Drake Interplanetary',
    category: 'Multi-role',
    description: 'Versatile medium ship capable of cargo transport, combat operations, and boarding actions.',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop',
    owner: 'Nova Fronteira',
    specifications: {
      crew: '1-3',
      cargo: '46 SCU',
      role: 'Multi-purpose',
      length: '29m',
      beam: '26m',
      height: '8m'
    }
  },
  {
    id: '5',
    name: 'F7A Hornet Mk II',
    manufacturer: 'Anvil Aerospace',
    category: 'Fighter',
    description: 'Military-grade heavy fighter with superior firepower and defensive capabilities.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop',
    owner: 'Nova Fronteira',
    specifications: {
      crew: '1',
      cargo: '2 SCU',
      role: 'Heavy Fighter',
      length: '22m',
      beam: '22m',
      height: '6m'
    }
  },
  {
    id: '6',
    name: 'F7C-S Hornet Ghost Mk II',
    manufacturer: 'Anvil Aerospace',
    category: 'Stealth Fighter',
    description: 'Stealth variant of the Hornet with reduced signature and reconnaissance capabilities.',
    owner: 'Nova Fronteira',
    specifications: {
      crew: '1',
      cargo: '2 SCU',
      role: 'Stealth Fighter',
      length: '22m',
      beam: '22m',
      height: '6m'
    }
  },
  {
    id: '7',
    name: 'Fury',
    manufacturer: 'Mirai',
    category: 'Light Fighter',
    description: 'Compact and agile light fighter designed for hit-and-run tactics.',
    owner: 'Nova Fronteira',
    specifications: {
      crew: '1',
      cargo: '0 SCU',
      role: 'Light Fighter',
      length: '12m',
      beam: '8m',
      height: '3m'
    }
  },
  {
    id: '8',
    name: 'Golem',
    manufacturer: 'Esperia',
    category: 'Heavy Fighter',
    description: 'Alien technology heavy fighter with unique combat capabilities.',
    owner: 'Nova Fronteira',
    specifications: {
      crew: '1',
      cargo: '4 SCU',
      role: 'Heavy Fighter',
      length: '28m',
      beam: '20m',
      height: '8m'
    }
  },
  {
    id: '9',
    name: 'Guardian QI',
    manufacturer: 'Banu',
    category: 'Multi-role',
    description: 'Alien multi-role ship with advanced defensive systems.',
    owner: 'Nova Fronteira',
    specifications: {
      crew: '1-2',
      cargo: '8 SCU',
      role: 'Multi-role',
      length: '25m',
      beam: '18m',
      height: '7m'
    }
  },
  {
    id: '10',
    name: 'Mercury Star Runner',
    manufacturer: 'Crusader Industries',
    category: 'Data Runner',
    description: 'Fast courier ship designed for data transport and smuggling operations.',
    owner: 'Nova Fronteira',
    specifications: {
      crew: '1-3',
      cargo: '114 SCU',
      role: 'Data Runner',
      length: '40m',
      beam: '52m',
      height: '10m'
    }
  },
  {
    id: '11',
    name: 'Nautilus',
    manufacturer: 'Aegis Dynamics',
    category: 'Mine Layer',
    description: 'Specialized mine laying ship for area denial and defensive operations.',
    owner: 'Nova Fronteira',
    specifications: {
      crew: '6-10',
      cargo: '864 SCU',
      role: 'Mine Layer',
      length: '95m',
      beam: '60m',
      height: '30m'
    }
  },
  {
    id: '12',
    name: 'Perseus',
    manufacturer: 'RSI',
    category: 'Corvette',
    description: 'Anti-capital ship corvette with heavy torpedoes and strong armor.',
    owner: 'Nova Fronteira',
    specifications: {
      crew: '6-8',
      cargo: '12 SCU',
      role: 'Anti-Capital',
      length: '102m',
      beam: '42m',
      height: '24m'
    }
  },
  {
    id: '13',
    name: 'Starlancer MAX',
    manufacturer: 'Crusader Industries',
    category: 'Heavy Freight',
    description: 'Large cargo hauler with exceptional freight capacity.',
    owner: 'Nova Fronteira',
    specifications: {
      crew: '1-4',
      cargo: '924 SCU',
      role: 'Heavy Freight',
      length: '94m',
      beam: '40m',
      height: '20m'
    }
  },
  {
    id: '14',
    name: 'Starlancer TAC',
    manufacturer: 'Crusader Industries',
    category: 'Gunship',
    description: 'Tactical variant equipped for combat operations and troop transport.',
    owner: 'Nova Fronteira',
    specifications: {
      crew: '2-6',
      cargo: '48 SCU',
      role: 'Gunship',
      length: '94m',
      beam: '40m',
      height: '20m'
    }
  },
  {
    id: '15',
    name: 'Vulture',
    manufacturer: 'Drake Interplanetary',
    category: 'Salvage',
    description: 'Specialized salvage ship for scrapping and material recovery operations.',
    owner: 'Nova Fronteira',
    specifications: {
      crew: '1-2',
      cargo: '12 SCU',
      role: 'Salvage',
      length: '34m',
      beam: '28m',
      height: '10m'
    }
  }
];
