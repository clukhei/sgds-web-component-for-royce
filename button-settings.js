document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("dynamic-button");

  // Add event listener to log "hi" when button is pressed
  if (button) {
    button.addEventListener("click", () => {
      console.log("hi");
    });

    // Log the attributes to the console (if needed)
    console.log("formaction:", button.getAttribute("formaction"));
    console.log("formmethod:", button.getAttribute("formmethod"));
    console.log("formtarget:", button.getAttribute("formtarget"));
    console.log("formnovalidate:", button.hasAttribute("formnovalidate"));
  } else {
    console.error("Button not found");
  }
});
