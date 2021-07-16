# 6º Projeto - Bootcamp Responde Aí: BuzzQuizz 

## Criar um site em que é possível criar e jogar quizzes

![Badge](https://img.shields.io/github/license/lfaires/BuzzQuizz)

### ✅ Requisitos

#### * Layout

- Aplicar layout, seguindo figma fornecido [aqui - TrackIt](https://www.figma.com/file/nCuPD1re0r4EAwNl7OCNvz/BuzzQuizz-Turma-02?node-id=0%3A1)
- O layout deve alternar para versão mobile quando a largura da janela for inferior a 1100px

#### * Tela 1 - Lista quizzes

- Nesta tela, devem ser listados os quizzes fornecidos pelo servidor, seguindo o layout dado
- A lista de quizzes do usuário deve mostrar somente seus quizzes, enquanto a lista de baixo deve mostrar todos os quizzes recebidos, sem os do usuário. Para diferenciar os quizzes do usuário dos demais, veja o requisito **Quizzes do Usuário**
- Os quizzes devem ser exibidos num formato retangular (conforme layout), com a imagem e título do quizz. A imagem deve estar sobreposta com um degradê de preto para transparente conforme layout. Ao clicar sobre o quizz, esta tela deve sumir e dar lugar à **Tela 2: Página de um quizz** do quizz em questão
- Ao clicar em "Criar Quizz" ou no "+" essa tela deve sumir, dando lugar à tela de **Tela 3: Criação de Quiz**

#### * Tela 2 - Página de um quizz (perguntas)

- No topo do quizz, deve ser exibido um banner com a imagem e o título do quizz. A imagem deve estar escurecida com uma camada preta de 60% de opacidade.
- As respostas de cada pergunta devem ser exibidas organizadas aleatoriamente
- Ao clicar em uma resposta, as demais devem ganhar o efeito "esbranquiçado" do layout
- Não deve ser possível alterar a resposta após a escolha
- Após escolher uma resposta, o texto das opções deve ganhar a cor vermelha ou verde, conforme layout, indicando quais eram as respostas erradas e a certa
- Após 2 segundos de respondida, deve-se scrollar a página para a próxima pergunta

#### * Tela 2 - Página de um quizz (fim do quizz)

- Após responder todas as perguntas, deve aparecer ao final da tela a caixa de resultado do quizz. Assim como na passagem das perguntas, deve-se aguardar 2 segundos após a última resposta e então scrollar a tela para exibir essa caixa de resultado
- A pontuação do quiz (porcentagem de acertos sobre total de perguntas) deve ser calculada no front, sem nenhuma comunicação com o servidor, bem como a classificação de em qual nível o usuário ficou baseado nessa pontuação
- Deverão ser exibidos o título, a imagem e a descrição do nível que o usuário ficou
- O score deve ser arredondado de forma a não ter casas decimais
- Ao clicar no botão "Reiniciar Quizz", a tela deverá ser scrollada novamente para o topo, as respostas zeradas pro estado inicial e a caixa de resultado escondida novamente
- Ao clicar no botão "Voltar pra home", essa tela deve sumir e dar lugar à **Tela 1: Lista de Quizzes**

#### * Tela 3 - Criação de Quiz 

- O processo de criar um quizz passará por 4 telas, seguindo o layout:
    * Tela 3.1: Informações básicas do quizz
    * Tela 3.2: Perguntas do quizz
    * Tela 3.3: Níveis do quizz
    * Tela 3.4: Sucesso do quizz
- A cada etapa, antes de avançar para a próxima tela, devem ser feitas validações nas informações inseridas, seguindo as regras abaixo:
    * Informações básicas do quizz
        - [ ]  Título do quizz: deve ter no mínimo 20 e no máximo 65 caracteres
        - [ ]  URL da Imagem: deve ter formato de URL
        - [ ]  Quantidade de perguntas: no mínimo 3 perguntas
        - [ ]  Quantidade de níveis: no mínimo 2 níveis
    * Perguntas do quizz
        - [ ]  Texto da pergunta: no mínimo 20 caracteres
        - [ ]  Cor de fundo: deve ser uma cor em hexadecimal (começar em "#", seguida de 6 caracteres hexadecimais, ou seja, números ou letras de A a F)
        - [ ]  Textos das respostas: não pode estar vazio
        - [ ]  URL das imagens de resposta: deve ter formato de URL
        - [ ]  É obrigatória a inserção da resposta correta e de pelo menos 1 resposta errada. Portanto, é permitido existirem perguntas com só 2 ou 3 respostas em vez de 4.
    * Níveis do quizz
        - [ ]  Título do nível: mínimo de 10 caracteres
        - [ ]  % de acerto mínima: um número entre 0 e 100
        - [ ]  URL da imagem do nível: deve ter formato de URL
        - [ ]  Descrição do nível: mínimo de 30 caracteres
        - [ ]  É obrigatório existir pelo menos 1 nível cuja % de acerto mínima seja 0%
- Caso alguma validação falhe, deve ser exibida um alerta pedindo para o usuário preencher os dados corretamente. Para simplificar, não é obrigatório informar qual foi a validação que falhou.
- Ao finalizar a criação do quizz e salvá-lo no servidor, o usuário deverá visualizar a **Tela 3.4: Sucesso do quizz**. Nesta tela ele pode clicar no quizz (ou no botão de "Acessar Quizz") para visualizar o quizz criado (Tela 2) ou voltar pra home (Tela 1)#### * Tela hábitos `(rota /habitos)`
- Quando o usuário retornar pra home (seja imediatamente ou mais tarde), esta deve atualizar os quizzes listados para incluir o quizz recém-criado

#### * Quizzes do usuário


### Status do Projeto:

100% concluído

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

<img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>

### Deploy:

https://projeto010-track-it.vercel.app/


### Autor
---

#### Feito por Luiz Aires 👋🏽 Entre em contato!

[![Twitter Badge](https://img.shields.io/badge/-@lfaires4-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/lfaires4)](https://twitter.com/lfaires4) 
[![Linkedin Badge](https://img.shields.io/badge/-Luiz_Fernando_Aires-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/lfaires4/)](https://www.linkedin.com/in/lfaires4/) 
[![Gmail Badge](https://img.shields.io/badge/-lfaires@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:lfaires@gmail.com)](mailto:lfaires@gmail.com)
