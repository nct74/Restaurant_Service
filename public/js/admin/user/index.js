$("#tab-users")
	.DataTable({
		// dom: "Bfrtip", //Thêm dom vào thì nó sẽ hiện đồng thời giữa language và bottom
		responsive: true,
		lengthChange: false,
		autoWidth: false,
		language: {
			url: "//cdn.datatables.net/plug-ins/1.10.25/i18n/Vietnamese.json",
		},
		// buttons: [
		//     {
		//         text: "Thêm mới",
		//         action: function (e, dt, node, config) {
		//             window.location.href = "/faculty/add";
		//         },
		//     },
		// ],
	})

$(".btn-edit").click(function (e) {
	var username = $(this).data("username");
	var password = $(this).data("password");
	var cccd = $(this).data("cccd");
	var role = $(this).data("role");
	//console.log(id, name, eyear);
	$("#EditUserModal input[name='username']").val(username);
	$("#EditUserModal input[name='password']").val(password);
	$("#EditUserModal input[name='cccd']").val(cccd);
	$("#EditUserModal select[name='role']").val(role);
	$("#EditUserModal select[name='role']").trigger("change");
	$('#EditUserModal').modal('show');
});

$(".btn-delete").click(function (e) {
	var username = $(this).data("username"); //data này mix với data ở button edit truyền lên
	//console.log(email);
	$("#DeleteUserModal input[name='username']").val(username);
	$('#DeleteUserModal').modal('show');
});
