/// <reference types="cypress"/>

describe('Testes para exercicio', ()=> {

    beforeEach(()=> {
        cy.visit('https://agenda-contatos-react.vercel.app/', {
            onBeforeLoad: (win) => {
                // Limpar qualquer estado persistente. Se os contatos estiverem em localStorage ou em algum outro lugar, ajuste este código.
                win.localStorage.clear();
            }
        });
    });

    it('Deve renderizar 3 contatos', ()=> {
        cy.get('.contato').should('have.length', 3);
    });

    it('deve adicionar um novo contato', ()=> {
        cy.get('[type="text"]').type('Alex');
        cy.get('[type="email"]').type('alexzanini@gmail.com');
        cy.get('[type="tel"]').type('11987654321{enter}');

        cy.get('.contato', { timeout: 10000 }).should('have.length', 4);
    });

    it('deve editar e salvar', ()=> {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click();
        cy.get('[type="text"]').clear().type('Camila');
        cy.get('[type="email"]').clear().type('camila@agencia.com');
        cy.get('[type="tel"]').clear().type('11910203040{enter}');
        cy.get('.alterar').click();

        cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').should('have.text', 'Camila');
    });

    it('deve remover um contato', ()=>{
        cy.get(':nth-child(4) > .sc-gueYoa > .delete').click();
        
        // Verifica se o contato foi realmente removido
        cy.get(':nth-child(4) > .sc-gueYoa > .delete').should('not.exist');
        
        cy.get('.contato', { timeout: 10000 }).should('have.length', 3);
    });

});
