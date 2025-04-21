// Reassigning Immutable Variable (Should Fail)
let mut x = 5;        // Mutable variable
let y = &mut x;       // Mutable borrow
x = 10;               // Error: Cannot assign to immutable reference