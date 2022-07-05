const form = document.forms.form;
const input = form.elements.task;
const list = document.querySelector(".todo-list");
const summary = document.querySelector(".summary");
const filter = document.getElementById("filter");

let todos = [];

const data = localStorage.getItem("todos");

if (data) todos = JSON.parse(data);

// content, isCompleted, id

function e(tagName, attributes, ...child) {
    const tag = document.createElement(tagName);
    Object.assign(tag, attributes);
    tag.append(...child);

    return tag;
}

function createTask(task) {
    const div = e(
        "div",
        { className: "task" },
        e("input", {
            type: "checkbox",
            checked: task.isCompleted,
            onchange: function () {
                task.isCompleted = !task.isCompleted;

                renderSummary();
                updateLocal();
            },
        }),
        e("div", { className: "task-content" }, task.content),
        e(
            "button",
            {
                className: "btn-delete",
                onclick: function () {
                    if (!confirm("Are you sure?")) return;

                    div.remove();

                    const index = todos.indexOf(task);

                    todos.splice(index, 1);
                    renderSummary();
                    updateLocal();
                },
            },
            "Xóa"
        )
    );

    return div;
}

function createSummary() {
    const pending = todos.filter(function (task) {
        return !task.isCompleted;
    }).length;

    if (pending > 0) {
        return e(
            "div",
            {},
            e(
                "div",
                { className: "pending" },
                `You have ${pending} pending tasks`
            ),
            e(
                "button",
                {
                    className: "btn-clear",
                    onclick: function () {
                        if (!confirm("Are you sure?")) return;

                        todos.length = 0;

                        list.innerHTML = "";

                        renderSummary();
                        updateLocal();
                    },
                },
                "Clear all"
            )
        );
    } else {
        return e("div", {}, "All done :) Good chóp");
    }
}

function renderSummary() {
    summary.innerHTML = "";
    summary.append(createSummary());
}

function renderTask(task) {
    const div = createTask(task);
    list.prepend(div);
}

function renderList(todos) {
    list.innerHTML = "";

    for (let task of todos) {
        renderTask(task);
    }
}

renderList(todos);

// submit form => thêm vào todo => hiển thị ra danh sách
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const content = input.value.trim();

    if (content === "") return;

    const newTask = {
        content,
        isCompleted: false,
        id: Math.floor(Math.random() * 16777215),
    };

    todos.push(newTask);

    input.value = "";

    renderTask(newTask);
    renderSummary();
    updateLocal();
});

// Xóa 1 todo

// Xóa tất cả
renderSummary();
// Cập nhật số lượng công việc

// Lưu lại công việc => cho phép reload trang
// chức năng lọc

filter.addEventListener("change", function () {
    const option = filter.value;

    switch (option) {
        case "completed":
            renderList(
                todos.filter(function (task) {
                    return task.isCompleted;
                })
            );
            break;

        case "uncompleted":
            renderList(
                todos.filter(function (task) {
                    return !task.isCompleted;
                })
            );
            break;

        default:
            renderList(todos);
    }
});

function updateLocal() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
