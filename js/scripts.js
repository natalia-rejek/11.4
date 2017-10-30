function phone(brand, price, color, operatingsystem) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.operatingsystem = operatingsystem;
	
}

phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + " and the operating system is " + this.operatingsystem +".");
}

var iPhone6S = new phone("Apple", 2250, "silver", "iOS"),
	samsungGalaxyS6 = new phone("Samsung", 1550, "black", "Android"),
	onePlusOne = new Phone("One", 250, "green", "Android");


iPhone6S.printInfo();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo();