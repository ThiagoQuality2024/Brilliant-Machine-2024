 describe('Teste Interface Saucedemo', () => {
  before(() => {
    cy.intercept('POST', 'https://events.backtrace.io/**', {
      statusCode: 200, // Responde com sucesso para evitar erro 401. Precisei colocar esse trecho pois estava tomando erro 401 toda hora
    }).as('backtrace');
  });

  it('Testando Passos de 1 até 4 ', () => {
    // 1. Acessar o site
    cy.visit('https://www.saucedemo.com/', {
      timeout: 12000, 
    });

    // Aguarda o botão de login para garantir que a página está carregada
    cy.get('#login-button').should('be.visible');

    // 2. Fazer login, utilizei o xpath porque ja estou mais habituado a ele, mas também poderia usar o cy.get
    cy.xpath('//*[@id="user-name"]').type('standard_user');
    cy.xpath('//*[@id="password"]').type('secret_sauce');
    cy.xpath('//*[@id="login-button"]').click();
    
    // 2. Clicar no menu de ordenação a /z
    cy.get('.product_sort_container').select('Name (A to Z)');
    cy.wait(2000);

    // Aqui eu precisei colocar essa função para verificar se ordenou e também mostrar no console os itens ordenados conforme coloquei no arquivo Readme
    // Criei uma variavel itemNames e atribui os itens do array a variavel em seguida criei outra variavel chamada sortedItemnames para mostrar em forma de array os itens ordenados

    cy.get('.inventory_item_name').then($items => {      
      const itemNames = $items.toArray().map(item => item.innerText);
      const sortedItemNames = [...itemNames].sort((a, b) => a.localeCompare(b));

      console.log('Nomes dos itens:', itemNames);
      console.log('Nomes dos itens ordenados (A -> Z):', sortedItemNames); //Achei legal interessante criar essas variaveis para deixar o codigo mais didatico, tanto para mim como para quem for ler. Não é meu perfil fazer nada complexo.
      expect(itemNames).to.deep.equal(sortedItemNames);
      console.log('Os itens estão ordenador corretamente de A / Z'); 
      
    });

  //3 e 4 . Aqui segue o mesmo principio da ordenação A até Z, só copiar e colar e mudar e inverter a ordem a para z
    cy.get('.product_sort_container').select('Name (Z to A)');
    cy.wait(2000);
    cy.get('.inventory_item_name').then($items => {
      
      const itemNames = $items.toArray().map(item => item.innerText);
      const sortedItemNames = [...itemNames].sort((a, b) => b.localeCompare(a));

      console.log('Nomes dos itens:', itemNames);
      console.log('Nomes dos itens ordenados (Z -> A):', sortedItemNames);
      
      expect(itemNames).to.deep.equal(sortedItemNames);
      console.log('Os itens estão ordenados corretamente de Z / A');

    });
    
   });
}); 

