# Criando uma Rede Social

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Objetivos de aprendizagem](#3-objetivos-de-aprendizagem)
* [4. Considerações gerais](#4-considerações-gerais)
* [5. Critérios de aceitação mínimos do
  projeto](#5-criterios-de-aceitação-mínimos-do-projeto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Entrega](#7-entrega)
* [8. Guias, dicas e leituras
  complementares](#8-guias-dicas-e-leituras-complementares)

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

### 5.1a Boilerplate

Neste projeto foi utilizada a ferramenta [Vite](https://vitejs.dev/) 

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

 - História 1: A usuária quer conhecer e acessar a rede social via telefone celular 
 e para isso precisa se registrar no site. Duas opções devem ser oferecidas: email e senha de 
 qualquer provedor ou usando os dados do Google.
 Definição de pronto: Conseguir criar um usuário, logar com e-mail e senha ou com as credenciais
 do Google, ser direcionada a outra página (timeline) e deslogar. Mensagens de erro devem aparecer quando os seguintes
 critérios não forem preenchidos:
  - No Registro: 
    - email inválido;
    - senha com menos de 6 caracteres;
    - um ou ambos os campos vazios.
  - No Login:
    - email incorreto;
    - senha incorreta;
    - um ou ambos os campos vazios.
    
  Os testes unitários e assíncronos para as funções de registro, login com email e senha, login com google e deslogar do firebase devem estar criados.
  O protótipo de baixa e alta fidelidade para as página de login e registro versão mobile devem estar prontos.


Depois de entender as necessidades de seus usuários, escreva as Histórias de
Usuário. Elas representam tudo o que ele precisa fazer/ver na Rede Social.
Cada uma de suas histórias de usuário deve possuir:

* **Critérios de aceitação:** tudo o que deve acontecer para satisfazer as
  necessidades do usuário.

* **Definição de pronto:** todos os aspectos técnicos que devem ser atendidos
  para que, como equipe, saibam que essa história está finalizada e pronta para
  ser publicada. **Todas** suas histórias de usuário (com exceções), devem
  incluir esses aspectos em sua definição de pronto (além de tudo o que precisa
  adicionar):

  - Ser uma SPA.
  - Ser _responsivo_.
  - Receber _code review_ de pelo menos uma parceira de outra equipe.
  - Fazer _tests_ unitários.
  - Fazer testes manuais buscando erros e imperfeições simples.
  - Fazer testes de usabilidade e incorporar o _feedback_ dos usuários como
    melhorias.
  - Fazer deploy do aplicativo e marcar a versão (git tag).

### 5.4 Desenho da Interface de Usuário (protótipo de baixa fidelidade)

Você deve definir qual será o fluxo que o usuário seguirá dentro do seu
aplicativo e, com isso, criar a interface do usuário (UI) que siga este fluxo.

### 5.5 Responsivo

Deve funcionar bem em dispositivos de tela grande (computadores, laptops etc.) e
pequena (_tablets_, telefones celulares etc.). Sugerimos seguir a técnica
[_`mobile first`_](#mobile-first) (mais detalhes sobre essa técnica ao final).

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

* Separar a manipulação do DOM da lógica (separação de responsabilidades).
* Ter várias telas. Para isso, seu aplicativo deve ser um [Single Page
  Application
  (SPA)](https://pt.wikipedia.org/wiki/Aplicativo_de_p%C3%A1gina_%C3%BAnica)
* Alterar e persistir dados. Os dados que você adiciona ou modifica devem
  persistir por todo o aplicativo. Recomendamos que você use o
  [Firebase](https://firebase.google.com/) para isso também.

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

## 6. Hacker Edition

As seções chamadas _Hacker Edition_ são **opcionais**. Se **você terminou** e
cumpriu todos os requisitos acima e sobrou tempo, tente concluí-las. Dessa
forma, você pode aprofundar e/ou exercitar mais os objetivos de aprendizagem do
projeto.

* Criar posts com imagens.
* Procurar usuários, adicionar e excluir "amigos".
* Definir a privacidade de _posts_ (público ou apenas para amigos).
* Permitir ver na linha do tempo de usuários "não amigos" apenas os posts
  públicos.
* Permitir comentar ou responder a uma postagem.
* Editar perfil.

## 7. Entrega

O projeto será entregue subindo seu código no GitHub (`commit` /`push`) e a
interface será exibida usando páginas do GitHub ou outro serviço de hospedagem
(Firebase, Netlify, Vercel, etc) que você pode ter encontrado pelo caminho.
Verifica a [Documentação Vite](https://vitejs.dev/guide/static-deploy.html)
para orientá-lo sobre isso.

***

## 8. Guias, dicas e leituras complementares

### Mobile first

O conceito de [_mobile
first_](https://tableless.com.br/mobile-first-a-arte-de-pensar-com-foco/) faz
referência a um processo de desenho e desenvolvimento que parte de como se vê e
como funciona uma aplicação primeiro em um dispositivo móvel e mais adiante se
analisa como adaptar a aplicação à telas progressivamente maiores. Esta é uma
contraposição ao modelo tradicional, no qual primeiro se desenha os websites (ou
webapps) para desktops e depois os adaptam para telas menores.

A motivação aqui é se assegurar que desde o começo sejam desenhadas telas
_responsivas_. Dessa forma, começamos com a aparência e o comportamento do
aplicativo em uma tela e ambiente móvel.

### Múltiplas telas

Em projetos anteriores, nossas aplicações eram compostas de apenas uma tela
_principal_ (uma só _página_). Neste projeto, precisaremos dividir nossa
interface em várias _views_ ou _pages_ e oferecer uma maneira de navegar entre
essas telas. Esse problema pode ser resolvido de várias maneiras: com arquivos
HTML independentes (cada um com seu próprio URL) e links tradicionais; mantendo
na memória e renderizando condicionalmente (sem atualizar a página);
[manipulando o histórico do
navegador](https://developer.mozilla.org/pt-BR/docs/Web/API/History_API)
com
[`window.history`](https://developer.mozilla.org/es/docs/Web/API/Window/history).
Neste projeto, convidamos você a explorar opções e decidir sobre uma opção de
implementação.

### Gravação de dados

Nos projetos anteriores, consumimos dados, mas ainda não tínhamos escrito dados
(salvar alterações, criar dados, excluir, etc). Neste projeto, você precisará
criar (salvar) novos dados, além de ler, atualizar e modificar os dados
existentes. Esses dados podem ser salvos remotamente usando o
[Firebase](https://firebase.google.com/).

Para usar o Firebase, você deve criar um projeto no [console](https://console.firebase.google.com/) do Firebase e
instale a dependência `firebase` usando `npm`.
Leia [instruções passo a passo aqui](https://firebase.google.com/docs/web/setup).

Outras:

* [Evento hashchange ](https://developer.mozilla.org/es/docs/Web/API/Window/hashchange_event)
* [Mobile
  First](https://tableless.com.br/mobile-first-a-arte-de-pensar-com-foco/)
* [Mobile First Is NOT Mobile Only - Nielsen Norman
  Group](https://www.nngroup.com/articles/mobile-first-not-mobile-only/)
* [Flexbox - CSS
  Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [Módulos:
  Export](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export)
* [Módulos:
  Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)
