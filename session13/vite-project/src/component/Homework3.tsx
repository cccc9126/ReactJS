import { Component } from 'react'

interface Person {
  id: number;
  name: string;
  age: number;
}

interface State {
  people: Person[];
}

export default class Homework3 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      people: [
        { id: 1, name: "A", age: 19 },
        { id: 2, name: "B", age: 20 },
        { id: 3, name: "C", age: 18 }
      ]
    };
  }

  render() {

    const { people } = this.state;

    return (
      <>
        <h1>Danh sách sinh viên</h1>
        <table border={1} cellPadding={8} style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {people.map(person => (
              <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.name}</td>  
                <td>{person.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    )
  }
}
