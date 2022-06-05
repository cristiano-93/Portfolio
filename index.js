// function to warn that the feature is not yet properly implemented
function alertFunction() {
  alert("This is not yet properly implemented");
}
// Restting the contact form
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};



