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
	var stt = $(this).data("stt");
	var total = $(this).data("total");
	var orderStatus = $(this).data("order-status");
	var time = $(this).data("time");
	$("#DetailOrderManagerModal input[name='stt']").val(stt);
	$("#DetailOrderManagerModal input[name='total']").val(total);
	if(orderStatus == 1)
		$("#DetailOrderManagerModal input[name='order-status']").val("Đã thanh toán");
	else if(orderStatus == 0)
		$("#DetailOrderManagerModal input[name='order-status']").val("Chưa thanh toán");
	$("#DetailOrderManagerModal input[name='time']").val(time);
	console.log(stt, total, orderStatus, time);
	// $.post("/turn/getDetailTurn", { id: id }, function (detailList) {
	//     console.log(detailList);
	//     console.log(detailList.turnOfStudent.length);
	//     var t = $('#detailModal').DataTable();
	//     t.rows().remove().draw();
	//     for (var i = 0; i < detailList.turnOfStudent.length; i++) {
	//         //console.log(detailList.turnOfStudent[i]['creatAt']);
	//         if(detailList.turnOfStudent[i]['turnInOut'] == true){
	//             t.row
	//             .add([
	//             `<center name="turnInOut"><td> Vào </td></center>`,
	//             `<center name="creatAt"><td > ${moment(detailList.turnOfStudent[i]['createAt']).format('lll')} </td></center>`,
	//             ])
	//             .draw(false);
	//         }
	//         else {
	//             t.row
	//             .add([
	//             `<center name="turnInOut"><td> Ra </td></center>`,
	//             `<center name="creatAt"><td > ${moment(detailList.turnOfStudent[i]['createAt']).format('lll')} </td></center>`,
	//             ])
	//             .draw(false);
	//         }
	//     }
	// });  
	$('#DetailOrderManagerModal').modal('show');
});