// function to remove the effect of transition
function removeTransition(e) {
    // set propertyName is not equal to transform.
    if(e.propertyName !== 'transform') return;
    // add css to remove transition
    e.target.classList.remove('playing');
  }

  // set function to playsound
  function playSound(e) {
    // select a keycode from the audio element.
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  // console.log(audio);
  // select a keycode from the the div element.
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  // set audio = false
  if (!audio) return;
  // add css to add transition
  key.classList.add('playing');
  // set the time for audio
  audio.currentTime = 0;
  // set to play the sound
  audio.play();
};

// looping
// select all the keys
const keys = Array.from(document.querySelectorAll('.key'));
  // set addEventListener to each of the key using for Each loop to remove transition.
  keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition);
    // when key is pressed, set addEventListener to play the sound
    window.addEventListener('keydown', playSound);
});
