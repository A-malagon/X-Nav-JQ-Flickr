
$(document).ready(function(){

   var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"

  $("#tag").click(function(){
    $.getJSON(flickerAPI, {
      tags: "fuenlabrada",
      tagmode: "any",
      format: "json",
    }).done(getImgs)
  });

  $("#pincha").click(function(){
    var tag = $("#write").val()
    $.getJSON(flickerAPI, {
      tags: tag,
      tagmode: "any",
      format: "json",
    }).done(getImgs)
  });

function getImgs(resp){
    $("#img").html("");
    var html = "<div>";
    var i = 0;
    while(i < 20){
        html += "<ul><img src=" + resp.items[i].media.m + "></ul>"
        i++;
    }
    html += "</div>";
    $("#img").append(html)
}
});
