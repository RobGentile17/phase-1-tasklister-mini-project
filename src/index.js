document.addEventListener("DOMContentLoaded", () => { 
  let form = document.querySelector("#create-task-form")
  let newTask = document.querySelector("#new-task-description")

  const addNewItem = (event) => { 
    event.preventDefault()
    let element = document.createElement('li')
    let list = document.querySelector('#tasks') 
    list.append(element)
    element.innerText = newTask.value 
 }
 form.addEventListener("submit" , addNewItem)

});
