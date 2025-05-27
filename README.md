# NF Fleet Viewer

Projeto de estudo para visualização da frota de Star Citizen da comunidade Nova Fronteira.

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

1.  Salve o arquivo JSON do novo jogador dentro da pasta `public/players/`. Certifique-se de que o arquivo está em um dos formatos suportados pela aplicação.
2.  Edite o arquivo `public/players/index.json`. Este arquivo é um array JSON que lista os nomes de todos os arquivos de jogadores na pasta.
3.  Adicione o nome do arquivo JSON do novo jogador ao array em `public/players/index.json`. Por exemplo, se você adicionou `NovoJogador.json`, o `index.json` deve ficar assim:

    ```json
    [
      "JulaoBR.json",
      "Tiosan.json",
      "NovoJogador.json"
    ]
    ```

4.  Salve as alterações no `index.json`.
5.  Se o servidor de desenvolvimento (`npm run dev`) estiver rodando, pode ser necessário reiniciá-lo para que ele detecte a mudança no `index.json` e no novo arquivo JSON. Em produção, dependendo da configuração do servidor web, um refresh na página pode ser suficiente, mas reiniciar o servidor é a forma mais garantida.

Após seguir esses passos, as naves do novo jogador deverão aparecer na frota ao carregar a aplicação.

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Ícaro Gago**
- Desenvolvido como projeto de estudo.
- GitHub: [@icarogago](https://github.com/icarogago)
- Twitch: [Metro2030](https://www.twitch.tv/metro2030)

## 🌐 Links da Organização

- Discord: [Nova Fronteira](https://discord.gg/novafronteira)
- Twitch: [Metro2030](https://www.twitch.tv/metro2030)

## 📞 Suporte

Para suporte, entre em contato através do Discord da Nova Fronteira.

---

<div align="center">
  <p>Desenvolvido com ❤️ por Ícaro Gago</p>
  <p>
    <a href="https://github.com/icarogago/star-citizen-fleet-viewer">
      <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
    </a>
    <a href="https://www.twitch.tv/metro2030">
      <img src="https://img.shields.io/badge/Twitch-9146FF?style=for-the-badge&logo=twitch&logoColor=white" alt="Twitch"/>
    </a>
    <a href="https://discord.gg/novafronteira">
      <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" alt="Discord"/>
    </a>
  </p>
</div>
