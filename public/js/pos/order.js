
$(document).ready(function () {
  $(".getdata").click(function (e) {
    var ma = $(this).data("type");
    console.log(ma);
    $('.titlelistdish').text(ma);
    $('.carddora').remove();
    $.post('/order/getalldish', { ma: ma }, function (data) {
      // if(ma=="")
      // $('.dishreal').
      var list = data.data;
      for (var i = 0; i < list.length; i++) {

        // var mycard = $(`<div class="carddora"></div>`)
        var newtext = `
                  <div class="carddora">
                      <img class="card-img-top" src=${list[i].image} alt='Card image cap' >
                      <div class="card-body-top" >
                          <hr class="hr-img-top">
                          <h3 class="card-title">${list[i].id}.  ${list[i].name}
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
  $("#ab").on("click", 'button', function (e) {
    var image = $(this).data("image");
    var id = $(this).data("id");
    var name = $(this).data("name");
    var price = $(this).data("price");
    var info = $(this).data("info");
    var m1 = $(makeModal(image, name, price, info, id)); // I would want to skip creating an HTML element with jQuery.
    $(".quantity").remove();
    m1.modal('show');

  });

})

function myFunctionplus() {

  // var a = document.getElementById(id);
  // var b = parseInt(a.textContent)+1;
  // document.getElementById(id).innerHTML = b;

  let variable = $(".quantity").text();
  let b = parseInt(variable) + 1;
  b = parseInt(b);
  $(".quantity").html(b);
}
function myFunctionminus() {

  let variable = $(".quantity").text();
  let b = parseInt(variable) - 1;
  if (b < 1) $(".quantity").html(1);
  else $(".quantity").html(b);
}


function makeModal(image, name, price, info, id) {
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
              <button onclick="myFunctionplus()" type="button"  style="float:right;">  <image src="/img/+.png" > </button>
              <h2 class="quantity" style="float:right; margin: 20px 20px 0px 20px;"> 1 </h2>
                <button onclick="myFunctionminus()" type="button" style="float:right;">  <image src="/img/-.png" > </button>
                <hr class="hr-img-top" style="margin-top: 60px;">
                <p style="font-size:25px;  display: inline;">Describe: ${info}</p> 
  
              </div>
            </div>
            <div>
             
            </div>
  
  
          </div>
          <div class="modal-footer">
            <button type="button" onclick="myFunctionAdd(${id},'${image}',${price},'${name}')"  style="width: 320px; font-size:30px; height: 70px;color:white; margin:auto; background-color: red;border-radius: 15px;" data-dismiss="modal">ADD</button>
          </div>
        </div>
    
      </div>
    </div>`;
}

function myFunctionAdd(id, image, price, name) {

  let b = $(".quantity").text();
  // var b = id;
  // console.log(a);
  // console.log(b);
  // console.log(b);
  let check = 0;
  var i = 0;
  while ($(".foodcard p")[i]) {
    var con = $(".foodcard p").eq(i).attr('class');
    if (con == id) {
      var datacurrent = $(".foodcard h2").eq(i).text();
      datacurrent = parseInt(datacurrent) + parseInt(b);
      $(".foodcard h2").eq(i).text(datacurrent);
      $(".foodcard span").eq(i).text(`${datacurrent * price} $`);
      console.log(datacurrent);
      check = 1;
    }
    i++;
  }


  var a = `<div class="foodcard ${id}" style="position: relative">
      <div class="foodcardimage"><img src=${image} alt="cart" style="float:left; width: 60px;border-radius: 10px; margin: 20px 0px 0px 10px;" /></div>
      <div class="foodcardinfor">
          <p  class="${id}"></p>
          <div>
          <h1 style="margin-top:10px; display: inline;">${id}. ${name}</h1>
          <button style="  margin-right:10px; float: right;" onclick="Deleteinpayment(${id})"> <img src="/img/x.png" style=" width: 35px; background-color: #E5E5E5;  " /></button>
          </div>
          <br>
          <button style="margin-left:20px; float: left;" onclick="Minusinpayment(${id},${price})"> <img src="/img/-.png" style="border-radius: 10px; width: 35px;  border: 1px solid;" /></button>
          <h2 style="float: left; margin-left:10px; margin-top:5px;">${b}</h2>
          <button style="margin-left:10px; float: left;"  onclick="Addinpayment(${id},${price})"> <img src="/img/+.png" style="border-radius: 10px; width: 35px;  border: 1px solid;" /></button>
          <span style="font-size:25px; color:red; float: right; margin-right:10px;">${price * b} $</span>
      </div>
      </div>`;
  if (check == 0) {
    $(".bodySection").append(a);
    let quantity = parseInt($(".headSection span").text());

    $(".headSection span").text(`  ${quantity + 1}`);
  }
  resetTotal();
}
function resetTotal() {
  var total = 0;
  var x = 0;
  while ($(".foodcard p")[x]) {
    let pricei = $(".foodcard span").eq(x).text();
    let getpricei = "";
    for (let y = 0; y < pricei.length - 2; y++) {
      getpricei += pricei[y];
    }
    total += parseInt(getpricei);
    x++;
  }
  $(".paymentSection p").text(` ${total} USD`);
}
function copytext() {
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  console.log(copyText.value);
}
function fireSweetAlert(data) {
  Swal.fire({title:'<h2>Đây là mã đơn hàng của bạn:</h2>',  html:`<input style="border: 2px solid #E5E5E5 ; font-size:30px;border-radius: 25px; text-align: center; height: 60px; width: 320px;" type="text" value=${data} id="myInput"> <button style="background-color: #E5E5E5; height: 60px;width:120px; font-size:20px; border-radius: 25px;" onclick="copytext()">Copy text</button>`,  icon:'success' , width: '600px',confirmButtonText: '<h2 style="font-size:20px;">OK</h2>',}).then((result) => {
    if (result['isConfirmed']){
      window.location.href = "/payment";
    }
  });
}
function Minusinpayment(id, price) {

  // let variable = $(".quantity").text();
  // let b = parseInt(variable)-1;
  // if(b<1)  $(".quantity").html(1);
  // else $(".quantity").html(b);
  let i = 0;
  while ($(".foodcard p")[i]) {
    let con = $(".foodcard p").eq(i).attr('class');
    if (con == id) {
      let datacurrent = $(".foodcard h2").eq(i).text();
      datacurrent = parseInt(datacurrent) - 1;
      if (datacurrent == 0) datacurrent = 1;
      $(".foodcard h2").eq(i).text(datacurrent);
      $(".foodcard span").eq(i).text(`${datacurrent * price} $`);
      console.log(datacurrent);
    }
    i++;
  }
  $(".headSection span").text(`  ${i}`);
  resetTotal();
}
function Deleteinpayment(id) {
  let i = 0 ;
  let check = 0;
  while($(".foodcard p")[i])
  {
    let con = $(".foodcard p").eq(i).attr('class');
    if(con==id){
      $(".foodcard").eq(i).remove();
      check = 1;
    }
    i++;
  }
  if (check==1) i--;
  $(".headSection span").text(`  ${i}`);
  resetTotal();
}
function Addinpayment(id,price) {
  let i = 0 ;
  while($(".foodcard p")[i])
  {
    let con = $(".foodcard p").eq(i).attr('class');
    if(con==id){
      let datacurrent = $(".foodcard h2").eq(i).text();
      datacurrent = parseInt(datacurrent) + 1;
      $(".foodcard h2").eq(i).text(datacurrent);
      $(".foodcard span").eq(i).text(`${datacurrent*price} $`);
    }
    i++;
  }
  resetTotal();
}
    function Payment() {
      var arrid = new Array();
      var arrquan = new Array();
      let total = 0;
      let i = 0 ;
      while($(".foodcard")[i])
      {
        
         total = parseInt($(".paymentSection p").text());
        let con = parseInt($(".foodcard p").eq(i).attr('class'));
        let datacurrent = parseInt($(".foodcard h2").eq(i).text());
        arrid[i] = con;
        arrquan[i] = datacurrent;
        i++;
      }
      $.post('/order/addOrder', {arrid: arrid, arrquan:arrquan, total:total}, function (data) {
        fireSweetAlert(data);

      })
    }
