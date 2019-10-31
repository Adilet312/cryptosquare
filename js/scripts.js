$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault()
    var input = $("#words").val();
    var result = countChar(input);
    console.log(result);

    function countChar(val) {
      var size = val.length;
      var row = 0;
      var col = 0;
      var reverSt= "";
      index = 0;
      if(size === Math.sqrt(size)*Math.sqrt(size))
      {
        row = Math.sqrt(size);
        col = Math.sqrt(size);
      }

      for (var columnId = 1;columnId<=col; columnId++)
      {
        for (var rowId = 1; rowId <=row; rowId++)
        {
          if(index < 5)
          {
            reverSt+=val.charAt(index);
            index++;
          }
          else
          {
            reverSt+=" ";
            index=0;

          }


        }
      }
      return reverSt;
    }

  });
});
