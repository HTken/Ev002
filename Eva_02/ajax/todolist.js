$(document).ready(()=>{
    $("#todo-form").submit((event)=>{
        const texto = $("#todo-input").val();

        $("#todo-list").append(`
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span class="todo-text">${texto}</span>
                <div>
                    <button class="btn btn-success btn-sm float-end edit-btn">Completar</button>
                    <button class="btn btn-danger btn-sm float-end delete-btn">Eliminar</button>
                </div>
            </li>
        `);

        $("#todo-input").val("");
        event.preventDefault(); 
    })
})