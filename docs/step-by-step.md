# Documentação do Projeto NF Fleet Viewer

Este documento detalha as principais alterações e funcionalidades implementadas no projeto NF Fleet Viewer.

## Funcionalidades Implementadas

### Visualização da Frota
- Carregamento dinâmico de dados de naves a partir de arquivos JSON na pasta `public/players`, utilizando um arquivo `index.json` para listar os jogadores.
- Suporte a múltiplos formatos de arquivos JSON (formato simples e StarJump Fleet Viewer).
- Exibição da frota em modos de visualização em grade (cards) e lista.

### Detalhes das Naves e Donos
- Cada nave exibe informações como fabricante e contagem de donos.
- Nomes das naves exibidos em maiúsculas.
- Lista completa de donos disponível para cada nave, exibida de forma otimizada em cada modo de visualização (com a sigla [NF] antes do nome).

### Busca e Filtro
- Campo de busca unificado para pesquisar naves por nome ou donos.
- Busca dinâmica com atualização em tempo real dos resultados.
- Campo de filtro responsivo, adaptando a exibição em telas mobile e desktop.

### Interface e Experiência do Usuário
- Implementação de suporte a temas claro e escuro, com persistência da preferência do usuário.
- Botões flutuantes para links sociais (GitHub, Twitch, Discord) em desktop.
- Links sociais movidos para o rodapé em telas mobile.
- Animações e transições otimizadas para diferentes tamanhos de tela (desativadas em mobile para melhor performance).
- Implementação da fonte "Space Grotesk" para uma tipografia moderna.

## Arquivos Principais
- `src/lib/playerService.ts`: Serviço principal para carregar e processar dados dos jogadores e naves.
- `src/components/FleetViewer.tsx`: Componente principal que gerencia a exibição da frota, filtros e modos de visualização.
- `src/components/ShipCard.tsx`: Componente para exibir detalhes da nave no modo de grade.
- `src/components/ShipListItem.tsx`: Componente para exibir detalhes da nave no modo de lista.
- `src/types/ship.ts`: Definições de tipos TypeScript para as estruturas de dados de naves.
- `public/players/index.json`: Arquivo JSON contendo a lista de nomes de arquivos dos jogadores (necessário para carregamento dinâmico).

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
- **Substituição do botão de alternância de tema no cabeçalho por um componente Switch com animação.**
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
- **Alternância de tema mais interativa e visualmente agradável com o componente Switch.**

### 10. Ajustes de Responsividade e Animações
- Os cards agora exibem 2 colunas em telas mobile.
- As animações de transição e escala foram desativadas para telas mobile para melhor performance.
- Os botões flutuantes foram ocultados em telas mobile, e os links sociais foram recolocados no rodapé para mobile.
- A animação de mudança de cor do texto do nome da nave ao clicar no card foi removida apenas no mobile.
- **A animação de escala (expansão) dos cards ocorre ao passar o mouse (hover) em telas de tablet e desktop, com transição suave de entrada e saída.**
- Adicionado cursor pointer para melhor feedback visual da interatividade dos cards.

### 11. Melhorias no Campo de Filtro
- Substituição do botão "Limpar" por um ícone de X mais compacto.
- Implementação de campo de filtro responsivo:
  - Em mobile: Campo compacto que expande ao receber foco
  - Em desktop: Campo sempre expandido com todos os filtros visíveis
- Melhor utilização do espaço em telas menores
- Interface mais limpa e moderna

### 12. Melhorias no Sistema de Busca e Exibição de Donos
- Unificação do campo de busca para pesquisar por nome da nave ou dono
- Busca dinâmica que atualiza os resultados em tempo real
- Remoção do seletor de dono em favor da busca unificada
- Remoção do botão de limpeza do filtro.
- Exibição consistente da lista de donos tanto na visualização em grid quanto em lista
- Melhoria na experiência do usuário com feedback visual imediato
- Suporte a temas claro/escuro na exibição dos donos
- Ícones de seta para melhor visualização da lista de donos na visualização em grid
- Na visualização em lista, os nomes dos donos agora aparecem em sequência, separados por vírgulas e espaços, para otimizar o espaço.
- **As tags exibidas no modo lista (Fabricante e Contagem de Donos) agora são as mesmas do modo grid, removendo a tag de Categoria para consistência visual.**
- **Adição da sigla [NF] antes do nome de cada dono nas visualizações em grid e lista.**

### Benefícios das Mudanças
- Interface mais limpa e intuitiva
- Busca mais eficiente e flexível
- Consistência visual entre os modos de exibição
- Melhor experiência do usuário com feedback imediato
- Suporte completo a temas claro/escuro
- Melhor utilização do espaço na visualização em lista
- Aparência unificada dos cards em ambos os modos de visualização

### 13. Implementação da Fonte "Space Grotesk"
- Adição dos links da fonte "Space Grotesk" ao `index.html`.
- Configuração da propriedade `font-family` no seletor `body` do arquivo `src/index.css` para usar a fonte "Space Grotesk" como padrão.

### Benefícios da Mudança
- Atualização da tipografia do projeto para uma aparência mais moderna e consistente.
- Melhoria na legibilidade e estética geral da interface. 