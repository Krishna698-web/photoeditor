const input_file = document.getElementById("input_file");

const image_div = document.getElementById("image_container");
const image = document.getElementById("image");

const image_downloader = document.getElementById("image_downloader");
const download_image = document.getElementById("download_image");

input_file.addEventListener("change", () => {
  let image_file = input_file.files[0];
  image.src = URL.createObjectURL(image_file);
  //   console.log(image.src);
});

download_image.addEventListener("click", (e) => {
  //   e.preventDefault();
  if (download_image.href === "") {
    console.log("Upload an image");
  } else {
    download_image.href = URL.createObjectURL(input_file.files[0]);
    download_image.download = "image";
  }

  console.log(download_image.href);
});

// Slider Ranging
const range = document.getElementById("range");
const inputRange = document.getElementById("inputRange");
const span = document.getElementById("span");
const opacity = document.getElementById("opacity");
const grayscale = document.getElementById("grayscale");
const brightness = document.getElementById("brightness");

range.oninput = () => {
  span.innerHTML = range.value + " %";
  inputRange.value = range.value;
  // image.style.height = `${range.value * 10}px`;
};

inputRange.oninput = () => {
  range.value = inputRange.value;
};

let imageFilters = " ";
opacity.onclick = () => {
  range.value = 0;
  range.oninput = () => {
    image.style.filter = `opacity(${range.value}%)`;
    // console.log(image.style.filter);
  };
  imageFilters += image.style.filter;
  // console.log(imageFilters);
};

grayscale.onclick = () => {
  range.value = 0;
  range.oninput = () => {
    image.style.filter = `grayscale(${range.value}%)`;
    // console.log(image.style.filter);
  };
  imageFilters += image.style.filter;
  // console.log(imageFilters);
};

brightness.onclick = () => {
  range.value = 0;
  range.oninput = () => {
    image.style.filter = `brightness(${range.value}%)`;
    // console.log(image.style.filter);
  };
  imageFilters += image.style.filter;
  // console.log(imageFilters);
};
