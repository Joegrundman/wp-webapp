import game from "../Game";

class Codebreaking {
    public selected: number;
    public cards: string[];

    constructor () {
        this.selected = 6
        this.cards = []
    }

    public addCard (card: string) {
        this.cards.push(card)
    }

    public getResultFor (year: number, season: number, side: number) {
        return game.codebreakingResults.find((res) =>
          res.year === year &&
          res.season === season &&
          res.side === side
        )
    }
    
    // public draw () {
    //     var year = parseInt($('#cbYear').val());
    //     var season = parseInt($('#cbSeason').val());
    //     WP.Codebreaking.UI.showResultsFor(year, season, codebreaking.selected);       
    // }
    
}

export default Codebreaking;