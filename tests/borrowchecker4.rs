// Borrowing After Mutation (Should Fail)
fn main() {
    let mut x = 5;        // Mutable variable
    let y = &x;           // Shared borrow
    x = 10;               // Error: Cannot mutate x while it has an active borrow    
}
