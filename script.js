const input_file = document.getElementById("input_file");
const image = document.getElementById("image");
const download_image = document.getElementById("download_image");
const reset_image = document.getElementById("reset_image");

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// Assign the loaded Image from input file
input_file.addEventListener("change", (e) => {
  image.src = URL.createObjectURL(e.target.files[0]);

  image.onload = () => {
    canvas.crossOrigin = "anonymous";
    setFilters();
  };
  console.log(image.src);
});

// Slider Ranging
const opacity_range = document.getElementById("opacityControl");
const grayscale_range = document.getElementById("grayscaleControl");
const brightness_range = document.getElementById("brightnessControl");
const contrast_range = document.getElementById("contrastControl");
const saturate_range = document.getElementById("saturateControl");
const tone_range = document.getElementById("toneControl");

const opacityVal = document.getElementById("opacity_val");
const brightnessVal = document.getElementById("brightness_val");
const grayscaleVal = document.getElementById("grayscale_val");
const contrastVal = document.getElementById("contrast_val");
const saturateVal = document.getElementById("saturate_val");
const toneVal = document.getElementById("tone_val");

const setFilters = () => {
  context.filter = `opacity(${opacity_range.value}%)
  brightness(${+brightness_range.value + 100}%)
  grayscale(${grayscale_range.value}%)
  saturate(${+saturate_range.value + 100}%)
  sepia(${tone_range.value}%)
  contrast(${+contrast_range.value + 100}%)`;

  context.drawImage(image, 0, 0, 300, 550);
};

const setOpacity = () => {
  context.filter = `opacity(${opacity_range.value / 10}%)`;
  context.drawImage(image, 0, 0, 300, 550);
};

opacity_range.oninput = () => {
  opacityVal.innerHTML = opacity_range.value;
  setFilters();
};

brightness_range.oninput = () => {
  brightnessVal.innerHTML = brightness_range.value;
  setFilters();
};

grayscale_range.oninput = () => {
  grayscaleVal.innerHTML = grayscale_range.value;
  setFilters();
};

contrast_range.oninput = () => {
  contrastVal.innerHTML = contrast_range.value;
  setFilters();
};

saturate_range.oninput = () => {
  saturateVal.innerHTML = saturate_range.value;
  setFilters();
};

tone_range.oninput = () => {
  toneVal.innerHTML = tone_range.value;
  setFilters();
};

download_image.addEventListener("click", (e) => {
  download_image.setAttribute("download", "edited_image.png");

  let canvasData = canvas.toDataURL("image/png");
  canvasData.replace("image/png", "image/octet-stream");
  if (canvasData) {
    download_image.setAttribute("href", canvasData);
  }
  download_image.click();
});

reset_image.addEventListener("click", (e) => {
  e.preventDefault();
  opacity_range.value = 100 + "%";
  brightness_range.value = 100 + "%";
  grayscale_range.value = 0 + "%";
  saturate_range.value = 0 + "%";
  tone_range.value = 0 + "%";
  contrast_range.value = 100 + "%";

  saturateVal.innerHTML = saturate_range.value;
  contrastVal.innerHTML = contrast_range.value;
  grayscaleVal.innerHTML = grayscale_range.value;
  brightnessVal.innerHTML = brightness_range.value;
  opacityVal.innerHTML = opacity_range.value;
  toneVal.innerHTML = tone_range.value;

  context.filter = `opacity(${opacity_range.value}%)
  brightness(${brightness_range.value}%)
  grayscale(${grayscale_range.value}%)
  saturate(${saturate_range.value}%)
  sepia(${tone_range.value}%)
  contrast(${contrast_range.value}%)`;

  context.drawImage(image, 0, 0, 300, 550);
});
