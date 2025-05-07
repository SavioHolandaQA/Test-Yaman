/// <reference types="cypress" />

import contatoPage from '../support/pages/contatoPage';
const dados = require('../fixtures/dados.json');
const { name, email, subject, message } = dados;

describe('Acessando a tela de contato', () => {
  beforeEach(() => {
    contatoPage.visitarPagina();
  });

  it('Preenchendo com sucesso', () => {
    contatoPage.preencherCampos(name, email, subject, message);
    contatoPage.clickEnviar();
    contatoPage.mensagemDeSucesso();
  });

  it('Validar mensagem de erro', () => {
    // Simula ausência do campo de e-mail
    contatoPage.preencherCampos(name, '', subject, message);
    contatoPage.clickEnviar();
    contatoPage.mensagemDeErro();
  });
});
