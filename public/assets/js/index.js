
const callback = () => {
  // Handler when the DOM is fully loaded

  // Attached Start Quiz Button
  const qDiv = document.querySelector(".quiz-div");

  const startBtn = document.createElement("button");

  startBtn.setAttribute("type", "button");
  startBtn.setAttribute("class", "btn btn-outline-primary align-self-center start-btn");

  const text = document.createTextNode("Start New Quiz!");

  startBtn.appendChild(text);
  qDiv.appendChild(startBtn);

  
  document.querySelector(".start-btn").addEventListener("click", function(){
    qDiv.removeChild(startBtn);

    

  });









};

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  callback();
} else {
  document.addEventListener("DOMContentLoaded", callback);
}

