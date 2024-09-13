describe('Teste API', () => {
  it('Passo a passo do 1 até o 6', () => {
   
    //chamar a api e verificar a resposta da APi se foi 200
    cy.request('https://fakestoreapi.com/products').then((response) =>{
      expect(response.status).to.eq(200);

    //2 e 3 encontrar todos os objetos com nomes electronics e joguei tudo dentro da variavel produtos com o response body
     const produtos = response.body;
     const eletronicos = produtos.filter(produto => produto.category === 'electronics');

     //4. Fazer a contagem total dos elementos e aproveitei e joguei esse valor no console log para ficar visivel e claro
     const contagemElementos = eletronicos.length;
     console.log('A quantidade de elementos com nome eletronics foi de:' + contagemElementos +'' +' elementos');

    //5. verificar os objetos com rating maior do que 4 
     const elementosMaiorQue4 = eletronicos.filter (produto => produto.rating.rate >4 );
     const nomesDosProdutosMaioresQue4 = elementosMaiorQue4.map(produto => produto.title);
     const contagemElementosmaiorQue4 = elementosMaiorQue4.length;

     //6. Aqui tentei fazer o mais claro possivel concatenando as strings para aparecer em tela os produtos que tem o rating maior que 4
     console.log('Os elementos encontrados com um rating maior que 4 são: ' +nomesDosProdutosMaioresQue4.join('  /   ') + '.' + ' Que dão um total de: ' + contagemElementosmaiorQue4 + ' elementos');
     
     //Olhar la no console no dev tools que vai aparecer os nomes dos itens que tem rating maior que 4


    })
          
  })
})