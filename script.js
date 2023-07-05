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
  // e.preventDefault();
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
  span.innerHTML = range.value;
};

// Initial values
let imageFilters = "";

let opacity_val = 0;
let grayscale_val = 0;
let brightness_val = 0;

const genericFilterHandler = (propertyVal) => {
  span.innerHTML = opacity_val;
  range.value = opacity_val;

  const sliced = imageFilters.slice(
    imageFilters.indexOf(propertyVal), //'propertyVal: opacity'
    imageFilters.indexOf(" ")
  );

  // console.log("imageFilters: " + imageFilters);
  range.oninput = () => {
    if (!imageFilters.includes(sliced)) {
      image.style.filter = `${imageFilters} ${propertyVal}(${range.value}%)`;
    } else {
      imageFilters = imageFilters.replace(
        sliced,
        `${propertyVal}(${range.value}%)`
      );
      console.log(imageFilters);
      image.style.filter = imageFilters;
    }

    span.innerHTML = range.value;
    opacity_val = range.value;
  };

  imageFilters = image.style.filter;
  console.log("last/previous image filters: ", imageFilters);
};

opacity.onclick = () => {
  genericFilterHandler("opacity");
};

grayscale.onclick = () => {
  genericFilterHandler("grayscale");
};

brightness.onclick = () => {
  genericFilterHandler("brightness");
};

// grayscale.onclick = () => {
//   span.innerHTML = grayscale_val;
//   range.value = grayscale_val;

//   range.oninput = () => {
//     image.style.filter = `${imageFilters} grayscale(${range.value}%)`;
//     span.innerHTML = range.value;
//     grayscale_val = range.value;
//   };

//   imageFilters = image.style.filter;
//   // console.log("grayscale: " + imageFilters);
// };

// brightness.onclick = () => {
//   span.innerHTML = brightness_val;
//   range.value = brightness_val;

//   range.oninput = () => {
//     image.style.filter = `${imageFilters} brightness(${+range.value + 100}%)`;
//     span.innerHTML = range.value;
//     brightness_val = range.value;
//   };

//   imageFilters = image.style.filter;
//   // console.log("brightness: " + imageFilters);
//   // console.log("brightness: " + image.style.filter);
// };

const showButton = document.getElementById("show");
showButton.onclick = () => {
  // console.log(imageFilters);
  const sliced = imageFilters.slice(
    imageFilters.indexOf("opacity"),
    imageFilters.indexOf(" ")
  );
  console.log(sliced);
  // const replaced = imageFilters.replace(sliced, "new value");
  // console.log(replaced);
  console.log(imageFilters);
  // console.log("showing:" + imageFilters.replace('opacity'.slice(0)));
};
