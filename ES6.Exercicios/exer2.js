const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];
   
   const arrMap = usuarios.map(function(user){
    return user.idade
   })
   //console.log(arrMap);
   const arrFil = usuarios.filter(function(user){
    return user.idade > 18 && user.empresa === 'Rocketseat'
   })
   //console.log(arrFil);
   const arrFind = usuarios.filter(function(user){
    return user.empresa === 'Google'
   })
   //console.log(arrFind);
   const arrCal = usuarios.map(users => ({...users, idade : users.idade * 2})).filter(users => users.idade <= 50)
   //console.log(arrCal);

   

   
      
   