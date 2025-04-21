// Releasing Borrow After Mutation (Should Succeed)
fn main() {
    let mut x = 5; // Mutable variable
    let y = &mut x; // Succeeds, mutable borrow
    x = 10; // Mutation succeeds, borrow is released
    let z = &x; // Succeeds, borrow is allowed after mutation
}
