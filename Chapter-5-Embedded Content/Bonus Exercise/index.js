document.querySelectorAll('.sample-button').forEach(button => {
    button.addEventListener('click', () => {
      const audio = new Audio(button.dataset.audio);
      audio.play();
    });
  });
  