$("#tab-orderManager")
	.DataTable({
		dom: "Bfrtip", //Thêm dom vào thì nó sẽ hiện đồng thời giữa language và bottom
		responsive: true,
		lengthChange: false,
		autoWidth: false,
		language: {
			url: "//cdn.datatables.net/plug-ins/1.10.25/i18n/Vietnamese.json",
		},
		columnDefs: [{
			targets: 5,
			orderable: false,
		}],
		buttons: [
			{
				extend: 'copyHtml5',
				exportOptions: {
					columns: [0, ':visible']
				}
			},
			{
				extend: 'excelHtml5',
				exportOptions: {
					columns: ':visible'
				}
			},
			{
				extend: 'pdfHtml5',
				exportOptions: {
					columns: [0, 1, 2, 5]
				}
			},
			'colvis'
		],
	});


$(".btn-delete").click(function (e) {
	var id = $(this).data("id"); //data này mix với data ở button edit truyền lên
	//console.log(id);
	$("#DeleteOrderManagerModal input[name='id']").val(id);
	$('#DeleteOrderManagerModal').modal('show');
});

$('.btn-detail').click(function (e) {
	var orderId = $(this).data("order-id");
	var stt = $(this).data("stt");
	var total = $(this).data("total");
	var orderStatus = $(this).data("order-status");
	var time = $(this).data("time");
	$("#DetailOrderManagerModal input[name='stt']").val(stt);
	$("#DetailOrderManagerModal input[name='total']").val(total);
	if (orderStatus == 1)
		$("#DetailOrderManagerModal input[name='order-status']").val("Đã thanh toán");
	else if (orderStatus == 0)
		$("#DetailOrderManagerModal input[name='order-status']").val("Chưa thanh toán");
	$("#DetailOrderManagerModal input[name='time']").val(time);
	console.log(orderId, stt, total, orderStatus, time);
	$.post("/contain/getDetail", { orderId: orderId }, function (detailList) {
		console.log(detailList.detailList);
		var t = $('#detailModal').DataTable();
		t.rows().remove().draw();
		for (var i = 0; i < detailList.detailList.length; i++) {
			// console.log(detailList.detailList[i].name);
			t.row
			.add([
			`<center name="name"><td> ${detailList.detailList[i].name} </td></center>`,
			`<center name="quantity"><td > ${detailList.detailList[i].quantity} </td></center>`,
			`<center name="price"><td > ${detailList.detailList[i].price} </td></center>`,
			])
			.draw(false);
		}
	});
	$('#DetailOrderManagerModal').modal('show');
});