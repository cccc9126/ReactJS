import React, { Component } from 'react'
import Homework6_chill from './Homework6_chill';
interface Post{
    id: number;
    title: string;
    content: string;
    author:string
}
interface Posts{
    posts:Post[]
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
          content: "Props giúp truyền dữ liệu từ component cha xuống component con",
          author: "Linda",
        },
        {
          id: 3,
          title: "State trong ReactJS là gì?",
          content: "State giúp trữ trạng thái dữ liệu bên trong một component",
          author: "David",
        },
      ],
    };
    }
  render() {
    return (
        <>
            {this.state.posts.map(item => (
                <Homework6_chill id={item.id} title={item.title} content={item.content} author={ item.author}></Homework6_chill>
            ))}
        </>
    )
  }
}
