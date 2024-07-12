
    function saoChepVanBan() {
      // Lấy phần tử chứa văn bản cần sao chép
      var vanBanCanSaoChen = document.getElementById("saochep");

      // Tạo một phần tử textarea tạm thời
      var inputTam = document.createElement("textarea");
      inputTam.value = vanBanCanSaoChen.innerText;
      document.body.appendChild(inputTam);

      // Chọn và sao chép văn bản
      inputTam.select();
      document.execCommand("copy");

      // Xóa phần tử textarea tạm thời
      document.body.removeChild(inputTam);
       // Hiển thị thông báo
      var thongBao = document.getElementById("thong-bao");
      thongBao.style.display = "block";
      setTimeout(function() {
        thongBao.style.display = "none";
      }, 1000);
     }
