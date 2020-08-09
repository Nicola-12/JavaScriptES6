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
//
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
//
//
//    var MinhaLista = new TodoList();
//
//    document.getElementById('novotodo').onclick = function(){
//        MinhaLista.add();
//   }
//    MinhaLista.mostraUsuario();

class Funcao {
    constructor(){
    }
    static soma(a,b){return a*b}
}

console.log(Funcao.soma(1,4));