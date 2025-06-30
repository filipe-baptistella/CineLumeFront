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
    And eu copiei o código “123456”
    And eu estou na página “confirmação de código”
    When eu colo o código “123456” no campo “código”
    And eu seleciono “Confirmar”
    Then eu sou redirecionado para a página “login”

  Scenario: Tentar registrar usuário menor de 18 anos de idade
    Given eu estou na página “cadastro”
    And eu não estou logado
    When eu preencho o campo “nome” com “fulano de tal”
    And eu preencho o campo “email” com “fulano@gmail.com”
    And eu preencho o campo “senha” com “Ful@n02025”
    And eu preencho o campo “confirmar Senha” com “Ful@n02025”
    And eu preencho o campo “idade” com “15”
    And eu seleciono “cadastrar”
    Then eu vejo uma mensagem de erro “erro ao se cadastrar, menor de 18 anos não é permitido!”
    And eu permaneço na página “cadastro”
