function formSubmit(){
  let inputDate = document.querySelector(".inputDate");
  let outputDate = document.querySelector(".outputDate");
  console.log("inputDate = ",typeof inputDate.value);  // string --- date (en_US)

  let formatedDate = new Date(inputDate.value).toLocaleDateString("en-US");
  outputDate.value = formatedDate;
  console.log("formSubmit = ", formatedDate);
}