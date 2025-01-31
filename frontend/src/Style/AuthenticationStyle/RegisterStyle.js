import { createGlobalStyle } from "styled-components";
import { background } from "../../imports/image";

export const RegisterStyle = createGlobalStyle`
.login {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 1) 100%
      ),
      url(${background});
    background-size: cover;
    position: relative;
  
    .top {
      .wrapper {
        padding: 20px 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
  
        .logo {
          height: 10rem;
        }
      }
    }
  
    .container {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
  
      form {
        width: 350px;
        height: 500px;
        padding: 30px;
        border-radius: 5px;
        background-color: #0b0b0b;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .loginButton1{
          text-align: center;
        }
        input {
          height: 40px;
          border-radius: 5px;
          background-color: gray;
          color: white;
          padding-left: 10px;
          position:relative;
  
          &::placeholder {
            color: lightgray;
          }
         
        }
        .fa{
          position:absolute;
          margin-left: 20rem;
          margin-bottom:1.4rem
        }
        button {
          height: 40px;
          border-radius: 5px;
          background-color: red;
          color: white;
          border: none;
          font-size: 18px;
          font-weight: 500;
          cursor: pointer;
        }
  
        span {
          color: lightgray;
          b {
            color: white;
          }
        }
      }
    }
  }

`;
