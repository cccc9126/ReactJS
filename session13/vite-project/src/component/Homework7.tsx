import React, { Component } from 'react'

interface Options{
    theme: string;
    language: string;
}
export default class Homework7 extends Component<{}, Options> {
     constructor(props: {}) {
    super(props);
    this.state = {
        theme: "dark",
        language:"english"
    };
  }
  render() {
    const { theme, language } = this.state;


    if (theme === "light" && language === "english") {
      return (
        <div style={{ backgroundColor: "white", color: "black", padding: "20px" }}>
          <h1>Theme: Light</h1>
          <h2>Language: English</h2>
          <p>Hello World!</p>
        </div>
      );
    } else if (theme === "dark" && language === "vietnamese") {
      return (
        <div style={{ backgroundColor: "black", color: "white", padding: "20px" }}>
          <h1>Giao diện: Tối</h1>
          <h2>Ngôn ngữ: Tiếng Việt</h2>
          <p>Xin chào Thế Giới!</p>
        </div>
      );
    } else if(theme === "dark" && language === "english") {
      return (
        <div style={{ backgroundColor: "black", color: "white", padding: "20px"  }}>
          <h1>Theme: {theme}</h1>
          <h2>Language: {language}</h2>
        </div>
      );
    } else {
        return (
        <div style={{ backgroundColor: "white", color: "black", padding: "20px" }}>
           <h1>Giao diện: Tối</h1>
          <h2>Ngôn ngữ: Tiếng Việt</h2>
          <p>Xin chào Thế Giới!</p>
        </div>
      );
    }
  }
}

