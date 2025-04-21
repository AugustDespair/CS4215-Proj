// Borrow Checker with Functions (Should Pass)
fn mutate(x: &mut i32) {
    *x += 1;
}

fn main() {
    let mut x = 5; // Mutable variable
    mutate(&mut x); // Mutable borrow
    let y = &mut x;
}
