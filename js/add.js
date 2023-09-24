export function addTask() {
    let showTask;

        localStorage.setItem(task, document.getElementById("writeTask").value);

        showTask = localStorage.getItem(task);
        document.getElementById("taskList").innerHTML = showTask;  
}