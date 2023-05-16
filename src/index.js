document.addEventListener("DOMContentLoaded", function(){
   
    const taskForm = document.querySelector("#create-task-form")
    const taskList = document.querySelector("#tasks")

    taskForm.addEventListener("submit", function(e){
        e.preventDefault()
     
        const newTask = document.querySelector("#new-task-description").value
    
        taskList.innerHTML += `<li> ${newTask} </li>`

        taskForm.reset()
   })
})
