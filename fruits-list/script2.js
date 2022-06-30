const todos = [
    {
        id: 1,
        completed: true,
        content: "Learning HTML"
    },
    {
        id: 2,
        completed: true,
        content: "Learning CSS"
    },
    {
        id: 3,
        completed: false,
        content: "Learning JavaScript"
    }
];


// ham e tao nhanh cac the
function e(tagName, attributes, ...child) {
    const tag = document.createElement(tagName);
    Object.assign(tag, attributes);
    tag.append(...child);

    return tag;
};

function createTodoList(todos) {
    const list = e("ul", { className: "todo-list" });

    for (let task of todos) {
        let item;
        
        if (task.completed) {
            item = e("li", { className: "completed" }, task.content)
        } else {
            item = e(
                "li", 
                { className: "uncompleted" }, 
                task.content,
                e("button", { className: "btn-done" }, "Done")
            );
        }

        // them vao the ul tung cai li
        list.append(item);
    }
    return list;
}

app.append(createTodoList(todos));