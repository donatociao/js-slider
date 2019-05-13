//azioni al click sulla freccia next
$('.next').click(function() {
  var img_corrente = $('.visibile');
  var next_img = img_corrente.next('img');
  var bullet_corrente = $('.fas.fa-circle');
  var next_bullet = bullet_corrente.next('.fa-circle');
  img_corrente.toggleClass('visibile');

  if (next_img.length != 0) {
    next_img.toggleClass('visibile');
    bullet_corrente.toggleClass('fas far');
    next_bullet.toggleClass('fas far');
  } else {
    var first_img = $('.slider img').first();
    first_img.toggleClass('visibile');
    bullet_corrente.toggleClass('fas far')
    $('.bullets i').first().toggleClass('fas far');
  }
});


//azioni al click sulla freccia prev
$('.prev').click(function() {
  var img_corrente = $('.visibile');
  var prev_img = img_corrente.prev('img');
  var bullet_corrente = $('.fas.fa-circle');
  var prev_bullet = bullet_corrente.prev('.fa-circle');
  img_corrente.toggleClass('visibile');

  if (prev_img.length != 0) {
    prev_img.toggleClass('visibile');
    bullet_corrente.toggleClass('fas far');
    prev_bullet.toggleClass('fas far');
  } else {
    var last_img = $('.slider img').last();
    last_img.toggleClass('visibile');
    bullet_corrente.toggleClass('fas far')
    $('.bullets i').last().toggleClass('fas far');
  }
});
