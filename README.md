# Criando uma Rede Social

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Objetivos de aprendizagem](#3-objetivos-de-aprendizagem)
* [4. Considerações gerais](#4-considerações-gerais)
* [5. Produto](#5-produto)
* [6. Entrega](#6-entrega)


***

## 1. Prefácio

Instagram, Snapchat, Twitter, Facebook, Twitch, Linkedin, etc. As redes sociais
invadiram nossas vidas. Nós as amamos ou odiamos, e muitas pessoas não conseguem
viver sem elas.

![adem-ay-Tk9m_HP4rgQ-unsplash](https://user-images.githubusercontent.com/110297/135544666-4efa54f1-4ff6-4c4c-b398-6df04ef56117.jpg)

Há redes sociais de todo tipo para todos os tipos de interesse. Por exemplo: em
uma rodada de financiamento com investidores, foi apresentada uma rede social
para químicos onde os usuários podem publicar artigos a respeito de suas
pesquisas, comentar os artigos de seus colegas e filtrar artigos de acordo com
determinadas tags ou popularidade, mais recente ou mais comentado.

## 2. Resumo do projeto

Neste projeto construí uma Rede Social com o objetivo de conectar mulheres 
desenvolvedoras em um ambiente seguro de fortalecimento, amizade e informações.

O nome da rede social é ConectAdas, fazendo referência a Ada Lovelace e 
a inspiração que ela desperta em nós.

Na ConectADAS é possível:
- criar uma conta de acesso e logar com essa conta
- criar, editar, deletar e dar like/dislike em publicações
- ver 3 versões da linha do tempo:
  - publicações de todas as pessoas;
  - publicações próprias;
  - publicações curtidas.

O objetivo principal de aprendizagem deste projeto era construir uma [Single-page
Application
(SPA)](https://pt.wikipedia.org/wiki/Aplicativo_de_p%C3%A1gina_%C3%BAnica)
[_responsiva_](https://curriculum.laboratoria.la/pt/topics/css/02-responsive) (com mais de uma tela/ página) na
qual fosse possível **ler e escrever dados**.

## 3. Objetivos de aprendizagem

O projeto foi realizado usando HTML semântico, CSS e Javascript. O site foi feito usando flexbox.
Alguns dos objetivos de apredizagem atingidos no processo:

### Web APIs

- **Uso de seletores de DOM**

- **Manipulação de eventos de DOM (listeners, propagação, delegação)**

- **Manipulação dinâmica de DOM**

- **Routing (History API, evento hashchange, window.location)**

### JavaScript

- **Arrays (arranjos)**
- **Objetos (key, value)**
- **Diferenciar entre tipos de dados primitivos e não primitivos**
- **Variáveis (declaração, atribuição, escopo)**
- **Uso de condicionais (if-else, switch, operador ternário, lógica booleana)**
- **Uso de laços (while, for, for..of)**
- **Funções (params, args, return)**
- **Testes unitários (unit tests)**
- **Testes assíncronos**
- [ ] **Uso de mocks e espiões**
  <details><summary>Links</summary><p>

  * [Simulações Manuais - Documentação oficial](https://jestjs.io/docs/pt-BR/manual-mocks)
</p></details>

- **Módulos de ECMAScript (ES modules)**
- [ ] **Uso de linter (ESLINT)**
- **Uso de identificadores descritivos (Nomenclatura e Semântica)**
- **Diferença entre expressões (expressions) e declarações (statements)**
- **Callbacks**
- **Promessas**

### Controle de Versões (Git e GitHub)

- **Git: Instalação e configuração**
- **Git: Controle de versão com git (init, clone, add, commit, status, push, pull, remote)**
- **Git: Integração de mudanças entre ramos (branch, checkout, fetch, merge, reset, rebase, tag)**
- [ ] **GitHub: Criação de contas e repositórios, configuração de chave SSH**
- [ ] **GitHub: Implantação com GitHub Pages**
- **GitHub: Colaboração pelo Github (branches | forks | pull requests | code review | tags)**
- [ ] **GitHub: Organização pelo Github (projects | issues | labels | milestones | releases)**
- [ ] 
### Centrado no usuário

- **Desenhar e desenvolver um produto ou serviço colocando as usuárias no centro**

### Design de produto

- **Criar protótipos para obter feedback e iterar**

- **Aplicar os princípios de desenho visual (contraste, alinhamento, hierarquia)**

### Pesquisa

- **Planejar e executar testes de usabilidade**

### Firebase

-  **Firebase Auth**
-  **Firestore**


## 4. Considerações gerais

* Este projeto foi desenvolvido individualmente.

* Este projeto foi concluído em 5 semanas.

* A lógica do projeto está implementada completamente em JavaScript
  (ES6+), HTML e CSS. Não foi permitido o uso de
  _frameworks_ ou bibliotecas de CSS e JS.

* Separei um dia da semana (sexta-feira) exclusivamente para ajudar colegas em dificuldade - 
e aprendi muito ao dar explicações. Ajudei colegas em outros dias também.


## 5. Produto

### 5.1 Definição do produto

O produto foi desenvolvido para estudantes e profissionais de TI que se identificam
com o gênero feminino ou não binário.

A solução proposta pela ConectAdas é a criação de um ambiente para oferecer e pedir por orientação,
dar e receber dicas de programação e outros assuntos, 
promover a criação de vínculos e a comunicação em geral.
O objetivo da ConectAdas não é substituir a participação em espaços mistos, como fórums e outras
redes sociais, mas sim criar um espaço para exercitar o fortalecimento na expressão de ideias, a confiança
e a assertividade.


### 5.2 Histórias de usuário
**História 1:** A usuária quer conhecer e acessar a rede social via telefone celular 
 e para isso precisa se registrar no site. 
 Duas opções devem ser oferecidas: email e senha de qualquer provedor ou usando os dados do Google.
 Definição de pronto: Conseguir criar um usuário, logar com e-mail e senha ou com as credenciais
 do Google, ser direcionada a outra página (timeline) e deslogar. 
 Mensagens de erro devem aparecer quando os seguintes  critérios não forem preenchidos:
  - No Registro: 
    - email inválido;
    - senha com menos de 6 caracteres;
    - um ou ambos os campos vazios.
  - No Login:
    - email incorreto;
    - senha incorreta;
    - um ou ambos os campos vazios.
  
  Os testes unitários e assíncronos para as funções de registro, login com email e senha, login com google e deslogar do firebase devem estar criados.
  Testes de usabilidade devem ser executados e bugs corrigidos.
  O protótipo de alta fidelidade para as página de login e registro versão mobile devem estar prontos.

**História 2:** A usuária quer buscar e oferecer dicas para as colegas desenvolvedoras através de uma postagem
 com título.  Para isso ela precisa de campos para inserção de dados e um botão 
 para enviar essa postagem para o banco de dados Firestore. Precisa também que a timeline exiba todos os 
 posts de todas as usuárias.
 Definição de pronto: Criar uma postagem e gravá-la em uma nova coleção (posts) no Firestore. 
 Adicionar a criação do usuário no Firebase à coleção users no Firestore. 
 Gravar o id do usuário no documento da coleção posts. 
 Visualizar na timeline todos os posts criados.
  Mensagens de erro devem aparecer quando os seguintes critérios não forem preenchidos:
  - Na criação do post: 
    - um ou ambos os campos vazios.
  
  Os testes unitários e assíncronos para as funções de criar post deve estar criado.
  Testes de usabilidade devem ser executados e bugs corrigidos.
  O protótipo de alta fidelidade para a timeline principal deve estar pronto.
  
**História 3:** A usuária quer editar ou apagar as postagens que criou.
 Definição de pronto: Conseguir editar ou apagar uma postagem criada anteriormente. 
 Fazer o update ou delete no banco de  dados do Firebase. 
 Mensagens de erro devem aparecer quando os seguintes critérios não forem preenchidos:
  - Na edição do post: 
    - um ou ambos os campos vazios.
  
  Os testes unitários e assíncronos para as funções de editar e apagar posts devem estar criados.
  Testes de usabilidade devem ser executados e bugs corrigidos.
  O protótipo de alta fidelidade para o modal de edição e confirmação de exclusão devem estar prontos.

**História 4:** A usuária quer ver apenas as postagens que criou.
 Definição de pronto: Exibir timeline apenas com os posts da usuária.
  
**História 5:** A usuária quer curtir as postagens que tem interesse.
 Definição de pronto: Conseguir curtir e descutir uma postagem. O documento da coleção users 
 recebe o id dos posts que curte. O documento da coleção posts recebe o id do usuário que curtiu e
 adiciona à array de curtidas.
  
  Os testes unitários e assíncronos para as funções de like e deslike devem estar criados.
  Testes de usabilidade devem ser executados e bugs corrigidos.

**História 6:** A usuária quer ver as postagens que curtiu.
 Definição de pronto: Exibir uma timeline com os itens curtidos pela usuária, em ordem de curtida.
 Testes de usabilidade devem ser executados e bugs corrigidos.
 
 **História 7:** A usuária quer utilizar o site na versão desktop.
 Definição de pronto: Exibir o site configurado para a versão desktop.
 Testes de usabilidade devem ser executados e bugs corrigidos.
 
   
  - xxxxxReceber _code review_ de pelo menos uma parceira de outra equipe.
  
  - xxxxxFazer deploy do aplicativo e marcar a versão (git tag).

### 5.4 Desenho da Interface de Usuário (protótipo de baixa fidelidade)

Você deve definir qual será o fluxo que o usuário seguirá dentro do seu
aplicativo e, com isso, criar a interface do usuário (UI) que siga este fluxo.

### 5.5 Responsivo

O site funciona em dispositivos de tela grande (computadores, laptops etc.) e
pequena (_tablets_, telefones celulares etc.). Foi utilizada a sugerida técnica
Mobile First.

### 5.6 Considerações sobre o comportamento da Interface do Usuário (UI)

Essas considerações ajudarão você a escrever as definições de pronto de sua
H.U.:

#### Criação e login de conta de usuário

* _Login_ com Firebase:
  - Para o _login_ e postagens na timeline, você pode usar o
    [Firebase](https://firebase.google.com/products/database/)
  - O usuário deve poder criar uma conta de acesso ou autenticar-se com conta de
    e-mail e senha e também com uma conta do Google.
* Validações:
  - Somente usuários com contas válidas têm acesso permitido.
  - Não haver usuários repetidos.
  - O que o usuário digita no campo de senha (_input_) deve ser secreto.
* Comportamento:
  - Quando o formulário de registro ou login é enviado, ele deve ser validado.
  - Se houver erros, mensagens descritivas devem ser exibidas para ajudar o
    usuário.

#### Timeline/linha do tempo

* Validações:
  - Ao publicar, deve ser validado se há conteúdo no _input_.
* Comportamento:
  - Ao recarregar o aplicativo, é necessário verificar se o usuário está
    _logado_ antes de exibir o conteúdo,
  - Conseguir publicar um _post_.
  - Poder dar e remover _likes_ em uma publicação. Máximo de um por usuário.
  - Visualizar contagem de _likes_.
  - Poder excluir uma postagem específica.
  - Solicitar confirmação antes de excluir um _post_.
  - Ao clicar em editar um _post_, você deve alterar o texto para um _input_ que
    permite editar o texto e salvar as alterações.
  - Ao salvar as alterações, você deve voltar ao texto normal, mas com a
    informação editada.
  - Ao recarregar a página, poder ver os textos editados.

### 5.7 Considerações técnicas sobre front-end

* Manipulação do DOM separada da lógica (separação de responsabilidades).
* [Single Page
  Application
  (SPA)](https://pt.wikipedia.org/wiki/Aplicativo_de_p%C3%A1gina_%C3%BAnica)
* Alteração e persistência de dados usando [Firebase](https://firebase.google.com/).
* Neste projeto foi utilizada a ferramenta [Vite](https://vitejs.dev/) 

#### Testes unitários

* Lembre-se de que não há _setup_ de **testes** definido, isso dependerá da
  estrutura do seu projeto. Você não deve esquecer de pensar sobre os testes.
  Eles podem ajudar a definir a estrutura e sua lógica.

* Os testes de unidade devem cobrir no mínimo 70% de _statements_, _functions_,
  _lines_ e _branches_.

### 5.8 Considerações técnicas UX

* Faça pelo menos 2 entrevistas com os usuários.
* Faça um protótipo de baixa e alta fidelidade.
* Verifique se a implementação do código segue as diretrizes do protótipo.
* Faça sessões de teste de usabilidade com o produto em HTML.


## 6. Entrega

O projeto será entregue subindo seu código no GitHub (`commit` /`push`) e a
interface será exibida usando páginas do GitHub ou outro serviço de hospedagem
(Firebase, Netlify, Vercel, etc) que você pode ter encontrado pelo caminho.
Verifica a [Documentação Vite](https://vitejs.dev/guide/static-deploy.html)
para orientá-lo sobre isso.

