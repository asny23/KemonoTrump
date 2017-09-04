function getParam(key) {
  regexp = new RegExp(key + '=(.*?)(?:&|$)')
  var match = location.search.match(regexp);
  if (match) {
    return decodeURIComponent(match[1]);
  } else {
    return '';
  }
}

function showForm() {
  $.getJSON('resources/friends.json', function (data) {
    var selectFriends = $('#select_friends');
    $.each(data, function (key, val) {
      selectFriends.append('<option value="' + key + '">' + val + '</option>')
    });
    $('#submit_button').on("click", function () {
      var newurl =
        location.href.replace(/\?.*$/, '') +
        '?card=' + $('#select_suit').val() + $('#select_number').val() +
        '&friends=' + $('#select_friends').val();
      window.location.href = newurl;
    });
    $('#select_form').show();
  });
}

function checkParam(paramCard, paramFriends) {
  var match = paramCard.match(/[shdc](?:0[1-9]|1[0-3])$/);
  if (match) {
    $.getJSON('resources/friends.json', function (data) {
      if (paramFriends in data) {
        drawCard(paramCard, paramFriends);
        $('#kemono_trump').show();
      } else {
        showError();
      }
    });
  } else {
    showError();
  }
}

function showError() {
  $('#reset_button').on("click", function () {
    var newurl = location.href.replace(/\?.*$/, '');
    window.location.href = newurl;
  });
  $('#show_error').show();
}

window.addEventListener("load", function () {
  var paramCard = getParam('card');
  var paramFriends = getParam('friends');
  if (paramCard == '' && paramFriends == '') {
    showForm();
  } else {
    checkParam(paramCard, paramFriends);
  }
}, false);
