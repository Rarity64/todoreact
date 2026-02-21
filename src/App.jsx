import AppHeader from "./AppHeader.jsx";
import SearchPanel from "./SearchPanel.jsx";
import TodoList from "./TodoList.jsx";

const App = () => {
    const todoData = [
        { label: 'Проснуться'},
        { label: 'Умыться', important: true },
        { label: 'Покушать' }
    ]
    return(
    <div>
        <AppHeader/>
        <SearchPanel/>
        <TodoList todos = {todoData}/>
    </div>
    )
}

export default App;