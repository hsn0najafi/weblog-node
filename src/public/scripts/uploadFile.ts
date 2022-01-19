document.getElementById("imageUpload")!.onclick = function () {
  let xhttp = new XMLHttpRequest();

  const selectedImage: any = document.getElementById("selectedImage")!;
  const imageStatus = document.getElementById("imageStatus")!;
  const progressDiv = document.getElementById("progressDiv")!;
  const progressBar = document.getElementById("progressBar")!;

  xhttp.onreadystatechange = function () {
    copyToClipboard(this.responseText);
  };

  xhttp.open("POST", "/admin/upload-image");

  xhttp.upload.onprogress = function (e) {
    if (e.lengthComputable) {
      let result = Math.floor((e.loaded / e.total) * 100);
      if (result !== 100) {
        progressBar.innerHTML = result + "%";
        progressBar.style.width = result + "%";
      } else {
        progressBar.style.width = "100%";
        progressBar.innerHTML = "تمام شد";
        progressBar.style.display = "flex";
        progressDiv.style.backgroundColor = "green";
      }
    }
  };

  let formData = new FormData();

  if (selectedImage.files.length > 0) {
    progressDiv.style.backgroundColor = "red";
    formData.append("image", selectedImage.files[0]);
    xhttp.send(formData);
  } else {
    imageStatus.innerHTML = "برای آپلود باید عکسی انتخاب کنید";
  }
};

function copyToClipboard(str: string) {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}
