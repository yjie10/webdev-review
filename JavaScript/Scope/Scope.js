// scope
function aa() {
  console.log("test");
}

// access from the window object 
window.aa()

/* 分割线 */

// 这里其实2.22.22的interview我答错了, _a_ cannot be accessed outside of function bb
function bb() {
  var a = "hello";
}

/* 分割线 */

var b = "Can I access this?" // function bb will have access to _b_

// 因为—— window.bb exists, and b also lives on the window object-- they both have the same parent

// 但是declare在parent (root) scope的variable (var) 在function里能被改写;
var b = "Can I access this?";

function bb() {
  b = "hello";
}

// if I ran function bb(), b will be updated to "hello"

/* 分割线 */

// Root Scope (window)
var fun = 5;
function funFunction() {
  // Child Scope
  var fun = "funFunction";
  console.log(1, fun);
}

function funnerFunction() {
  // Child Scope
  var fun = "funnerFunction";
  console.log(2, fun);
}

function funnestFunction() {
  // Child Scope
  fun = "funnestFunction";
  console.log(3, fun);
}

console.log("window before functions run", fun);
funFunction();
funnerFunction();
funnestFunction();
console.log("window after functions run", fun);

// so what's happening here is that we actually don't have access 
// to the fun declared in the parent scope in the first two functions, 
// because we over-written the original fun variable and gave them new meanings; 
// this is a naming conflict. 