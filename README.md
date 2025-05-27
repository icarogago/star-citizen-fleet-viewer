# NF Fleet Viewer 🚀

Um visualizador de frota moderno e interativo para a organização Nova Fronteira no universo de Star Citizen. Este projeto foi desenvolvido primariamente para fins de estudo.

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

## 🚀 Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/icarogago/nf-fleet-viewer.git
```

2. Instale as dependências:
```bash
cd nf-fleet-viewer
npm install
```

3. Execute o projeto:
```bash
npm run dev
```

4. Acesse `http://localhost:5173` no seu navegador

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
