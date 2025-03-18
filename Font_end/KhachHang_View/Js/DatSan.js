
document.addEventListener("DOMContentLoaded", function () {
    function validateInput(inputId, errorId, regex, errorMessage) {
        let input = document.getElementById(inputId);
        let errorSpan = document.getElementById(errorId);

        function checkValidation() {
            if (regex.test(input.value.trim())) {
                errorSpan.textContent = ""; // Ẩn lỗi nếu đúng
                return true;
            } else {
                errorSpan.textContent = errorMessage; // Hiển thị lỗi nếu sai
                return false;
            }
        }

        input.addEventListener("input", checkValidation);
        return checkValidation;
    }

    let checkHoten = validateInput("hoten", "error-hoten", /^[a-zA-ZÀ-ỹ\s]+$/, "Họ và tên không được chứa số hoặc ký tự đặc biệt!");
    let checkEmail = validateInput("email", "error-email", /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email không hợp lệ.");
    let checkSdt = validateInput("sdt", "error-sdt", /^0\d{9}$/, "Số điện thoại phải có 10 số và bắt đầu bằng 0.");

    let ngayNhanInput = document.getElementById("myID");
    let errorNgayNhan = document.getElementById("error-ngaynhan");

    function checkNgayNhan() {
        if (ngayNhanInput.value) {
            errorNgayNhan.textContent = ""; // Ẩn lỗi nếu đã chọn ngày
            return true;
        } else {
            errorNgayNhan.textContent = "Vui lòng chọn ngày nhận!";
            return false;
        }
    }

    ngayNhanInput.addEventListener("input", checkNgayNhan);

    document.getElementById("btnDatSan").addEventListener("click", function () {
        let isValid = checkHoten() & checkEmail() & checkSdt() & checkNgayNhan();

        if (isValid) {
            showSweetAlert();

            document.getElementById("hoten").value = "";
            document.getElementById("email").value = "";
            document.getElementById("sdt").value = "";
            ngayNhanInput.value = "";

            document.getElementById("error-hoten").textContent = "";
            document.getElementById("error-email").textContent = "";
            document.getElementById("error-sdt").textContent = "";
            document.getElementById("error-ngaynhan").textContent = "";
        }
    });
});

// kết thúc kiểm tra
document.addEventListener("DOMContentLoaded", function () {
    let timeSelect = document.getElementById("timeSelect");
    let oneHourSection = document.getElementById("oneHour");
    let onePointFiveHourSection = document.getElementById("onePointFiveHour");

    function updateSelection() {
        let selectedValue = timeSelect.value;

        if (selectedValue === "1") {
            onePointFiveHourSection.style.pointerEvents = "none"; // Vô hiệu hóa 1.5 giờ
            onePointFiveHourSection.style.opacity = "0.5"; // Làm mờ

            oneHourSection.style.pointerEvents = "auto"; // Cho phép click 1 giờ
            oneHourSection.style.opacity = "1";
        } else {
            oneHourSection.style.pointerEvents = "none"; // Vô hiệu hóa 1 giờ
            oneHourSection.style.opacity = "0.5";

            onePointFiveHourSection.style.pointerEvents = "auto"; // Cho phép click 1.5 giờ
            onePointFiveHourSection.style.opacity = "1";
        }
    }

    timeSelect.addEventListener("change", updateSelection);
    updateSelection(); // Chạy ngay khi tải trang để cập nhật trạng thái ban đầu
});
