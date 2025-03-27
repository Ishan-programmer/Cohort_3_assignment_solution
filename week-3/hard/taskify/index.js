let addBtn = document.querySelectorAll(".add-task")

addBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        let input = prompt("Enter the task")
        if (input) {
            let parentBox = btn.parentElement.id;
            let parentId = parentBox.slice(0, -3) + "Task";

            let newTask = document.createElement("div")
            newTask.innerHTML = input
            newTask.setAttribute("draggable", "true");
            newTask.classList.add("drggable")

            newTask.addEventListener("dragstart", () => {
                newTask.classList.add("dragging");
            });

            newTask.addEventListener("dragend", () => {
                newTask.classList.remove("dragging");
            });

            document.getElementById(parentId).appendChild(newTask);
        }
    })
});

const containers = document.querySelectorAll(".container");
containers.forEach((container) => {
    container.addEventListener("dragover", (e) => {
        e.preventDefault();
        const afterElement = getDragAfterElement(container, e.clientY);
        const draggable = document.querySelector(".dragging");
        if (afterElement == null) {
            container.appendChild(draggable);
        } else {
            container.insertBefore(draggable, afterElement);
        }
    });
});

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll(".draggable:not(.dragging)")];

    return draggableElements.reduce(
        (closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        },
        { offset: Number.NEGATIVE_INFINITY }
    ).element;
}


