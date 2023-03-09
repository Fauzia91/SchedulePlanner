$(function () {
  let currentTime = dayjs().format("hA");
  //console.log("currentTime:", currentTime)

  let currentDate = dayjs().format("MM/DD/YY");
  document.querySelector("#date").textContent = currentDate 
  console.log(currentDate)

  

  let allHoursArr = document.querySelectorAll(".time-block");
  //console.log("allHours:",allHoursArr);
  //[9amEl,10am,]
  //past, present, future
  let currentHourFound = false;
  allHoursArr.forEach( function(row){

    let rowId = row.getAttribute("id");

    //add localstrorage data
    //#hour-12pm textarea
    let textareaData = "";
    if(localStorage.getItem(rowId) != null){
      textareaData = localStorage.getItem(rowId);
    }

    
  

    let targetTextarea = document.querySelector("#"+rowId + " textarea")
    targetTextarea.value = textareaData;

    let getHour = rowId.split("-")[1];
    console.log("getId", getHour)
    //12PM -- hour-12PM
    if(currentTime == getHour){
      row.classList.add("present");
      currentHourFound = true;
      //moving forward eveyrthing is future
    } else if(currentHourFound == true){
      row.classList.add("future");
    } else {
      row.classList.add("past");
    }
  })


  let allSaveBtn = document.querySelectorAll('.saveBtn');
  allSaveBtn.forEach(function(btn){
    btn.addEventListener("click", function(e){
      console.log("click",e.target.parentNode.getAttribute("id"))
      let parentId = e.target.parentNode.getAttribute("id");
      let targetTextarea = document.querySelector("#" + parentId + " textarea")
      localStorage.setItem(parentId,targetTextarea.value)

    })

    

  })


 


});
let currentTime = dayjs().format("hA");
  //console.log("currentTime:", currentTime)

  let currentDate = dayjs().format("MM/DD/YY");
  document.querySelector("#date").textContent = currentDate 
  console.log(currentDate)
