import React from 'react'
import Homework2_1 from './Homework2_1'
import Homework2_2 from './Homework2_2';

function Homework2() {
    const [theme, setTheme] = React.useState('light')
    function toggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    return (
      <>
         <div className="div" style={{ width: "100%", height: "500px" }}>
         
          <h1
            style={{
              color: theme === "light" ? "black" : "white",
            }}
          >
            Theme
          </h1>
          <Homework2_1 toggleTheme={toggleTheme}></Homework2_1>
          <Homework2_2 theme={theme}></Homework2_2>
        </div > 

            <style>{`   
            .div{
                background-color: ${theme === "light" ? "white" : "black"};
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            `}</style>
        
      </>
    );
}

export default Homework2