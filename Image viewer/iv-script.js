var adress = 'http://146.185.139.243:8314',
    arr,
    currId;

$.ajax({ url: adress + '/getimages', success: function(x) {
  arr = x;
      for (var key in x) {
        $('.list-group').append('<li class="list-group-item" id=' + (x[key].id) + '><span class="badge">0</span>' + (x[key].name) + '</li>')
      }
    }
});

increaseVal = function() {
  $('#' + currId).children('.badge').html(parseInt($('#' + currId).children('.badge').html(), 10)+1);
};

$(document).on('click', function (e)  {
  if ($(e.target).is('.list-group-item') && $('#screen').is(':hidden')) {
    $('#screen').show(400);
    currId=$(e.target).attr('id')
    $('#caramba').attr('src', adress + '/image?id=' + currId);
    increaseVal();
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
      increaseVal();
    } else {
      $('#caramba').attr('src', adress + '/image?id=' + arr[0].id);
      currId = arr[0].id;
      increaseVal();
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
      increaseVal();
    } else {
      $('#caramba').attr('src', adress + '/image?id=' + arr[+arr.length - 1].id);
      currId = arr[+arr.length - 1].id;
      increaseVal();
    }
      break;
    }
  }
}
