$(document).ready(function() {
  $('#submit').click(function () {
    event.preventDefault();
    start();
    });
  });
});

var processResponse = function( response )
{
  console.log( 'in processResponse: ' + response );
  // new p tag
  var newParagraph = document.createElement('p');
  // with out output data
  newParagraph.textContent = response;
  // empty our output div
  document.getElementById('outputDiv').innerHTML='';
  // append newParagraph to output
  document.getElementById('outputDiv').appendChild( newParagraph );
}

function start() {
  var x = $('#first').val();
  var y = $('#second').val();
  var m = $('#math').val();

  var inputObject = {
    "x": x,
    "y": y,
    "m": m
  }
}

$.ajax({
   type: "POST",
   data: inputObject,
   url: "/",
   success: function(data){
          console.log( 'post successfull: ' + data );
          // if post is successful we've received back "data"
          // send "data" to processResponse to do something with it
          processResponse(data);
    },
    error: function(){
         console.log( 'error connecting to server' );
     }
  });
}
