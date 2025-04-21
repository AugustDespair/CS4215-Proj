// Reassigning Immutable Variable (Should Pass)
let mut x = 5;        // Mutable variable
let y = &mut x;       // Mutable borrow
x = 10;               