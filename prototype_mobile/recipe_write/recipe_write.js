import all_mighty_editor from "../module/all_mighty_editor.js";

const {
  multiAndSingleTagMaker,
  positionEditor,
  fontAndLayoutEditor,
  kingGodFlexEditor,
  allMightyStyleEditor,
} = all_mighty_editor;

//* div#main
const main = multiAndSingleTagMaker(root, "div", "main", 1, (ele) => {
  ele.textContent = "";
});

//* main#form
const mainForm = multiAndSingleTagMaker(main, "form", "main-form");
mainForm.method = "post";
mainForm.action = "result";
// const input = multiAndSingleTagMaker(main, "input", "inputAuto", 1, (ele) => {
//   ele.typeContent = "text";
// });
// input.placeholder = "재료를 입력"; // input의 예시 텍스트

//? 레시피 제목 라벨 + 인풋 래핑
const mainTitleLabelInputWrap = multiAndSingleTagMaker(mainForm, "div");

//* 레시피 제목 라벨
const mainTitleLabel = multiAndSingleTagMaker(
  mainTitleLabelInputWrap,
  "label",
  "main-title-label",
  1,
  (ele) => {
    ele.textContent = "요리 제목";
  }
);

//* 레시피 제목 인풋
const mainTitleInput = multiAndSingleTagMaker(
  mainTitleLabelInputWrap,
  "input",
  "main-title-input",
  1,
  (ele) => {}
);
mainTitleInput.placeholder = "요리 제목";

//? 레시피 재료래핑 + 레시피 사진래핑 컨테이너
const ingredientsImageContainer = multiAndSingleTagMaker(mainForm, "div");
ingredientsImageContainer.textContent = "";
kingGodFlexEditor(ingredientsImageContainer, "row", "", "space-around");

//* 레시피 재료 래핑
const registIngredientsWrap = multiAndSingleTagMaker(
  ingredientsImageContainer,
  "div"
);

//* 레시피 재료
const registIngredients = multiAndSingleTagMaker(
  registIngredientsWrap,
  "label",
  "main-ingredients-label",
  1,
  (ele) => {
    ele.textContent = "레시피 재료";
  }
);

//* 레시피 사진 래핑
const registImageWrap = multiAndSingleTagMaker(
  ingredientsImageContainer,
  "div"
);

//* 레시피 사진
const registImage = multiAndSingleTagMaker(
  registImageWrap,
  "label",
  "main-image-label",
  1,
  (ele) => {
    ele.textContent = "레시피 사진";
  }
);

//? 조리순서 container
const registStepContainer = multiAndSingleTagMaker(
  mainForm,
  "div",
  "regist-step-container",
  1,
  (ele) => {
    ele.textContent = "조리 순서";
  }
);
//* 조리 순서 wrap
const registStepWrap = multiAndSingleTagMaker(
  registStepContainer,
  "div",
  "main-step-wrap",
  1,
  (ele) => {
    ele.textContent = "";
  }
);
kingGodFlexEditor(registStepWrap, "row", "", "space-between");

//* 조리순서div-num
const registStepNum = multiAndSingleTagMaker(
  registStepWrap,
  "p",
  "",
  1,
  (ele) => {
    ele.textContent = "1"; // 자동생성되어야 함
  }
);

//* 조리순서div-content
const registStepContent = multiAndSingleTagMaker(
  registStepWrap,
  "textarea",
  "",
  1,
  (ele) => {
    ele.value =
      "요리내용 로렘로렘 로렘로렘 로렘로렘 로렘로렘 로렘로렘 로렘로렘 로렘로렘 로렘로렘 로렘로렘 로렘로렘 로렘로렘 ";
  }
);
fontAndLayoutEditor(registStepContent, "70%");

//* 조리순서div-img
const registStepImg = multiAndSingleTagMaker(
  registStepWrap,
  "img",
  "",
  1,
  (ele) => {}
);
fontAndLayoutEditor(registStepImg, "30vw", "25vw");
registStepImg.src =
  "http://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png";
console.dir(registStepImg);
//? 조리순서 container 끝

//* 등록 버튼
const submitBtn = multiAndSingleTagMaker(
  mainForm,
  "input",
  "input-submit",
  1,
  (ele) => {
    ele.type = "submit";
    ele.value = "등록";
  }
);

//*
//*
