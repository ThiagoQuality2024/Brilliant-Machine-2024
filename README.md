# -----Instruções para executar o teste------- 

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

### ----------- Arquivo yml------------

1- Criei o caminho dentro da minha pasta local .github/workflows/. 
2- Dentro da subpasta Wokflows eu inseri o arquivo YML, responsavel por fazer rodar os testes CI /CD. 
3- No arquivo yml contem todo o codigo necessario para rodar o teste e gerar a evidencia (Evidencia que será 2 videos da execução dos meus testes)
4- Sempre que eu fizer um push no meu repositorio local que seria subir uma atualizaçao do arquivo, o pipeline do CI/CD será acionado automaticamente.

#### ----------Instruções Teste Pipeline CI/CD + GIT------------

1- Configurar o git (usei o Git Bash). OBS: Determinar a branch e sincronizar com o repositorio remoto
2- Dentro do Git, executar os comandos Git add .  -> Git commit -m ' nome do comit' -> git push 
3- Esse procedimento na etapa 2, sobe uma mudança nos arquivos feita no repositorio local para o remoto. 
4- Retornar para o GIT HUB, você vai clicar no menu Actions
5- Dentro do menu Actions após um git push ser feito com sucesso o job vai rodar automaticamente testando seu codigo no repositorio remoto.
6- Como o codigo está correto o Workflow mostrou o pipeline com sucesso.
7- Clicar no Pipeline e verificar o log
8- Dentro do logo vc pode clicar no test para verificar todo historico do teste feito no conteiner.
9- Na seção artfacts você vai encontrar o relatorio do teste. Clicar em dowload para baixar para sua maquina e extrair o arquivo.
10- O relatorio consiste em 2 videos. 1- video o teste der APi solicitado no arquivo do desafio. 2 video é o teste de interface do usuario que tambem foi solicitado no desafio proposto para testar meus conhecimentos.

#####  Brilliant-Machine-2024
Testes Thiago Fernandes
