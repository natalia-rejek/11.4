function Phone(brand, price, color, operatingsystem) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.operatingsystem = operatingsystem;
	
}

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + " and the operating system is " + this.operatingsystem +".");
}

var iPhone6S = new Phone("Apple", 2250, "silver", "iOS"),
	SamsungGalaxyS6 = new Phone("Samsung", 1550, "black", "Android"),
	OnePlusOne = new Phone("One", 250, "green", "Android");


iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();