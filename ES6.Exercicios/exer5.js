//5.1 REST
const arr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr
//console.log(x); // 1
//console.log(y); // [2, 3, 4, 5, 6]

const soma = (...resto) =>{
    return resto.reduce((acc, num) => acc + num)
}
//console.log(soma(1, 2, 3, 4, 5, 6)); // 21
//console.log(soma(1, 2)); // 3

//5.2 SPREAD
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
   };
   const usuario2 = {...usuario, nome: 'Gabriel'}
   const usuario3 = {...usuario, endereco: {cidade: 'Lontras'}}
   //console.log(usuario2);
   //console.log(usuario3);

   // Template Literals
   const usua = 'Diego';
   const ida = 23;
   //console.log(`O usuário ${usua} possui ${ida} anos`);

   //Object Short Syntax
   const nome = 'Diego' , idade = 23 , usuario5 = {
    nome,
    idade,
    cidade: 'Rio do Sul',
   };;
    //console.log(nome,idade,usuario5);
