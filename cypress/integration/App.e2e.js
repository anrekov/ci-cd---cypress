describe('App E2E', () => {
  it('should have form', () => {
    cy.visit('/') // home page from json config

    cy.get('input').should('have.value', '')
    cy.get('button').should('have.text', 'Add todo')
  })

  it('should add a todo', () => {
    cy.get('input[type="text"]').type('Learn React', {force: true}).should('have.value', 'Learn React');
    cy.contains('Add todo').click({force: true})

    cy.get('li span:first-of-type').should('have.text', 'Learn React')
    cy.get('input[type="text"]').should('have.value', '');

    cy.get('input[type="text"]').type('Learn Redux', {force: true}).should('have.value', 'Learn Redux');
    cy.contains('Add todo').click({force: true})

    cy.get('li:last-child span:first-of-type').should('have.text', 'Learn Redux')
    cy.get('input[type="text"]').should('have.value', '');
  });

  it('Should delete task', () => {
    cy.get('li').should('have.length', 2)

    cy.get('li:last-child span:last-child').click({force: true})
    cy.get('li').should('have.length', 1)
  })

  it('Should change status', () => {
    cy.get('li input').should('not.have.checked').click({force: true}).should('have.checked')
  })
})