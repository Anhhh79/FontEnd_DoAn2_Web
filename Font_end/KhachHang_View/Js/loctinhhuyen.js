const districtsData = {
    cantho: [
        { value: "ninhkieu", text: "Ninh Kiều" },
        { value: "binhthuy", text: "Bình Thủy" },
        { value: "omonk", text: "Ô Môn" }
    ],
    hanoi: [
        { value: "badinh", text: "Ba Đình" },
        { value: "hoankiem", text: "Hoàn Kiếm" },
        { value: "dongda", text: "Đống Đa" }
    ],
    hcm: [
        { value: "quan1", text: "Quận 1" },
        { value: "quan2", text: "Quận 2" },
        { value: "quan3", text: "Quận 3" }
    ]
};

document.getElementById("province").addEventListener("change", function () {
    const selectedProvince = this.value;
    const districtSelect = document.getElementById("district");

    districtSelect.innerHTML = '<option value="">Chọn quận/huyện</option>';

    if (districtsData[selectedProvince]) {
        districtsData[selectedProvince].forEach(district => {
            let option = document.createElement("option");
            option.value = district.value;
            option.textContent = district.text;
            districtSelect.appendChild(option);
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("timkiem"); // Ô input
    const text = "Tìm sân thể thao"; // Văn bản hiệu ứng
    let index = 0;
    let typingTimeout;
    let isTyping = true; // Kiểm soát trạng thái hiệu ứng

    function typeEffect() {
        if (!isTyping) return; // Nếu đang nhập liệu, dừng hiệu ứng

        if (index < text.length) {
            searchInput.setAttribute("placeholder", text.substring(0, index + 1)); // Hiển thị từng ký tự
            index++;
            typingTimeout = setTimeout(typeEffect, 200);
        } else {
            setTimeout(() => {
                searchInput.setAttribute("placeholder", ""); // Xóa văn bản sau 2s
                index = 0;
                typeEffect(); // Lặp lại hiệu ứng
            }, 2000);
        }
    }

    function startTypingEffect() {
        isTyping = true;
        index = 0;
        typeEffect();
    }

    function stopTypingEffect() {
        isTyping = false;
        clearTimeout(typingTimeout);
        searchInput.setAttribute("placeholder", ""); // Xóa placeholder khi nhập dữ liệu
    }

    // Bắt đầu hiệu ứng khi tải trang
    startTypingEffect();

    // Lắng nghe sự kiện nhập vào ô tìm kiếm
    searchInput.addEventListener("input", function () {
        if (this.value.trim() !== "") {
            stopTypingEffect();
        } else {
            startTypingEffect(); // Khi xóa hết nội dung, chạy lại hiệu ứng
        }
    });
});

