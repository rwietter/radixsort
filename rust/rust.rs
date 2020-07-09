fn main(){
  let x = 2;
  let y = 4.5;
  multiply(x, y);
}

fn multiply(x: i32, y: f32){
  let foo: f32 = x as f32;
  println!("This {} * {} = {}", x, y, foo*y);
}
