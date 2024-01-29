function agregarTarea() {
    var input = document.getElementById("newTask");
    var taskText = input.value.trim();

    if (taskText !== "") {
        var ul = document.getElementById("taskList");
        var li = document.createElement("li");
        li.innerHTML = `
            <input type="checkbox" onclick="marcarComoCompletada(this)">
            <span>${taskText}</span>
            <button onclick="eliminarTarea(this)">Eliminar</button>
        `;
        ul.appendChild(li);
        input.value = "";
    }
}

function marcarComoCompletada(checkbox) {
    var taskText = checkbox.nextElementSibling;
    if (checkbox.checked) {
        taskText.style.textDecoration = "line-through";
    } else {
        taskText.style.textDecoration = "none";
    }
}

function eliminarTarea(button) {
    var li = button.parentElement;
    li.remove();
}