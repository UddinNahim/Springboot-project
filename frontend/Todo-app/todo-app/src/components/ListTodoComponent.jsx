



function ListTodosComponent() {

    const today = new Date();
    const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDate())

    const todos = [
        { id: 1, description: 'Learn AWS', done: false, targetDate: targetDate },
        { id: 2, description: 'Practice React.js', done: false, targetDate: targetDate },
        { id: 3, description: 'Build a FastAPI project', done: false, targetDate: targetDate },
        { id: 4, description: 'Revise Data Structures & Algorithms', done: false, targetDate: targetDate },
        { id: 5, description: 'Complete a LeetCode challenge', done: false, targetDate: targetDate }
    ];


    return (
        <div className="container">
            <h1>Things you want to do</h1>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>description</td>
                            <td>is Done?</td>
                            <td>TargetDate</td>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toDateString()}</td>
                                    </tr>

                                )
                            )
                        }

                    </tbody>
                </table>
            </div>

        </div>
    )

}

export default ListTodosComponent;