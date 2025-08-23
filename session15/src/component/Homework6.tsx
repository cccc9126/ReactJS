import React, { Component } from "react";

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

interface Posts {
  posts: Post[];
}

export default class Homework6 extends Component<{}, Posts> {
  constructor(props: {}) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          title: "Tại sao nên học ReactJS",
          content: "Học ReactJS để đi làm",
          author: "David",
        },
        {
          id: 2,
          title: "Props trong ReactJS",
          content:
            "Props giúp truyền dữ liệu từ component cha xuống component con",
          author: "Linda",
        },
        {
          id: 3,
          title: "State trong ReactJS là gì?",
          content:
            "State giúp trữ trạng thái dữ liệu bên trong một component",
          author: "David",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h2>Danh sách bài viết</h2>
        {this.state.posts.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "6px",
            }}
          >
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            <small>Tác giả: {item.author}</small>
          </div>
        ))}
      </div>
    );
  }
}
