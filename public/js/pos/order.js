
$(document).ready(function () {
$(".getdata").click(function (e) {
    var ma = $(this).data("type");
    console.log(ma);
    $('.titlelistdish').text(ma);
    $('.carddora').remove();    
    $.post('/order/getalldish', {ma: ma}, function (data) {
        // if(ma=="")
        // $('.dishreal').
        var list = data.data;
            for(var i=0;i<list.length;i++){

                // var mycard = $(`<div class="carddora"></div>`)
                var newtext = `
                <div class="carddora">
                    <img class="card-img-top" src=${list[i].image} alt='Card image cap' >
                    <div class="card-body-top" >
                        <hr class="hr-img-top">
                        <h2 class="card-title">${list[i].id}.  ${list[i].name}
                        <hr class="hr-img-top">

                        <h2 class="card-title" style="color:red;">${list[i].price} $ 
                        <button class="card-text circle"   data-price=${list[i].price} data-image=${list[i].image} data-name="${list[i].name}" data-info="${list[i].info_detail}" data-id=${list[i].id}>
                            <img class="img-button-card" src='/img/cartt.png' alt='cart'>
                        </button>
                    </div>
                </div>`;
                $(".dishreal").append(newtext);
                
            }

        // console.log(data.data);
    })
})
// var t = $('.dishreal').get(0);
// $("button.card-text").click(function (e) {
//     // var MaKH = $(this).data("makh");
//     // $("#addmonan input[name='MaKH']").val(MaKH);
//     $('#addmonan').modal('show');
// });
// $("#ab").on( "click",'#hehe', function(e) {
//     $('#addmonan').modal('show');
//   });

//   $(document).ready(function() {
//     $("button .card-text").click(function(){
//         alert("button");
//     }); 
// });

})


$(document).ready(function () {
$("#ab").on( "click",'button', function(e) {
  var image = $(this).data("image");
  var id = $(this).data("id");
  var name = $(this).data("name");
  var price = $(this).data("price");
  var info = $(this).data("info");
  var m1 = $(makeModal(image,name,price,info,id)); // I would want to skip creating an HTML element with jQuery.
 
  m1.modal('show');

  });

})

function myFunctionplus(id) {

  var a = document.getElementById(id);
  var b = parseInt(a.textContent)+1;
  document.getElementById(id).innerHTML = b;
}
function myFunctionminus(id) {
  var a = document.getElementById(id);
  var b = parseInt(a.textContent)-1;
  if(b<0)  document.getElementById(id).innerHTML = 0;
  else document.getElementById(id).innerHTML = b;
}
function addcart(id){

}
  
  function makeModal(image,name,price,info,id) {
    return `<div id="myModal" class="modal fade" role="dialog" style="display: none">
    <div class="modal-lg modal-dialog modal-dialog-centered ">
  
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header" style="background: rgba(196, 196, 196, 0.47);height: 70px;">
          <h1 class="modal-title" style="font-family: 'Comfortaa'; margin-left: 20px;font-weight: bold;">ADD TO CART</h1>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body" style="height: 450px; float:left;">
          <div style="border-radius: 10px; border: 1px solid rgba(196, 196, 196, 0.47); width: 180px; float:left;">
            <img  src=${image} alt='Card image cap' style="width: 90%; margin-left: 10px;" >
          </div>
          <div style="width: 540px; height: 440px; margin-left:30px; float: left;">
            <h2 style="float: left;"> Name:  &nbsp; &nbsp; &nbsp; &nbsp;   ${name} </h2>
            <h2 style="float: right;"> Unit Price  </h2>
            <div> <br> <br> <br></div>
            <h2 style="float: right; color: red; ">${price} USD  </h2>
            <hr class="hr-img-top" style="margin-top: 60px;">
            <div style="margin-top:40px;">
            <p style="font-size:25px;  display: inline;">Quantity </p>
            <button onclick="myFunctionplus(${id})" type="button"  style="float:right;">  <image src="/img/+.png" > </button>
            <h2 class="quantity" id=${id} style="float:right; margin: 20px 20px 0px 20px;"> 1 </h2>
              <button onclick="myFunctionminus(${id})" type="button" style="float:right;">  <image src="/img/-.png" > </button>
              <hr class="hr-img-top" style="margin-top: 60px;">
              <p style="font-size:25px;  display: inline;">Describe: ${info}</p> 

            </div>
          </div>
          <div>
           
          </div>



        </div>
        <div class="modal-footer">
          <button type="button" style="width: 320px; font-size:30px; height: 70px;color:white; margin:auto; background-color: red;border-radius: 15px;" data-dismiss="modal">ADD</button>
        </div>
      </div>
  
    </div>
  </div>`;
  }
  