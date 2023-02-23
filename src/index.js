import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  
  const div = document.createElement("div");
  div.className = "list-row";
  
  const li = documet.createElement("li");
  
  li.innerText = inputText;
  console.log(li);
  
  
  // alert(inputText);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
