# Documentação do Projeto NF Fleet Viewer

## Alterações Realizadas

### 1. Personalização de Identidade Visual
- Atualização do título da página e logo no `index.html`
- Atualização do cabeçalho do FleetViewer para "Nova Fronteira"

### 2. Simplificação dos Cards e Integração com Players
- Remoção de detalhes desnecessários dos cards de naves
- Criação do serviço `playerService.ts` para carregar dados dos players
- **Atualização do carregamento de players: Agora a lista de arquivos JSON de jogadores é lida dinamicamente do arquivo `/players/index.json` na pasta `public`.**
- **Necessidade do arquivo `index.json`:** Este arquivo deve conter um array JSON com os nomes de todos os arquivos `.json` dos jogadores presentes na pasta `public/players` (ex: `["JulaoBR.json", "Tiosan.json"]`).
- Implementação da leitura e processamento dos dois formatos de JSON (formato simples e StarJump Fleet Viewer).

### 3. Atualização da Estrutura de Dados
- Criação de interfaces para suportar diferentes formatos de JSON
- Suporte para `shipSlug` e `defaultText` do StarJump Fleet Viewer
- Suporte para formato simples com `name` e `shipname`
- Implementação de detecção automática do formato do JSON

### 4. Correção do Mapeamento de Imagens
- Implementação de sistema de mapeamento para nomes de naves
- Correção do caminho da imagem para F7A Hornet Mk II
- Criação da função `getImagePath` para gerenciar caminhos de imagens

### 5. Agrupamento de Naves e Contagem de Donos
- Implementação do sistema de agrupamento de naves por nome
- Contagem de donos únicos para cada nave
- Remoção do filtro de categoria
- Atualização dos cards para mostrar contagem de donos
- Nomes das naves exibidos em maiúsculas

### 6. Melhorias na Interface
- Simplificação dos filtros (apenas busca e fabricante)
- Atualização do layout dos cards e lista
- Melhoria na exibição da contagem de donos
- Otimização do sistema de busca

### 7. Ordenação das Naves
- Implementação de ordenação alfabética para todas as naves
- Naves que começam com números aparecem primeiro na lista
- Ordenação aplicada tanto na visualização em grid quanto em lista
- Uso de `localeCompare` para ordenação alfabética correta
- Implementação de lógica especial para naves com prefixo numérico

### 8. Implementação do Rodapé
- Criação do componente Footer com links sociais
- Integração com o layout principal
- Estilização consistente com o tema do projeto
- Links para:
  - GitHub do projeto
  - Twitch do fundador (Metro2030)
  - Discord da Nova Fronteira
- Adição de efeitos hover nos ícones
- Copyright e informações de autoria

### Benefícios do Rodapé
- Melhor navegabilidade do site
- Acesso rápido aos canais de comunicação
- Identidade visual consistente
- Informações de contato sempre visíveis

## Alterações no Sistema de Filtros e Exibição de Donos

### Modificações no Sistema de Filtros
- Substituição do filtro de Fabricante por filtro de Donos
- Implementação de filtragem baseada nos donos das naves
- Atualização da interface para refletir a nova funcionalidade de filtro

### Melhorias na Exibição de Donos
- Adição da lista completa de donos em cada card de nave
- Implementação de contador de donos com suporte a singular/plural
- Estilização da lista de donos com indicadores visuais
- Melhoria na organização visual das informações de propriedade

### Atualizações nos Componentes
- ShipCard: Adicionada nova prop `owners` para exibir a lista de donos
- FleetViewer: Atualizado para passar a lista de donos para o ShipCard
- Interface: Melhorada a apresentação visual das informações de propriedade

### Benefícios das Mudanças
- Melhor visualização da distribuição de propriedade das naves
- Facilidade para identificar naves compartilhadas
- Interface mais informativa e organizada
- Melhor experiência do usuário ao filtrar por donos

### Benefícios da Ordenação
- Melhor organização visual das naves
- Facilidade para encontrar naves específicas
- Consistência na apresentação dos dados
- Melhor experiência do usuário ao navegar pela frota

### 9. Implementação de Botões Flutuantes e Suporte a Temas
- Adição de botões flutuantes para redes sociais
- Implementação de suporte a temas claro/escuro
- Criação de ícones SVG personalizados para Discord
- Botão de alternância de tema no cabeçalho
- Adaptação de cores e estilos para ambos os temas

### Características dos Botões Flutuantes
- Posicionamento fixo no lado esquerdo da tela
- Efeito de hover com transição suave
- Ícones coloridos e responsivos
- Links para GitHub, Twitch e Discord
- Fundo semi-transparente com blur

### Suporte a Temas
- Tema claro com cores suaves
- Tema escuro com gradientes profundos
- Transições suaves entre temas
- Adaptação automática de cores
- Persistência da preferência do usuário

### Benefícios da Nova Funcionalidades
- Melhor acessibilidade com tema claro
- Navegação mais intuitiva com botões flutuantes
- Experiência visual mais rica
- Maior flexibilidade para os usuários
- Interface mais moderna e profissional

## Arquivos Principais
- `src/lib/playerService.ts`: Serviço principal para carregar e processar dados
- `src/components/FleetViewer.tsx`: Componente principal da interface
- `src/components/ShipCard.tsx`: Componente para exibição em grid
- `src/components/ShipListItem.tsx`: Componente para exibição em lista
- `src/types/ship.ts`: Definições de tipos para naves 