const taskInput = document.getElementById('taskInput')
const addTaskButton = document.getElementById('addTaskButton')
const taskList = document.getElementById('taskList')

function addTask(){
    let taskText = taskInput.value
    if (taskText=="") return
    const listItem = document.createElement("li")
    listItem.className="task"
    const taskSpan = document.createElement("span")
    taskSpan.textContent = taskText
    const deleteButton = document.createElement("button")
    deleteButton.className = 'deleteButton';
    deleteButton.textContent = 'Delete'


    listItem.appendChild(taskSpan)
    listItem.appendChild(deleteButton)

    taskList.appendChild(listItem)

    taskInput.value = ""

    //3 html attribute, document.getelemenetbyid.onlciky = () addeventlistener
    deleteButton.addEventListener('click',(event)=>{      
        const listItem = event.target.parentElement
        listItem.remove()    
        
    })

  

}
taskInput.addEventListener('keypress',(event)=>{
    if(event.key=='Enter'){
        addTask()
    };
    
})



