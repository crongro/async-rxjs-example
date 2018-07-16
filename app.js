import { Todo } from "./todo.js";

// 초기 데이터 가져오기
document.addEventListener('DOMContentLoaded', () => {
    const todo = new Todo();
    todo.initializeService();
});