var toggle = 0

function renderOverlay() {

  let overlay = document.createElement("DIV");
  overlay.className = "custom-inject-overlay";
  overlay.id = "custom-inject-overlay";
  let label = "<div class='custom-inject-overlay cio-label'><p>AGENT TOOLS</p></div>";

  overlay.innerHTML += "<div class='cio-layer cio-one'><p>Test Layer</p><p>Test Layer</p><p>Test Layer</p><p>Test Layer</p><p>Test Layer</p></div>";

  overlay.innerHTML += label;
  
  document.body.appendChild(overlay);
}

function checkToggle(){
  let overlay = document.getElementById("custom-inject-overlay")
}

renderOverlay();
checkToggle();