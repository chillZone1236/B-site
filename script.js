function start() {
  let input = document.getElementById("nameInput");
  let name = input.value.trim().toLowerCase();
  
  // 👉 yaha multiple names add kar sakta hai
  let allowedNames = ["Khushi","khushi", "Khushi Singla","khushi singla", "khushii", "Dhriti","dhriti"];
  
  if (name === "") {
    alert("Enter your name 😊");
    return;
  }
  
  if (allowedNames.includes(name)) {
    
    // 👉 start hide, main show
    document.getElementById("start").classList.add("hidden");
    document.getElementById("main").classList.remove("hidden");
    
    // 👉 greeting
    document.getElementById("greeting").innerText =
      "Happy Birthday, " + input.value + " 🎂";
    
    // 👉 typing reset
    document.getElementById("typingText").innerHTML = "";
    
    // 👉 typing text
    typeText(
      "typingText",
      "Dear crush ji 🧿❤️ I prepared this only for you 😉 I hope you may like it 🥹✨"
    );
    
  } else {
    alert("Wrong name ❌");
    input.value = "";
    input.focus();
  }
}


// ✨ typing effect
function typeText(id, text) {
  let i = 0;
  let speed = 40;
  
  function typing() {
    if (i < text.length) {
      document.getElementById(id).innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  
  typing();
}


// 🎁 surprise show
function showSurprise() {
  document.getElementById("surprise").classList.remove("hidden");
}