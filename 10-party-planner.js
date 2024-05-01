// Your code here
class PartyPlanner {
	constructor(guestList = []) {
		this.guestList = guestList
	}
	addToGuestList(name) {
		this.guestList.push(name)
	}
	throwParty() {
		let string = `Welcome to the party ${this.guestList[0]}`
		if (this.guestList.length === 0) {
			return "Gotta add people to the guest list"
		}
		if (this.guestList.length === 1) {
			return string
		} else {
			for (let i = 1; i < this.guestList.length; i++) {
				string += ` and ${this.guestList[i]}`

			}
			return string
		}

	}

}
const party = new PartyPlanner();

console.log(party.throwParty()); // prints "Gotta add people to the guest list"

party.addToGuestList("James");
console.log(party.throwParty()); // prints "Welcome to the party James"
party.addToGuestList("Alvin");
console.log(party.throwParty()); // prints "Welcome to the party James and Alvin"
party.addToGuestList("dubs");
console.log(party.throwParty()); // prints "Welcome to the party James and Alvin"

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
