// Exclusive Mutable Access (Should Pass)
let mut x = 5;        // Mutable variable
let y = &mut x;       // Mutable borrow
let z = &mut x;       
