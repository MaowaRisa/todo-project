import { useAppSelector } from "@/redux/hook";
import AddModal from "./AddModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";


const TodoContainer = () => {
  const {todos} = useAppSelector((state) => state.todos)
  return (
    <div>
      <div className="flex justify-between mb-4">
        <AddModal></AddModal>
        <TodoFilter></TodoFilter>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-md p-[5px]">
        <div className="bg-white w-full h-full rounded-lg space-y-2 p-5">
          {/* <div className="bg-white flex justify-center items-center rounded-md p-5 text-2xl font-bold">
                    <p>There is no task pending</p>
                </div> */}
          {/* <TodoCard></TodoCard>
          <TodoCard></TodoCard> */}
          {
            todos.map((item) => <TodoCard key={item.id} {...item}/>)
          }
          
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
