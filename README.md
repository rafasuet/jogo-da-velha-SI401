# Jogo da Velha

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

Jogo da velha para dois jogadores no navegador, feito em HTML, CSS e JavaScript puro (sem bibliotecas). Atividade avaliativa da disciplina **SI401 — Programação para a Web** (FT-Unicamp, 2º semestre de 2026).

**[▶ Jogar agora](https://rafasuet.github.io/jogo-da-velha-SI401/)**

![Tela inicial do Jogo da Velha](docs/preview.png)

## Funcionalidades

- Cadastro do nome dos jogadores X e O antes da partida.
- Indicação de quem joga na vez, detecção de vitória (8 combinações) e de empate.
- Tabuleiro bloqueado ao fim da partida e botão para reiniciar sem recarregar a página.
- Acessível: as casas são `<button>`s com `aria-label`, e os avisos usam `aria-live` para leitores de tela.

## Como rodar

Não precisa instalar nada: abra o `index.html` no navegador.

## Estrutura

| Arquivo | Conteúdo |
| --- | --- |
| `index.html` | Formulário dos jogadores, tabuleiro e mensagens |
| `style.css` | Layout e estilos |
| `script.js` | Estado do tabuleiro, turnos e verificação de vitória/empate |
