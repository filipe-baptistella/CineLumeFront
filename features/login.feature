Feature: Login

  Scenario: Login com sucesso
    Given eu estou cadastrado com “email” “fulano@gmail.com” e “senha” “Ful@n02025”
    And eu estou com email verificado
    And eu estou na página “login”
    When eu preencho o campo “email” com “fulano@gmail.com”
    And eu preencho o campo “senha” com “Ful@n02025”
    And eu seleciono “entrar”
    Then eu sou redirecionado para página “inicial”
