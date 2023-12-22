import React,{useContext} from "react";
import ThemeContext from "./ContextExamOne";

const ChildComponent = ()=> {
    const theme =useContext(ThemeContext);
    return (
      <>
        <p>현재 테마는 : {theme} 입니다.</p>
      </>
    );
}

export default ChildComponent;