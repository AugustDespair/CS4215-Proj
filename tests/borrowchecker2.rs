// Multiple Shared Borrows of the Same Variable (Should Fail)
let x = 5;            // Immutable variable
let y = &x;           // Shared borrow 1
let z = &x;           // Shared borrow 2
let w = &mut x;       // Error: Cannot mutate x while it has active shared borrows
