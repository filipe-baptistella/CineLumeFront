Feature: Login

  Scenario: Login com sucesso
    Given eu estou cadastrado com email “fulano@gmail.com” e senha “Ful@n02025”
    And eu estou com email verificado
    And eu estou na página “login”
    When eu preencho o campo email com “fulano@gmail.com”
    And eu preencho o campo senha com “Ful@n02025”
    And eu seleciono “entrar”
    Then eu sou redirecionado para página “inicial”

  Scenario: Login com senha ou email incorreto
    Given eu estou cadastrado com email “fulano@gmail.com” e senha “Ful@n02025”
    And eu estou com email verificado
    And eu estou na página “login”
    When eu preencho o campo email com “fulano@gmal.com”
    And eu preencho o campo senha com “Ful@n02025”
    And eu seleciono “entrar”
    Then eu vejo uma mensagem de erro “senha ou email incorreto” acima do campo email
    And eu continuo na página “login”

  Scenario: Login e ainda não está com email verificado
    Given eu estou cadastrado com “email” “fulano@gmail.com” e “senha” “Ful@n02025”
    And eu não realizei a verificação
    And eu estou na página “login”
    When eu preencho o campo “email” com “fulano@gmail.com”
    And eu preencho o campo “senha” com “Ful@n02025”
    And eu seleciono “entrar”
    Then eu recebo o “código” de seis dígitos “234567” no meu email
    And eu sou redirecionado para página de “confirmação de código”.