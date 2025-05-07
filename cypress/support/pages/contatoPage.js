/// <reference types="cypress" />

class ContatoPage {
  visitarPagina() {
    cy.visit('/');
    cy.get('h1').should('contain', 'Contato').and('be.visible');
  }

  preencherCampos(name, email, subject, message) {
    cy.get('#contact-form__name').clear().type(name);
    if (email !== '') {
      cy.get('#contact-form__email').clear().type(email);
    }
    cy.get('#contact-form__subject').clear().type(subject);
    cy.get('#contact-form__message').clear().type(message);
  }

  clickEnviar() {
    cy.contains('button', 'Enviar').click();
  }

  
  mensagemDeSucesso() {
    cy.get('.colored-chaletgreen > b')
      .should('be.visible')
      .and('have.text', 'Mensagem enviada com sucesso.')
      .screenshot('mensagem-de-sucesso');
  }

  mensagemDeErro() {
    
      // tente clicar no botão de enviar com base no texto, se o seletor direto falhar
      cy.contains('button', 'Enviar').click(); // ajuste 'Enviar' se for outro texto visível
    
      cy.get('input[type="email"]').then(($input) => {
        expect($input[0].validationMessage).to.include('Preencha este campo');
      });
    
      cy.screenshot('mensagem-de-erro');
    }
    
  }

export default new ContatoPage();
