const sanBong = [
    { name: "Sân nhân tạo Đại Học Y dược Cần Thơ"},
    { name: "Sân bóng Hoàng Gia"},
    { name: "Sân bóng Đà Nẵng Sport"},
    { name: "Sân cỏ nhân tạo Vĩnh Long"},
    { name: "Sân bóng Cầu Giấy"},
    { name: "Sân bóng Lâm Đồng 1"},
    { name: "Sân bóng Lâm Đồng 2",},
    { name: "Sân bóng Lâm Đồng 3"},
    { name: "Sân bóng Lâm Đồng 4"},
    { name: "Sân bóng Lâm Đồng 5"},
    { name: "Sân bóng Lâm Đồng 6"},
    { name: "Sân bóng Lâm Đồng 7"},
    { name: "Sân bóng Lâm Đồng 8"},
    { name: "Sân bóng Lâm Đồng 9"},
    { name: "Sân bóng Lâm Đồng 10"},
    { name: "Sân bóng Lâm Đồng 11"},
    { name: "Sân bóng Lâm Đồng 12"}
];

const itemsPerPage = 8; // Số sân hiển thị trên mỗi trang
let currentPage = 1; // Trang hiện tại, mặc định là trang đầu tiên

//hàm hiển thị danh sách sân bóng theo trang
function displaySanBong(page = currentPage){
    let sanList = $('#listSanBong');
    sanList.empty(); //xoas danh sách sân bóng cũ

    let start = (page - 1) * itemsPerPage;
    let end = start + itemsPerPage;
    let paginatedItems = sanBong.slice(start, end);

    $.each(paginatedItems, function (index, san) {
        sanList.append(`
            <div class="col-xl-3 col-lg-4 col-md-6 pe-0 pb-3">
                            <div class="card p-2 border-0 shadow-lg h-100 card-hover"
                                style="border-radius: 10px !important;">
                                <img src="https://img.thegioithethao.vn/thumbs/san-bong-da/da-nang/ngu-hanh-son/san-bong-da-kaka-sport-khu-do-thi-hoa-quy/san-bong-sport-khu-do-thi-hoa-quy-1_thumb_500.webp"
                                    class="card-img-top img-hover" style="border-radius: 8px !important;"
                                    alt="Ảnh sân bóng">
                                <div class="card-body px-0 pb-1">
                                    <h6 class="card-title fw-bold pb-2">${san.name}</h6>
                                    <p class="card-text m-0">Khu vực: <span>Xuân Khánh - Cần Thơ </span><br>Số sân:
                                        <span>10</span>
                                    </p>
                                    <div>Sân trống: <a class="btn btn-outline-primary btn-sm mx-2"><span>15 :
                                                30</span></a> <a class="btn btn-sm btn-outline-primary me-2"><span>15 :
                                                30</span></a> <button class="btn btn-outline-primary btn-sm"><span>15 :
                                                30</span></button></div>
                                    <div class="row d-flex pt-2">
                                        <div class="col-6"><i class="bi bi-wifi"></i> Wifi</div>
                                        <div class="col-6"><i class="bi bi-cup-hot"></i></i> Căng tin</div>
                                    </div>
                                    <a href="DatSan.html" class="btn btn-primary w-100 mt-3"
                                        style="border-radius: 8px !important;">Đặt
                                        nhanh kẻo muộn</a>
                                </div>
                            </div>
                        </div>
        `);
    });
}

// Chuyển trang khi nhấn nút
function goToPage(page) {
    if (page < 1 || page > Math.ceil(sanBong.length / itemsPerPage)) return;
    currentPage = page;
    displaySanBong(); // Cập nhật danh sách sân bóng
    updatePagination(); // Cập nhật thanh phân trang
}

// Cập nhật số trang
function updatePagination() {
    let pagination = $("#pagination"); // ID của thanh phân trang
    pagination.empty(); // Xóa các nút cũ

    let totalPages = Math.ceil(sanBong.length / itemsPerPage);
    let startPage = Math.max(1, currentPage - 2);  // Bắt đầu từ trang gần currentPage
    let endPage = Math.min(totalPages, startPage + 4); // Hiển thị tối đa 5 trang

    // Nút "Trang đầu" nếu không phải trang 1
    if (currentPage > 1) {
        pagination.append(`<li class="page-item"><a class="page-link" href="#" onclick="goToPage(1)">«</a></li>`);
    }

    // Hiển thị các số trang
    for (let i = startPage; i <= endPage; i++) {
        let activeClass = (i === currentPage) ? "active" : "";
        pagination.append(`<li class="page-item ${activeClass}"><a class="page-link" href="#" onclick="goToPage(${i})">${i}</a></li>`);
    }

    // Nút "Trang cuối" nếu chưa ở trang cuối
    if (currentPage < totalPages) {
        pagination.append(`<li class="page-item"><a class="page-link" href="#" onclick="goToPage(${totalPages})">»</a></li>`);
    }
}


// Khi trang web tải xong, hiển thị trang đầu tiên
$(document).ready(function () {
    displaySanBong();
    updatePagination();
});