var modal = document.getElementById("myModal");
var tokenInput = document.getElementById('token_input');
var span = document.getElementsByClassName("close")[0];

function handleConfig() {
  modal.style.display = "block";

  span.onclick = function() {
    modal.style.display = "none";
  }
}
function submitAccessToken() {
  var headerAccessTokenList = document.getElementsByClassName('sample-request-header');
  var accessToken = tokenInput.value;
  for (let headerRequestInput of headerAccessTokenList) {
    headerRequestInput.value = accessToken;
  }
  localStorage.setItem('x-access-token', accessToken)
  tokenInput.value = "";
  modal.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function(event) {
  var xAccessToken = localStorage.getItem('x-access-token')
  var headerAccessTokenList = document.getElementsByClassName('sample-request-header');
  if(xAccessToken) {
    setTimeout(function() {
      for (let headerRequestInput of headerAccessTokenList) {
        headerRequestInput.value = xAccessToken;
      }
    }, 1000)
  }
});
