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
    const textElement = document.querySelector(".search-text");
    const text = "Tìm sân thể thao";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 200); // Hiển thị từng ký tự mỗi 200ms
        } else {
            setTimeout(() => {
                textElement.textContent = "";
                index = 0;
                typeEffect(); // Lặp lại hiệu ứng
            }, 2000); // Đợi 2 giây trước khi chạy lại từ đầu
        }
    }

    typeEffect(); // Bắt đầu hiệu ứng
});
