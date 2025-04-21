// Borrow Checker with Functions (Should Fail on Invalid Borrow)
fn mutate(x: &mut i32) {
    *x += 1;
}

let mut x = 5;        // Mutable variable
mutate(&mut x);       // Mutable borrow
let y = &mut x;       // Error: Cannot mutate x while it is mutably borrowed
