$(document).ready(function() {
    $('a#open').click(function(event) {
        event.preventDefault();
        $('#overlay').fadeIn(400, function() {
            $('#unblock__form')
            .css('display', 'block')
            .animate({opacity: 1, top: '50%'}, 200);
        });
    });

    $('.close, #overlay').click(function(){
        $('#unblock__form').animate({opacity: 0, top: '45%'}, 200,
            function(){
                $(this).css('display', 'none');
                $('#overlay').fadeOut(400);
            })
        ;
    });

});


$('[lang="rus"]').hide();
$('[lang="ua"]').hide();
$('[lang="pl"]').hide();
$('[lang="de"]').hide();
$('[lang="pt"]').hide();
$('[lang="ro"]').hide();
$('[lang="es"]').hide();
$('[lang="it"]').hide();
$('[lang="ir"]').hide();
$('[lang="fr"]').hide();
$('[lang="cs"]').hide();

$('#lang-switch').change(function () {
  var lang = $(this).val();
  switch (lang) {
    case 'en': 
      $('[lang]').hide();
      $('[lang="en"]').show();
      break;
    case 'rus':
      $('[lang]').hide();
      $('[lang="rus"]').show();
      break;
    case 'ua':
      $('[lang]').hide();
      $('[lang="ua"]').show();
      break;
    case 'pl':
      $('[lang]').hide();
      $('[lang="pl"]').show();
      break;
    case 'de':
      $('[lang]').hide();
      $('[lang="de"]').show();
      break;
    case 'pt':
      $('[lang]').hide();
      $('[lang="pt"]').show();
      break;
    case 'ro':
      $('[lang]').hide();
      $('[lang="ro"]').show();
      break;
    case 'es':
      $('[lang]').hide();
      $('[lang="es"]').show();
      break;
    case 'it':
      $('[lang]').hide();
      $('[lang="it"]').show();
      break;
    case 'ir':
      $('[lang]').hide();
      $('[lang="ir"]').show();
      break;
    case 'fr':
      $('[lang]').hide();
      $('[lang="fr"]').show();
      break;
    case 'cs':
      $('[lang]').hide();
      $('[lang="cs"]').show();
      break;
    default:
      $('[lang]').hide();
      $('[lang="en"]').show();
  }
});