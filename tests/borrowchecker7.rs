// Exclusive Mutable Access (Should Fail)
let mut x = 5;        // Mutable variable
let y = &mut x;       // Mutable borrow
let z = &mut x;       // Error: Cannot mutate x while it is mutably borrowed
