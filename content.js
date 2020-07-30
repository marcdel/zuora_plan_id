function addRatePlanIdToPage(ratePlanId) {
  // 1. Create the element
  const idElement = document.createElement("p")
  idElement.innerHTML = `(${ratePlanId})`
  idElement.classList.add("rateplan_id")
  idElement.classList.add("ico_open")
  idElement.classList.add("left")

  // 2. Place next to title
  const title = getRatePlanTitleElem()
  title.parentNode.appendChild(idElement)
}

function getRatePlanId() {
  var elementNearestTheIdDiv = document.querySelector(".rateplan_thumbnail");
  return elementNearestTheIdDiv.parentElement.id
}

function getRatePlanTitleElem() {
  return document.querySelector(".rateplan_title")
}

(function () {
  const ratePlanId = getRatePlanId()
  addRatePlanIdToPage(ratePlanId)
})()
