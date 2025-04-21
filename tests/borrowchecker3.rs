//  Mutable Borrow of a Mutable Variable (Should Succeed)
fn main() {
    let mut x = 5;        // Mutable variable
    let y = &mut x;       // Succeeds    
}
