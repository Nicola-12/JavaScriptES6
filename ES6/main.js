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
// Template Literals
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