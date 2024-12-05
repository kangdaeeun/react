import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const queryClient = useQueryClient();
  const [todoItem, setTodoItem] = useState("");

  const fetchTodos = async () => {
    const response = await axios.get("http://localhost:4000/todos");
    return response.data;
  };

  const addTodo = async (newTodo) => {
    await axios.post("http://localhost:4000/todos", newTodo);
  };

  const {
    data: todos,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  const { mutate } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      // alert("데이터 삽입이 성공했습니다.");
      // 데이터를 캐싱하는 기준은 쿼리키가 된다. ["todos"] 즉, 이 부분이 바로 리렌더링해주는 부분
      queryClient.invalidateQueries(["todos"]);
    },
  });

  if (isPending) {
    return <div>로딩중입니다...</div>;
  }

  if (isError) {
    return <div>데이터 조회 중 오류가 발생했습니다.</div>;
  }

  return (
    <div>
      <h3>Tanstack Query</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newTodoObj = { title: todoItem, isDone: false };
          // useMutation 로직 필요
          mutate(newTodoObj);
        }}
      >
        <input
          type="text"
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
        />
        <button>추가</button>
      </form>
      <ul>
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: "aliceblue",
              }}
            >
              <h4>{todo.title}</h4>
              <p>{todo.isDone ? "Done" : "Not Done"}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
