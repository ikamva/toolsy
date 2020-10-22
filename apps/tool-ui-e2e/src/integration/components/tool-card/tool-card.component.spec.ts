describe('tool-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=toolcardcomponent--primary'));

  it('should render the component', () => {
    cy.get('tly-tool-card').should('exist');
  });
});
