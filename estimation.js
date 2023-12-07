const inputs = document.querySelectorAll(".left_content .box .input");
inputs.forEach((inpt) => {
  inpt.addEventListener("click", () => {
    inpt.classList.toggle("active");
    inpt.querySelector(".input-sub").classList.toggle("hidden");
  });
});

const arrayValues = Array.from(document.querySelectorAll(".part-2-value"));

// let total = 0;
// function totalFunc() {
//   const totalEle = document.querySelector(".total span");
//   totalEle.textContent = total;
// }
function addValue(dataset) {
  if (dataset == "age") {
    for (let arr of arrayValues) {
      if (arr.dataset.value == "age") {
        if (arr.textContent != "Oui") {
          arr.textContent = "Oui";
          // total += 0;
          // totalFunc();
        }
      }
    }
  } else if (dataset == "identity") {
    for (let arr of arrayValues) {
      if (arr.dataset.value == "identity") {
        if (arr.textContent != "Oui") {
          arr.textContent = "Oui";
          // total += 0;
          // totalFunc();
        }
      }
    }
  } else if (dataset == "motivated") {
    for (let arr of arrayValues) {
      if (arr.dataset.value == "motivated") {
        if (arr.textContent != "Oui") {
          arr.textContent = "Oui";
          // total += 250;
          // totalFunc();
        }
      }
    }
  } else if (dataset == "referral") {
    for (let arr of arrayValues) {
      if (arr.dataset.value == "referral") {
        if (arr.textContent != "Oui") {
          arr.textContent = "Oui";
          // total += 500;
          // totalFunc();
        }
      }
    }
  }
}
function removeValue(dataset) {
  if (dataset == "age") {
    for (let arr of arrayValues) {
      if (arr.dataset.value == "age") {
        if (arr.textContent != "Non") {
          arr.textContent = "Non";
          // total -= 0;
          // totalFunc();
        }
      }
    }
  } else if (dataset == "identity") {
    for (let arr of arrayValues) {
      if (arr.dataset.value == "identity") {
        if (arr.textContent != "Non") {
          arr.textContent = "Non";
          // total -= 0;
          // totalFunc();
        }
      }
    }
  } else if (dataset == "motivated") {
    for (let arr of arrayValues) {
      if (arr.dataset.value == "motivated") {
        if (arr.textContent != "Non") {
          arr.textContent = "Non";
          // total -= 250;
          // totalFunc();
        }
      }
    }
  } else if (dataset == "referral") {
    for (let arr of arrayValues) {
      if (arr.dataset.value == "referral") {
        if (arr.textContent != "Non") {
          arr.textContent = "Non";
          // total -= 500;
          // totalFunc();
        }
      }
    }
  }
}

const options = document.querySelectorAll(".input-sub li");

options.forEach((li) => {
  li.addEventListener("click", () => {
    const value = li.textContent;
    const liParent =
      li.parentElement.parentElement.parentElement.querySelector("h3");
    liParent.textContent = value;

    if (liParent.textContent == "Oui") {
      addValue(liParent.dataset.estimate);
    } else {
      removeValue(liParent.dataset.estimate);
    }
  });
});

const calculateBtn = document.querySelector(".calculate-btn");
const estimateLoader = document.querySelector(".estimate-loader");

// ============POPUP
const popupBackground = document.querySelector(".popup-background");
const popupContainer = document.querySelector(".popup-container");
const popupCloseBtn = document.querySelector(".popup-container button");

calculateBtn.addEventListener("click", () => {
  estimateLoader.classList.add("active");
  setTimeout(() => {
    estimateLoader.classList.remove("active");
    popupBackground.style.display = "flex";
    popupContainer.style.display = "flex";
  }, 1600);
});

const closePopup = () => {
  popupBackground.style.display = "none";
  popupContainer.style.display = "none";
};
popupBackground.addEventListener("click", closePopup);
popupCloseBtn.addEventListener("click", closePopup);
// estimatePopup.addEventListener('click',()=>{
//   console.log('fff');
// })
