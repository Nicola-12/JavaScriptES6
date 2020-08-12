//class data {
//    constructor() {
//        this.data = [];
//    }
//
// 
//    add(data) {
//        this.data.push(data);
//        console.log(this.data);
//    }
//}


//class TodoList extends data {
//    constructor(){
//    super();
//
//    this.usuario = 'OPORA';
//    }
//
//    mostraUsuario(){
//        console.log(this.usuario);
//    }
//}


//    var MinhaLista = new TodoList();
//
//    document.getElementById('novotodo').onclick = function(){
//        MinhaLista.add();
//   }
//    MinhaLista.mostraUsuario();

// class Funcao {
//     constructor(){
//     }
//     static soma(a,b){return a*b}
// }
// console.log(Funcao.soma(1,4));

// const nomes = {nome: 'Diego'}
//     nomes.nome= "Nicolas";
// console.log(nomes.nome);

// function teste(x){
//     let y = 10;
//     if(x>5){
//         y= 3;
//         console.log(x, y)
//     }
// }
//     teste(8);

// const arr = [1, 3, 5, 6, 7, 5, 31, 123, 41];
//     //index posição do array
//     const newArr = arr.map(function(item, index){
//         return item + index;
//     });
//     console.log(newArr);
//     // somar todos itens do vetor
//    const sum = arr.reduce(function(total, next){
//     return total + next;
//    });  
//      console.log(sum);
//     // filtra - retorna true e false
//      const filter = arr.filter(function(item){
//         return item % 2 === 0;
//      });
//      console.log(filter);
//      //retorna true ou false se contem o item no vetor
//      const find = arr.find(function(item){
//         return item === 3;
//      })
//      console.log(find);

// const arr = [1, 3, 5, 6, 7,8 ,9, 0];
// const newArr = arr.map(item => item * 2)
// console.log(newArr);
// const teste = () => ({nome: 'Nicolas', idade: 19})
// console.log(teste());

// const soma = (a = 3, b = 5) => a + b;
// console.log(soma());
// console.log(soma(2,5));

// Desestruturação
// const usuario = {
//     nome: 'Nicolas',
//     idade: 19,
//     endereco : {
//      cidade: 'Roca Sales',
//      estado: 'RS',}};
//     const {nome, idade, endereco:{cidade, estado}} = usuario;
//     console.log(nome, idade, cidade, estado);  
//     const mostraNome = ({nome}) => console.log(nome);
//     mostraNome(usuario);

// //REST
// const obj = {
//     nome: 'Nicolas',
//     idade: 19,
//     cidade: 'Roca Sales'
// };
// const arr = [1, 3, 5, 7, 8];
// const { nome, ...resto } = obj
// console.log(nome + "\n", resto);
// const [a, b, ...c] = arr
// console.log(a + "\n", b + "\n", c);
// const soma = (...nums) => {  
//     console.log(nums);
//     return nums.reduce((acc, num) => acc + num)
// }
// console.log(soma(1, 3, 5, 6, 7, 7, 8, 9));
// //SPREAD
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);
//  const obj1 = {
//      nome: 'Nicolas',
//      idade: 19,
//      cidade: 'Roca Sales'
// };
// const obj2 = {...resto, nome: 'Gabriel', estado: 'RS'};
// console.log(obj2);

// const usario = {
//     nome: 'wesley',
//     sobrenome: 'isotton',
//     get nomeCompleto() {return `${this.nome} ${this.sobrenome}`},
//     oi() { console.log(`ola ${this.nomeCompleto}`) }
//   }
//   console.log(usario.nomeCompleto)
//   const usario2 = {
//     nome: 'wesley',
//     sobrenome: 'isotton',
//     get nomeCompleto() {return `${this.nome} ${this.sobrenome}`},
//     oi() { console.log(`ola ${this.nomeCompleto}`) },
//     set coisa(i) {console.log(i)}
//   }
//// Template Literals
// const nome = 'Nicolas', idade = 19
// console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);
//// Object Short Sintax
// const nome = 'Nicolas', idade = 19
// const arr = {
//     nome,
//     idade,
//     cidade: 'Roca Sales'
// }
// console.log(arr);

// WEBPACK, IMPORT && EXPORT

// import * as funcoes from '../funcoes';
// import {mul as mulFunction} from '../funcoes'
// console.log(funcoes.default(1,4));
// console.log(funcoes.sub(19,5));
// console.log(mulFunction(19,5))

// import classeUsuario, {idade as idadeUsuario} from './functions'
// classeUsuario.info();
// console.log(idadeUsuario);

// const minhaPromise = () => new Promise((resolve, reject) =>{
//     setTimeout(() => {resolve('OK')}, 2000)
// })
//  const executaPromisse = async ()=>{
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
// }
// executaPromisse();

// import axios from 'axios';
// class Api {
//     static async getUserInfo(username){
//         try{
//         const response = await axios.get(`https://api.github.com/users/${username}`);
//         console.log(response,'\n', 'DEU CERTO');
//         } catch (err){
//             console.warn('DEU ERRO PORRA');
//         }
//     }
// }
// Api.getUserInfo('nicola-12');

import api from './api';
import Axios from 'axios';

class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=repository]');
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    loadin(loading = true){
        if (loading === true){
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('CARREGANDO...'));
            loadingEl.setAttribute('id', 'loading');
            this.formEl.appendChild(loadingEl);
        }else{
            document.getElementById('loading').remove
        }
    }

    async addRepository(event) {

        event.preventDefault();

        const repoInput = this.inputEl.value;

        if (repoInput.length === 0)
            return;

            this.loading();
            try{

               
        const response = await api.get(`/repos/${repoInput}`);

        const { name, description, html_url, owner: { avatar_url } } = response.data;

        this.repositories.push({
            name,
            description,
            avatar_url,
            html_url
        });

        this.inputEl.value = '';
       
        this.render();
        
    }catch(err){
        alert('Repositório não existe')
       
    }
    this.loading(false);
    };

    render() {

        this.listEl.innerHTML = '';

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        })
    }
}

new App();