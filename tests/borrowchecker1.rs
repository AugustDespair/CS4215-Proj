fn main() {
    // Immutable Variable with Mutable Borrow (Fail)
    let x: u16 = 5; 
    let y: u16 = &mut x; 
}