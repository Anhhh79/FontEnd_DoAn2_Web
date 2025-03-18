$(document).ready(function () {
    $("#btnShow").click(function () {
        $("#modalDangKy").show(); // Hiển thị phần tử có id=myDiv
    });    
    $("#diaChiTinh", "#diaChiHuyen").select2(); // Kích hoạt Select2
    // Lấy danh sách tỉnh/thành
    $.get("https://provinces.open-api.vn/api/?depth=1")
        .done(function (data) {
            let object = '<option value="">-- Tỉnh Thành --</option>';  // Khởi tạo chuỗi rỗng để lưu các <option>
            $("#diaChiHuyen").empty().append('<option value="">-- Quận Huyện --</option>');
            $("#diaChiXa").empty().append('<option value="">-- Xã Phường --</option>');
            $.each(data, function (index, province) { // Sử dụng (index, province) thay vì (item)
                object += `
                <option value="${province.code}">${province.name}</option>
            `;
            });
            $('#diaChiTinh').html(object); // Gán danh sách tỉnh vào <select>
        })
        .fail(function () {
            console.error("Không thể tải danh sách tỉnh thành");
        });

    // Khi chọn tỉnh, lấy danh sách quận/huyện
    $("#diaChiTinh").change(function () {
        $("#diaChiHuyen").empty().append('<option value="">-- Quận huyện --</option>');
        let provinceCode = $(this).val();
        if (provinceCode) {
            $.get(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`)
                .done(function (data) {
                    $("#diaChiHuyen").append(data.districts.map(district =>
                        `<option value="${district.code}">${district.name}</option>`
                    ));
                })
                .fail(function () {
                    console.error("Không thể tải danh sách quận huyện");
                });
        }
    });

    // Khi chọn quận/huyện, lấy danh sách xã/phường
    $("#diaChiHuyen").change(function () {
        $("#diaChiXa").empty().append('<option value="">-- Xã phường --</option>');
        let districtCode = $(this).val();
        if (districtCode) {
            $.get(`https://provinces.open-api.vn/api/d/${districtCode}?depth=2`)
                .done(function (data) {
                    $("#diaChiXa").append(data.wards.map(ward =>
                        `<option value="${ward.code}">${ward.name}</option>`
                    ));
                })
                .fail(function () {
                    console.error("Không thể tải danh sách xã phường");
                });
        }
    });
});

