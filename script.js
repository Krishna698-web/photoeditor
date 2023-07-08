const input_file = document.getElementById("input_file");
const image = document.getElementById("image");
const download_image = document.getElementById("download_image");

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// Assign the loaded Image from input file
input_file.addEventListener("change", (e) => {
  image.src = URL.createObjectURL(e.target.files[0]);

  image.onload = () => {
    // canvas.height = this.height;
    // canvas.width = this.width;
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

const setFilters = () => {
  context.filter = `opacity(${opacity_range.value}%) 
  brightness(${+brightness_range.value + 100}%) 
  grayscale(${grayscale_range.value}%) 
  saturate(${+saturate_range.value + 100}%)
  sepia(${tone_range.value}%)
  contrast(${+contrast_range.value + 100}%)`;

  context.drawImage(image, 0, 0);
};

opacity_range.oninput = () => {
  setFilters();
};
brightness_range.oninput = () => {
  setFilters();
};
grayscale_range.oninput = () => {
  setFilters();
};
contrast_range.oninput = () => {
  setFilters();
};
saturate_range.oninput = () => {
  setFilters();
};
tone_range.oninput = () => {
  setFilters();
};

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
