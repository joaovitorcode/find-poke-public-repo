## Projeto Uerita
Este projeto permite ao usuário pesquisar por pokemons, exibir os dados do pokemon em sua própria rota, fazer login com o Google e adicionar os pokemons em uma lista de favoritos.

## Tecnologias utilizadas
- HTML5
- CSS3
- Javascript (ES6+)
- Git
- Prettier
- ESLint
- ReactJS
- Tailwind
- Typescript
- NextJS
- Axios

## Serviços utilizados
- Firebase (authentication e firestore)
- Vercel
- GitHub

## Setup
- Para instalar o projeto:
```
git clone git@github.com:joaovitorcode/find-poke-public-repo.git
npm i
// ou
yarn
```
- Crie um projeto no firebase
- Dentro desse projeto crie um app para a web
- Obtenha a Configuração do SDK do app para a web
- Cole essa configuração dentro do arquivo *firebaseClient.jsx* localizado na raíz do projeto
- Habilite o serviço *authentication* utilizando o provedor do *Google*
- Habilite o serviço *firestore* em modo de teste
- OBS: a coleção que utilizaremos no serviço *firestore* será criada implicitamente pelo firebase
- Execute no terminal o comando *npm run dev* ou *yarn dev*

##  Como funciona
- Será possível procurar um pokemon digitando o seu nome na barra de pesquisa
- Os resultados serão exibidos conforme o usuário for digitando
- Cada pokemon terá sua própria página com algumas informações
- Será possível se autenticar com o provedor do Google
- Estando autenticado será possível favoritar um pokemon e acessar a lista de favoritos

## Links
- [Projeto em funcionamento](https://find-poke.vercel.app/)

## Versão
0.1.0

## Autor
- **J Vitor F**: [@joaovitorcode](https://github.com/joaovitorcode)