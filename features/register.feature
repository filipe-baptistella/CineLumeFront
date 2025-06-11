Feature: Register

  Scenario: Cadastrar novo usuário com sucesso
    Given eu  estou na página  “cadastro”
    And não existe nenhum usuário cadastrado com o email “fulano@gmail.com”
    When eu preencho o campo “nome” com “fulano de tal”
    And eu preencho o campo “email” com “fulano@gmail.com”
    And eu preencho o campo “senha” com “Ful@n02025”
    And eu preencho o campo “confirmar Senha” com “Ful@n02025”
    And eu preencho o campo “idade” com “21”
    And eu seleciono "Registrar"
    Then eu recebo o código de seis dígitos “123456” no meu email “fulano@gmail.com”
    And eu sou redirecionado para página de “confirmação de código”.

  Scenario: Cadastrar novo usuário com sucesso
    Given eu recebi o código “123456” no meu email “fulano@gmail.com”
    And eu copiei o código “123456” antes de se inspirar no tempo de “1” minuto
    And eu estou na página “confirmação de código”
    When eu colo o código “123456” no campo “código” antes de completar “1” minuto
    And eu seleciono “Confirmar”
    Then eu sou redirecionado para a página “login”
    And eu recebo uma mensagem “conta/assinatura realizada com sucesso” no meu email “fulano@gmail.com”