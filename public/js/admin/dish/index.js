$("#tab-dish")
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

$(".btn-edit").click(function (e) {
	var id = $(this).data("id");
	var name = $(this).data("name");
	var price = $(this).data("price");
	var info_detail = $(this).data("info_detail");
	var image = $(this).data("image");
	var type = $(this).data("type");
	console.log(id, name, price, info_detail, image, type);
	$("#EditDishModal input[name='id']").val(id);
	$("#EditDishModal input[name='name']").val(name);
	$("#EditDishModal input[name='price']").val(price);
	$("#EditDishModal input[name='info_detail']").val(info_detail);
	// $("#EditDishModal input[name='image']").val(image);
	$("#EditDishModal input[name='type']").val(type);
	$('#EditDishModal').modal('show');
});

$(".btn-delete").click(function (e) {
	var id = $(this).data("id"); //data này mix với data ở button edit truyền lên
	//console.log(id);
	$("#DeleteDishModal input[name='id']").val(id);
	$('#DeleteDishModal').modal('show');
});