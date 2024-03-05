function saveItem() {
  let data = {
    new: "data",
  };
  let newdata = JSON.stringify(data);
  console.log(newdata);
  localStorage.setItem("myCat", newdata);
}
function getItem() {
  const cat = localStorage.getItem("myCat");
  let data = (document.getElementById("data").innerHTML = cat);
}
function removeItem() {
  localStorage.removeItem("myCat");
}
function clear() {
  localStorage.clear();
}
