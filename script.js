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
  e.preventDefault();
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

const opacity_range = document.getElementById("opacityControl");
const grayscale_range = document.getElementById("grayscaleControl");
const brightness_range = document.getElementById("brightnessControl");
const contrast_range = document.getElementById("contrastControl");
const saturate_range = document.getElementById("saturateControl");

const setEffects = () => {
  image.style.filter = `opacity(${opacity_range.value}%) 
  brightness(${+brightness_range.value + 100}%) 
  grayscale(${grayscale_range.value}%) 
  saturate(${+saturate_range.value + 100}%)
  contrast(${+contrast_range.value + 100}%)`;

  console.log(image.style.filter);
};

opacity_range.onchange = () => {
  setEffects();
};
brightness_range.onchange = () => {
  setEffects();
};
grayscale_range.onchange = () => {
  setEffects();
};
contrast_range.onchange = () => {
  setEffects();
};
saturate_range.onchange = () => {
  setEffects();
};
