// import styled from 'styled-componenets'
import styled from "styled-components";
import logo from "./logo/logo.svg"

function App() {
  return (
<Wrapper>
    <nav>
<div className="nav-sec-main">
<div className="nav-sec-right">
  
  </div>
  <div className="nav-sec-left">
  
</div>
</div>
    </nav>


    <div className="App">
      <div className="top-section">
        {/* <div className="top-back"> */}
        <img src={logo} alt='logo-alexander'/>
        <h1>Alexander Bart - Hair Artist </h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
          industry. Lorem Ipsum has been the industry's standard dummy text 
          ever since the 1500s, when an unknown printer took a galley of type 
          and scrambled it to make a type specimen book. It has survived not 
          only five centuries, but also the leap into electronic typesetting, 
          remaining essentially unchanged.</p>

          </div>
      {/* </div> */}
    </div>
  </Wrapper>
  );
}

export default App;


const Wrapper = styled.div`
text-align: center;
width: 100vw;
height: 100vh;


.App{
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
 

}

`