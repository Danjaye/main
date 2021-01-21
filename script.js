function showPassword(){
  var x = document.getElementById("pswd");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function testCode(){
  var derivedText = document.getElementById('code').value;
  var container = document.getElementById('container');

  if(derivedText != ''){
    container.innerHTML = derivedText;
  }
}

function clearContainer(){
  var container = document.getElementById('container');
  container.innerHTML = '<p>Sample text</p>';
}

function checkAbility(){
  var resetButton = document.getElementById('resetButton');
  var testButton = document.getElementById('testButton');
  var textbox = document.getElementById('code');
  var container = document.getElementById('container');

  if(container.innerHTML == '<p>Sample text</p>')
  {
    resetButton.disabled = true;
  }
  else
  {
    resetButton.disabled = false;
  }

  if(textbox.value == ''){
    testButton.disabled = true;
  }
  else
  {
    testButton.disabled = false;
  }
}

function hideThing(){
  document.getElementById('faq').style.visibility = 'hidden';
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var div = document.getElementById("scroller");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}