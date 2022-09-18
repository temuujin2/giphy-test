import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

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
    "Saturday"
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
      style={{width:'500px', display:'flex',flexDirection:'column', alignItems:'center'}}
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
          placeholder="Захиалгын хаяг"
          value={todoInputValue}
          onChange={(event) => {
            setTodoInputValue(event.target.value);
          }}
        />
        <input
          required
          type="phone"
          placeholder="Утасны дугаар"
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
        <button style={{width:'100px', padding:'5px', marginTop:'10px'}} type="submit">Оруулах</button>

      </form>
      <Grid
                    container
                    spacing={5}
                    sx={{
                        marginTop: '10px',
                        '--Grid-borderWidth': '1px',
                        borderTop: 'var(--Grid-borderWidth) solid',
                        borderLeft: 'var(--Grid-borderWidth) solid',
                        borderColor: 'divider',
                        '& > div': {
                            borderRight: 'var(--Grid-borderWidth) solid',
                            borderBottom: 'var(--Grid-borderWidth) solid',
                            borderColor: 'divider',
                        },
                    }}
                >
      {categories.map((category) => {
        const categoryTodos = todos
          .filter((todo) => todo.category === category)
          .sort((a, b) => {

            if (a.sorting > b.sorting) {
              return -1;
            }
            if (a.sorting < b.sorting) {
              return 1;
            }
            return 0;
          });
        return (
            <Grid key={category} {...{ xs: 12, sm: 6, md: 4, lg: 2 }} minHeight={400} width={"100vw"} backgroundColor="#F5F5F7">
            <Box sx={{ width: '100%', height: '40px', background: 'white', padding: '10px 0 0 15px' }}>{category}</Box>

            <ul >
              {categoryTodos.map((todo) => {
                return (
                  <Box key={todo.id} style={{ textDecoration: "none", display:'flex', flexDirection:'column',
                  border:'1px solid black', width:'90%' }}>
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
                    <span >
                      {todo.name}
                    </span>
                    <span>
                    {todo.name2}
                    </span>
                    {todo.deadline && <span>{todo.deadline}</span>}
                    <Button
                      type="button"
                      onClick={() => {
                        setTodos(todos.filter((todo_) => todo_.id !== todo.id));
                      }}
                    >
                      delete
                    </Button>
                  </Box>
                );
              })}
            </ul>
          </Grid>
        );
      })}
      </Grid>
    </>
  );
};

export default OrderList;