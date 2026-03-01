const codeText = `# Python Script
name = "Ayush Rajesh Labhane"
role = "Aspiring Data Analyst"
skills = ["SQL", "Excel", "Python", "Power BI"]

print(name)
print(role)
print(", ".join(skills))`;

const finalText = "Ayush Rajesh Labhane An Aspiring Data Analyst SQL Excel Python Power BI Data Cleaning Visualisation";

const display = document.getElementById("display");

let index = 0;
const typingSpeed = 40;

// PHASE 1: TYPE CODE
function typeCode() {
  if (index < codeText.length) {
    display.innerHTML += codeText.charAt(index);
    index++;
    setTimeout(typeCode, typingSpeed);
  } else {
    setTimeout(showFinalText, 1500);
  }
}

// PHASE 2: SHOW FINAL OUTPUT
function showFinalText() {
  display.innerHTML = finalText;
  startHighlightLoop();
}

// PHASE 3: BLUE WORD HIGHLIGHT LOOP
function startHighlightLoop() {
  const words = finalText.split(" ");
  let wordIndex = 0;

  setInterval(() => {
    let highlightedText = words.map((word, i) => {
      return i === wordIndex
        ? `<span class="highlight">${word}</span>`
        : word;
    }).join(" ");

    display.innerHTML = highlightedText;

    wordIndex++;
    if (wordIndex >= words.length) {
      wordIndex = 0;
    }

  }, 1000); // 1 word per second
}

window.onload = typeCode;