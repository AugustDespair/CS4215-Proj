let mut x = 5;        // Mutable variable
{
    let y = &mut x;   // Mutable borrow in scope
    // y is dropped here when scope ends
}
let z = &mut x;       // Succeeds, borrow is allowed after scope ends
