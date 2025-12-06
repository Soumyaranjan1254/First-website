console.log("Practice loaded");

console.log("Practice loaded");

// 1) Variables + data types
let name = "Soumya";
let age = 20;
let isDJ = true;
console.log("Name:", name);
console.log("Age:", age);
console.log("Is DJ:", isDJ);

// 2) If–else
if (age >= 18) {
  console.log("Adult hai.");
} else {
  console.log("Minor hai.");
}

// 3) For loop
for (let i = 1; i <= 5; i++) {
  console.log("Beat number:", i);
}

// 4) While loop
let count = 3;
while (count > 0) {
  console.log("Countdown:", count);
  count--;
}

// 5) Function
function add(a, b) {
  return a + b;
}
console.log("3 + 4 =", add(3, 4));

// 6) Array
let songs = ["track1", "track2", "track3"];
console.log("First song:", songs[0]);

// 7) Object
let user = {
  name: "Soumya",
  role: "DJ",
  city: "Brahmapur"
};
console.log("User city:", user.city);

// 8) DOM + event (tumhara button)
const btn = document.getElementById("testBtn");
btn.addEventListener("click", () => {
  alert("Button clicked from practice.js");
});
