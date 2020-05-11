
const React = require('react');

class Index extends React.Component {
    render() {
        const { todos } = this.props;
        return (
            <div>
                <h1>To Do List</h1>
                <h3> 
                    {todos.length <= 0 ? `There are no To Dos yet!` : 
                <ul>
                    {
                        todos.map((todo, index) => {
                            return (
                                <li>
                                    {`${todo.todo} - ${todo.done ? "Done" : "Not Done"}`}
                                    <form action={`/todos/${todo._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="DELETE"/>
                                    </form>
                                </li>
                            )
                        })
                    }
                </ul>
                    } 
                </h3>
                <hr/>
                <form action="/todos" method="POST">
                    <input type="text" name="todo"/>
                    <input type="submit" value="ADD TO DO"/>
                </form>
            </div>
        )
    }
}

module.exports = Index;