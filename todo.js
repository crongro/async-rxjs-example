import { $ } from "./util.js";

class Todo {
    constructor() {
        this.todos = [];
    }

    initializeService() {
        const {listData$} = this.getObservables();
        listData$.subscribe(data => this.render(data));
    }

    getObservables() {
        const listBtn$ = this.getTodoBtnObservable();
        const listData$ = this.getTodoListDataObservable(listBtn$);
        return {listData$}
    }

    getTodoBtnObservable() {
    }

    getTodoListDataObservable(listBtn$) {
    }

    getTodoItemObject(value) {
    }

    render(data) {
        const target = document.querySelector(".todolist");
        const listTitle = document.querySelector(".logBox h4");
        const listBtn = document.querySelector(".listBtn");

        const htmls = data.reduce( (html,item) => {
            return html + `<li>${item.name}</li>`
        }, "")
        target.innerHTML = htmls;

        listTitle.style.display = "block";
        listBtn.style.display = "none";
        
        this.todos = data;
    }
}

export { Todo }