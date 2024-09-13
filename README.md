# -----Instruções para executar o teste------- 
s
1- Baixar a pasta do repositorio remoto "Projeto Brilliant Machine" para seu computador local.
2- Abrir uma IDE se sua preferencia, (eu utilizei VS CODE, pois estou mais ambientado).
3- Dentro no Visual Code, clicar em File-> Open Folder e abrir a pasta do projeto para visualizar o codigo que está dentro da sub pasta e2e.
4- Ir no local do se computador onde você salvou colocou a pasta "Projeto Brilliant Machine", clicar na pasta e dentro da pasta abrir o GIT BASH. 
5- Dentro do Git Bash digitar Git init para iniciar o repositorio e Git NPM para iniciar um projeto NPM.
6- No Git Bash digitar NPX Cypress Open e tecla enter para abrir o browser Cypress
7- Irá abrir o browser e vc escolhe o navegador da sua preferência. Eu escolhi o Edge para executar os testes web. Obs: Tive muitos problemas com Cash.
8- Dentro do browser do Cypress ,você escolhe o arquivo que quer fazer a execução. 
No caso, o desafio me deu 2 exercicios 1- Teste API e 2 - Teste de interface. Escolher um dos dois e clicar para visualizar o teste automatizado rodando.

9- Obs , a cada teste que for rodar limpe o cache todo, excluindo cookies e historico, feche o browser e abra novamente,caso queira ver denovo, por algum motivo eu tive mais problemas de cash que o normal, a cada teste que eu rodava eu tinha que limpar o historico e cash ,para funcionar.

10- No tete de APi se tudo der certo, você ver a asserção mostrando corretamente a chamada 200 conforme pediu no exercicio. 
e no teste de usuario para ficar organizado e visivel , eu inseri informações no console log, só abrir no dev tools -> console e verificar os itens ordenados que foi pedido no exercicio,e as mensagens que coloquei de sucesso na ordenação para validar que foi feito, conforme pedido.

## -----------Relatorios-----------

1- Criei uma pasta chamada Relatorios-Testes-HTML, dentro do projeto cypress.Nessa pasta estara armazenada os relatorios html dos testes
2- Para visualizar o relatorio, você pode ir na pasta principal do projeto no seu computador , cypress/Relatorios-Testes-HTML. 
3-Dentro da pasta Cypress também tem uma pasta chamda videos, com a reprodução do video do teste, graças ao Mochawesome que eu criei 

### ----------Instruções Teste Pipeline CI/CD------------

1- Dentro do Git Lab, clique no menu Build -> Jobs
2- Dentro de Jobs você vai ver alguns Pipeline com falha, pois durante meus Builds eu enfrentei um problema no arquivo YML, depois de algumas tentativas eu descobri que o que estava impactando o meu job rodar era a versão que eu informei no arquivo Alterei para a versão 16 e funcionou.
3- na coluna Status, clicar no JOB passed para ver todo o historico do JOB da ultima atualizão que eu subi do local para o remoto.
4- Na coluna a direita , em Job artfacts , clicar em Download.
5- Após fazer o download do arquivo em sua maquina local, você extraia o zip para poder verificar o relatorio dos testes.
6- Os relatorios do teste compreende em 2 videos. 1 video-> teste de API 2 2 video-> teste de interface.
7- Dentro do proprio historico do job você poderá ver que os testes passaram com sucesso. Ambos aparecem como "Passing".