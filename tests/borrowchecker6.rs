// Reassigning Immutable Variable (Should Pass)
fn main() {
    let mut x = 5; // Mutable variable
    let y = &mut x; // Mutable borrow
    x = 10;
}
