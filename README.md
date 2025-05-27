# NF Fleet Viewer

Projeto de estudo para visualização da frota de Star Citizen da comunidade Nova Fronteira.

## Sobre o Projeto

Este projeto foi inicialmente concebido através do Lovable, uma plataforma de desenvolvimento assistido por IA. A implementação e evolução do código foram realizadas utilizando o Cursor IDE, com melhorias significativas na interface e funcionalidades.

A interface e algumas funcionalidades foram inspiradas no [Fleet Viewer](https://www.flaviomachado.com.br/frota/) do Flávio Machado, adaptadas e expandidas para atender às necessidades específicas da Nova Fronteira.

## Funcionalidades

- Visualização da frota em modos de grade e lista.
- Carregamento dinâmico de dados dos jogadores a partir de arquivos JSON.
- Busca por nome da nave ou dono.
- Suporte a temas claro e escuro.
- Layout responsivo para diferentes tamanhos de tela.

## Como Configurar e Executar

1. Clone este repositório.
2. Instale as dependências: `npm install` ou `yarn install`.
3. Crie o arquivo `public/players/index.json` com um array JSON contendo os nomes dos arquivos JSON dos jogadores (ex: `["JulaoBR.json", "Tiosan.json"]`). Coloque os arquivos JSON dos jogadores na pasta `public/players`.
4. Inicie o servidor de desenvolvimento: `npm run dev` ou `yarn dev`.
5. Abra o projeto no seu navegador (geralmente em `http://localhost:5173`).

## Estrutura do Projeto

- `public/players/`: Contém os arquivos JSON dos jogadores e o `index.json`.
- `src/components/`: Componentes React da interface.
- `src/lib/`: Funções de serviço (playerService.ts).
- `src/types/`: Definições de tipos TypeScript.
- `src/index.css`: Estilos globais e configuração do Tailwind CSS.
- `index.html`: Arquivo HTML principal.
- `postcss.config.js`: Configuração do PostCSS para processar Tailwind CSS.

## Sobre o Projeto

Este projeto foi desenvolvido como um estudo e demonstração das funcionalidades de visualização de frota e manipulação de dados.

## ✨ Características

- 🎨 Interface moderna e responsiva
- 🔍 Sistema de busca e filtros avançados
- 👥 Visualização de donos de naves
- 📱 Suporte a visualização em grid e lista
- 🖼️ Exibição de imagens das naves
- 🔄 Atualização dinâmica dos dados (via `index.json`)
- 📊 Estatísticas da frota em tempo real

## 🛠️ Tecnologias Utilizadas

- React
- TypeScript
- Tailwind CSS
- Vite
- Shadcn/ui

Você também pode visualizar o projeto implantado no Vercel aqui:
[https://star-citizen-fleet-viewer.vercel.app/](https://star-citizen-fleet-viewer.vercel.app/)

## 📁 Estrutura do Projeto

```
nf-fleet-viewer/
├── public/
│   └── players/         # Arquivos JSON dos players (incluindo index.json)
├── src/
│   ├── components/      # Componentes React
│   ├── lib/            # Serviços e utilitários
│   ├── types/          # Definições de tipos
│   └── styles/         # Estilos globais
└── docs/               # Documentação
```

## ➕ Adicionando Novos Jogadores

O projeto carrega os dados dos jogadores dinamicamente a partir dos arquivos listados em `public/players/index.json`. Para adicionar um novo jogador à frota, siga estes passos:

1. Acesse o [Hangar Link](https://hangar.link/fleet/canvas) e faça login com sua conta RSI.
2. Exporte sua frota no formato JSON, incluindo apenas as naves que você possui atualmente no hangar ou que tem CCU para atualizar/comprar.
3. Salve o arquivo JSON do jogador dentro da pasta `public/players/` com o nome do jogador (ex: `Jogador.json`).
4. Edite o arquivo `public/players/index.json` e adicione o nome do novo arquivo JSON ao array. Por exemplo:
    ```json
    [
      "JulaoBR.json",
      "Tiosan.json",
      "NovoJogador.json"
    ]
    ```

**Importante:** 
- Utilize apenas naves que você possui atualmente no hangar ou que tem CCU para atualizar/comprar.
- O arquivo JSON deve ser exportado diretamente do [Hangar Link](https://hangar.link/fleet/canvas).
- Mantenha o formato original do arquivo exportado, sem modificações.
