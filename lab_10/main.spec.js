import { describe, it } from "vitest"
import "./main.js"

describe('addTask', () => {
    it('debería agregar una tarea a la lista de tareas', () => {
        inputResponse.value = 'Tarea 1';

        addTask();

        expect(toDoList.children.length).toBe(1);

        expect(toDoList.children[0].textContent).toBe('Tarea 1');
    });
});