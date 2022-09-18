import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";

const getDataFromLs = () => {
  const data = localStorage.getItem("todos");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const OrderList = () => {
  const categories = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  const [todoInputValue, setTodoInputValue] = useState("");
  const [todoInputValue2, setTodoInputValue2] = useState("");
  const [dateInputValue, setDateInputValue] = useState("");
  const [categorySelectValue, setCategorySelectValue] = useState(categories[0]);

  const [todos, setTodos] = useState([getDataFromLs()]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log(todos);
  }, [todos]);

  return (
    <>
      <form
      style={{width:'500px'}}
        onSubmit={(event) => {
          event.preventDefault();
          setTodos([
            ...todos,
            {
              name: todoInputValue,
              name2: todoInputValue2,
              id: nanoid(),
              isChecked: false,
              deadline: dateInputValue,
              category: categorySelectValue,
              sorting: 0
            }
          ]);
          setTodoInputValue("");
          setDateInputValue("");
        }}
      >
        <input
          required
          type="text"
          value={todoInputValue}
          onChange={(event) => {
            setTodoInputValue(event.target.value);
          }}
        />
        <input
          required
          type="text"
          value={todoInputValue2}
          onChange={(event) => {
            setTodoInputValue2(event.target.value);
          }}
        />
        <select style={{display:'flex', flexDirection:'column'}}
          value={categorySelectValue}
          onChange={(event) => {
            setCategorySelectValue(event.target.value);
          }}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button type="submit">submit</button>
        {/* top form end */}
      </form>
      {categories.map((category) => {
        const categoryTodos = todos
          .filter((todo) => todo.category === category)
          .sort((a, b) => {
            //return a.sorting - b.sorting;
            if (a.sorting > b.sorting) {
              return -1;
            }
            if (a.sorting < b.sorting) {
              return 1;
            }
            // a must be equal to b
            return 0;
          });
        return (
          <div style={{display:'flex', flexDirection:'column'}} key={category}>
            <h2>{category}</h2>

            <ul>
              {categoryTodos.map((todo) => {
                return (
                  <b key={todo.id} style={{ textDecoration: "none" }}>
                    <p
                      type="checkbox"
                      checked={todo.isChecked}
                      onChange={(event) => {
                        setTodos(
                          todos.map((todo_) =>
                            todo_.id === todo.id
                              ? { ...todo_, isChecked: event.target.checked }
                              : todo_
                          )
                        );
                      }}
                    ></p>
                    <span>
                      {todo.name} {todo.name2}
                    </span>
                    {todo.deadline && <span>{todo.deadline}</span>}
                    <button
                      type="button"
                      onClick={() => {
                        setTodos(todos.filter((todo_) => todo_.id !== todo.id));
                      }}
                    >
                      delete
                    </button>
                  </b>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default OrderList;