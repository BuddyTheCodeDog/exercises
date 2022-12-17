const gameCatalog = require("../games/gameCatalog");


class SteamUser {
    constructor(name,balance){
        this.name = name;
        this.balance = balance;
        this.games = [];
        this.wishList = [];
    
    }

    buyGame(gameToBuy){

        for(let i = 0; i < gameCatalog.length; i++){
            const gameName = gameCatalog[i];
            if(gameToBuy === gameName.name){
                if(this.balance >= gameName.price){
                    this.balance = this.balance - gameName.price;
                    this.games.push(gameName);
                    console.log(`You purchased: ${gameName.name}`);
                    console.log(`New Balance: ${this.balance}`);   
                }
                else{
                    console.log("not enough money");
                    throw error("NOT ENOUGH MONEY ERROR");
                }
            }
        }
    }
    wishlistGame(gameToWishlist){
        for(let i = 0; i < this.games.length; i++){
            const gamesOwned = this.games[i];
            if(gamesOwned.name === gameToWishlist){
                console.log(`You already own: ${gamesOwned.name}`);
                throw error("ALREADY OWNED CANT WISHLIST ERROR");
            }
            }
        
        for(let i = 0; i < gameCatalog.length; i++){
            const gameName = gameCatalog[i];
            if(gameToWishlist === gameName.name){
                
                this.wishList.push(gameName);
                console.log(`You Wish Listed: ${gameName.name}`);
                   
            }

        }
    }
    sortGamesBy(input){
        if(input === "name"){
            this.games.sort((a, b) => {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            });
            console.log(this.games);
        }
        
        else if(input === "price"){
            this.games.sort((a, b) => {
                if (a.price < b.price) return -1;
                if (a.price > b.price) return 1;
                return 0;
            });
            console.log(this.games);
        }
    }

}


module.exports = SteamUser;