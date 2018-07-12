$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var noString = $("input").val();
    var noArray = noString.split(",");
    alert(noArray[3]);

  });
});
