// Correct Usage of Shared Borrows
fn main() {
    let x = 5; // Immutable variable
    let y = &x; // Shared borrow 1
    let z = &x; // Shared borrow 2
    let w = &x; // Shared borrow 3
}
