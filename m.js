const colorStates = {
    "red" : "",
    "": "red"
  };
  
  const articleHearts = document.querySelectorAll(".like-glyph");
  
  function likeCallback(e) {
    const heart = e.target;
    mimicServerCall()
      .then(function(serverMessage){
        alert("You notified the server!");
        alert(serverMessage);
        heart.innerText = EMPTY_HEART[heart.innerText];
        heart.style.color = colorStates[heart.style.color];
      })
      .catch(function(error) {
        alert("Something went wrong!");
      });
  mimicServerCall()
      .then(function(serverMessage){
        alert("You notified the server!");
        alert(serverMessage);
        heart.innerText = FULL_HEART[heart.innerText];
        heart.style.color = colorStates[heart.style.color];
      })
      .catch(function(error) {
        alert("Something went wrong!");
      });
  }
  
  for (const glyph of articleHearts) {
    glyph.addEventListener("click", likeCallback);
  }