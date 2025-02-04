function makeChange(cents) {
    let change = {
        'q': 0,
        'd': 0,
        'n': 0,
        'p': 0
    };

    // calculate quarters
    change.q = Math.floor(cents / 25);
    cents = cents % 25;

    // calculate dimes
	
    // calculate nickels
	
    // calculate pennies
	

    return change;
}