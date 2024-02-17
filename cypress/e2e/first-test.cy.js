describe("Pokedex", function () {
  it("front page can be opened", function () {
    cy.visit("http://localhost:5000");
    cy.contains("ivysaur");
    cy.contains(
      "Pokémon and Pokémon character names are trademarks of Nintendo."
    );
  });

  it("can navigate to ivysaur pokemon page", function () {
    cy.visit("http://localhost:5000");
    cy.get('[href="/pokemon/ivysaur"] > .list-item-name').click();
    cy.contains("chlorophyll");
  });
});
