// Layout will not be affected after remove below javascript code

// Handle Image Gallery
const galleryMask = document.querySelector(".gallery-mask");
const maskImage = document.querySelector(".mask-image");
const galleryImgs = document.querySelectorAll(".image-item");

galleryMask.addEventListener("click", () => {
    galleryMask.classList.add("mask-off");
});

galleryImgs.forEach((item) => {
    item.addEventListener("click", () => {
        let styleValue = item.getAttribute("style");
        maskImage.setAttribute(
            "src",
            styleValue.slice(styleValue.indexOf(": url(") + 7, -3)
        );
        galleryMask.classList.remove("mask-off");
    });
});


function myFunction() {
    // 声明变量
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // 循环遍历所有列表项，并隐藏那些与搜索查询不匹配的项
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

// Handle Publish Date
const dateData = document.getElementById("dateData");
const sinceData = document.getElementById("sinceData");
let publishDate = "2022-04-26";

dateData.innerHTML = moment(publishDate).format("LL");
sinceData.innerHTML = moment(publishDate).fromNow();