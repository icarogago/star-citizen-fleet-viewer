import { Ship } from '../types/ship';

// Interface para o formato do Tiosan.json
interface SimpleShip {
  name: string;
  'shipname:': string;
  type: string;
}

// Interface para o formato do StarJump Fleet Viewer
interface CanvasItem {
  id: string;
  itemType: string;
  shipSlug: string;
  defaultText: string;
  variantSlug: string;
}

interface StarJumpFleetData {
  type: string;
  version: number;
  canvasItems: CanvasItem[];
}

// Mapeamento de nomes de naves para seus slugs de imagem
const shipImageMap: { [key: string]: string } = {
  'f7a hornet mk ii': 'f7a-mk-ii',
  'f7a hornet mk2': 'f7a-mk-ii',
  'f7a mk ii': 'f7a-mk-ii',
  'f7a mk2': 'f7a-mk-ii',
  'hornet mk ii': 'f7a-mk-ii',
  'hornet mk2': 'f7a-mk-ii'
};

const getImagePath = (shipName: string, shipSlug?: string): string => {
  const normalizedName = shipName.toLowerCase();
  const mappedSlug = shipImageMap[normalizedName];
  
  if (mappedSlug) {
    return `/img/ships/${mappedSlug}.jpg`;
  }
  
  if (shipSlug) {
    return `/img/ships/${shipSlug}.jpg`;
  }
  
  return `/img/ships/${normalizedName.replace(/\s+/g, '-')}.jpg`;
};

// Função para carregar dados de um jogador
async function loadPlayerData(playerName: string): Promise<SimpleShip[] | StarJumpFleetData | null> {
  try {
    console.log(`Carregando dados do jogador ${playerName} via fetch...`);
    const response = await fetch(`/players/${playerName}`);
    
    if (!response.ok) {
      console.error(`Erro ao buscar dados de ${playerName}:`, response.status, response.statusText);
      return null; // Retorna null se a requisição não for bem sucedida (ex: 404)
    }

    const data = await response.json();
    console.log(`Dados de ${playerName} carregados:`, data);
    return data; // Retorna os dados JSON
  } catch (error) {
    console.error(`Erro ao processar dados de ${playerName}:`, error);
    return null;
  }
}

// Função para carregar todas as naves dos jogadores listados em index.json
export async function loadAllShips(): Promise<Ship[]> {
  console.log('Iniciando carregamento de todas as naves via index.json...');
  const allShips: Ship[] = [];
  let playerFiles: string[] = [];

  try {
    // Buscar a lista de arquivos em index.json
    const indexResponse = await fetch('/players/index.json');
    if (!indexResponse.ok) {
      console.error('Erro ao buscar index.json', indexResponse.status, indexResponse.statusText);
      return []; // Retorna array vazio se index.json não for encontrado ou houver erro
    }
    playerFiles = await indexResponse.json();
    console.log('Lista de arquivos de jogadores encontrada:', playerFiles);

    // Verificar se playerFiles é realmente um array
    if (!Array.isArray(playerFiles)) {
      console.error('Conteúdo de index.json não é um array válido:', playerFiles);
      return [];
    }

  } catch (error) {
    console.error('Erro ao processar index.json:', error);
    return []; // Retorna array vazio em caso de erro no processamento do JSON
  }

  for (const fileName of playerFiles) {
    // Garantir que estamos carregando apenas strings e que terminam com .json
    if (typeof fileName !== 'string' || !fileName.toLowerCase().endsWith('.json')) {
      console.warn(`Ignorando item inválido na lista: ${fileName}`);
      continue;
    }
    
    const data = await loadPlayerData(fileName);
    if (!data) {
      console.warn(`Pulando processamento de ${fileName} devido a erro no carregamento ou formato inválido.`);
      continue; // Pula para o próximo arquivo se houver erro no carregamento/processamento
    }

    let shipsForPlayer: Ship[] = [];

    console.log(`Processando dados do arquivo: ${fileName}`);

    // Verifica o formato do JSON obtidos de loadPlayerData
    if (Array.isArray(data)) {
      // Formato do Tiosan.json (array simples)
      // Precisamos extrair o nome do jogador do nome do arquivo para usar como owner
      const playerName = fileName.replace(/\.json$/i, '');
      shipsForPlayer = (data as SimpleShip[]).map(ship => ({
        id: `${playerName}-${ship.name}`,
        name: ship.name.toUpperCase(),
        manufacturer: ship.name.split(' ')[0].toUpperCase(), // Pode precisar de lógica melhor
        category: 'Nave', // Categoria fixa por enquanto
        owner: playerName,
        image: getImagePath(ship.name)
      }));
      console.log(`Naves processadas para ${fileName} (formato simples):`, shipsForPlayer);

    } else if (typeof data === 'object' && data !== null && 'type' in data && data.type === 'starjumpFleetviewer') {
      // Formato do StarJump Fleet Viewer
       // Precisamos extrair o nome do jogador do nome do arquivo para usar como owner
      const playerName = fileName.replace(/\.json$/i, '');
      const starJumpData = data as StarJumpFleetData;
      shipsForPlayer = starJumpData.canvasItems
        .filter(item => item.itemType === 'SHIP')
        .map(ship => ({
          id: `${playerName}-${ship.shipSlug}`,
          name: ship.defaultText.toUpperCase(),
          manufacturer: ship.defaultText.split(' ')[0].toUpperCase(), // Pode precisar de lógica melhor
          category: 'Nave', // Categoria fixa por enquanto
          owner: playerName,
          image: getImagePath(ship.defaultText, ship.shipSlug)
        }));
      console.log(`Naves processadas para ${fileName} (formato StarJump):`, shipsForPlayer);

    } else {
      console.warn(`Formato de JSON não reconhecido ou inválido para ${fileName}:`, data);
       // Continua para o próximo arquivo
       continue;
    }

    allShips.push(...shipsForPlayer);
  }

  console.log('Total de naves carregadas via index.json:', allShips.length);
  return allShips;
}

// Função para agrupar naves por nome e contar donos
export const groupShipsByOwners = (ships: Ship[]): { [key: string]: { ship: Ship, owners: string[] } } => {
  const groupedShips: { [key: string]: { ship: Ship, owners: string[] } } = {};
  
  ships.forEach(ship => {
    const key = ship.name.toLowerCase();
    if (!groupedShips[key]) {
      groupedShips[key] = {
        ship: { ...ship },
        owners: [ship.owner]
      };
    } else if (!groupedShips[key].owners.includes(ship.owner)) {
      groupedShips[key].owners.push(ship.owner);
    }
  });
  
  return groupedShips;
}; 