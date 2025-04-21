// Exclusive Mutable Access (Should Pass)
fn main() {
    let mut x = 5; // Mutable variable
    let y = &mut x; // Mutable borrow
    let z = &mut x;
}
