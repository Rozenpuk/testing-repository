var adress = 'http://146.185.139.243:8314',
    arr,
    currId;

$.ajax({ url: adress + '/getimages', success: function(x) {
  arr = x;
      for (var key in x) {
        $('#showcase').append('<div class="image-name" id=' + (x[key].id) + '>' + (x[key].name) + '</div><br>')
      }
    }
});

$(document).on('click', function (e)  {
  if ($(e.target).is('.image-name') && $('#screen').is(':hidden')) {
    $('#screen').show(400);
    currId=$(e.target).attr('id')
    $('#caramba').attr('src', adress + '/image?id=' + currId);
  } else if ($(e.target).parents('#block').length == 0 && $('#screen').is(':visible')) {
    $('#screen').hide(400);
    $('#caramba').attr('src', '');
  }
});

nextImg = function() {
  $('#caramba').attr('src', '');
  for (var key in arr) {
    if (arr[key].id == currId) {
      if (arr[+key +1]) {
      $('#caramba').attr('src', adress + '/image?id=' + arr[+key +1].id);
      currId = arr[+key +1].id;
    } else {
      $('#caramba').attr('src', adress + '/image?id=' + arr[0].id);
      currId = arr[0].id;
    }
      break;
    }
  }
}

prevImg = function() {
  $('#caramba').attr('src', '');
  for (var key in arr) {
    if (arr[key].id == currId) {
      if (arr[+key -1]) {
      $('#caramba').attr('src', adress + '/image?id=' + arr[+key -1].id);
      currId = arr[+key -1].id;
    } else {
      $('#caramba').attr('src', adress + '/image?id=' + arr[+arr.length - 1].id);
      currId = arr[+arr.length - 1].id;
    }
      break;
    }
  }
}
