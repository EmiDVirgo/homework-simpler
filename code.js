$(function () {
      $(document).on('click.once', function () {
          alert("Alerted once");
          $(document).off('click.once');
      })            
 });