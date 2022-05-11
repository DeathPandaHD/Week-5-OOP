class Game{
    constructor(gameNames, publisher, yearReleased ) {
        this.gameNames = gameNames
        this.publisher = publisher
        this.yearReleased = yearReleased
    }
  
    describe() {
        return `${this.gameNames} was published by ${this.publisher} and released ${this.yearReleased}`
    }
}

class Collection {
  constructor(gameSet){
    this.gameSet = gameSet
    this.catalog = []
  }
    
  addGame(game){
    if(game instanceof Game) {
      this.catalog.push(game)
    } else {
      throw new Error("That's not a game")
    }
  }
  
  describe(){
    return `${this.gameSet} has ${this.catalog.length} games`
  }
}

class Menu {
  
  constructor(){
    this.gameCollection = []
    this.selectedCollection = null
  }
  
  start(){
    let selection = this.menuOptions()
    while (selection != 0) {
      switch (selection){
        case "1":
          this.createCollection()
          break
        case "2":
        	this.viewCollection()
            break
      	case "3":
        	this.deleteCollection()
            break
      	case "4":
            this.displayCollections()
            break
      	default:
        	selection = 0
        }
      selection = this.menuOptions()
    }
    alert("Closing collector")
  }
  
  menuOptions(){
      return prompt(`
      0) Exit
      1) Create new collection
      2) View collection
      3) Delete collection
      4) Display all collections
      `)
    }
    
  showCollectionOptions(collectionInfo){
      return prompt (`
      0) Back
      1) Add Game
      2) Delete game
      ------------------
      ${collectionInfo}
    `)
  }
    
  displayCollections() {
  	let gameString = ""
    for (let i = 0; i < this.gameCollection.length; i++) {
    	gameString += i + ") " + this.gameCollection[i].name + "\n"
    }
    alert(gameString);
  }
  
  createCollection() {
  	let name = prompt("Enter the tilte for the new collection")
    this.gameCollection.push(new Collection(name))
  }
  
  viewCollection() {
    let index = prompt("Which collection do you want?")
    if (index > -1 && index < this.gameCollection.length) {
      this.selectedCollection = this.gameCollection[index]
      let description = "Collection name: " + this.selectedCollection.name + "\n"
      
      for (let i = 0; i < this.selectedCollection.catalog.legnth; i++){
        description += i + ") " + this.selectedCollection.catalog.length[i].name 
        + ' - ' + this.selectedCollection.catalog[i].position + "\n"
      }
      
      let selection = this.showCollectionOptions(description)
      switch (selection){
        case "1":
          this.createCatalog();
          break
        case "2":
        	this.deleteCatalog();
      }
    }
  }

  deleteCollection() {
    let index = prompt("Enter team you want to delete")
    if (index > -1 && index < this.selectedTeam.players.length){
      this.teams.splice(index, 1)
  }
}


  createCatalog() {
    let name = prompt("Enter the title of the new game")
    let date = prompt("Enter the year the game was published")
    let publish = prompt("Enter who published the game")
    this.selectedCollection.game.push(new Game(name, date, publish))
  }

  deleteCatalog() {
    let index = prompt("Enter the collection you want to delete")
    if (index > -1 && index < this.selectedCollection.game.length){
      this.selectedCollection.game.splice(index, 1);
    }
  }
}

let menu = new Menu()
menu.start()