function showContent(section) {
  // Hide all content
  const contents = document.querySelectorAll('.content');
  contents.forEach((content) => content.classList.remove('active'));

  // Remove active class from all buttons
  const buttons = document.querySelectorAll('.menu button');
  buttons.forEach((button) => button.classList.remove('active'));

  // Show selected content
  document.getElementById(section).classList.add('active');

  // Add active class to clicked button
  event.target.classList.add('active');
}
