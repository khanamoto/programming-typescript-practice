class A {
  private x = 1
}
class B extends A {}
function f(a: A) {}

f(new A())
f(new B())

f({ x: 1 })
