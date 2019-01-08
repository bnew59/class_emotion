
// import React, { Component } from 'react';
// import axios from 'axios'

// const REGISTER_USER_URL = 'http://localhost:5000/register'

// export class Register extends Component {

//   constructor(props) {
//     super(props)

//     this.state = {
//       user : {}
//     }
//   }

//   registerButtonClick = () => {

//     let user = this.state.user

//     axios.post(REGISTER_USER_URL,{
//       // uid: user.uid,
//       // psw: user.psw,
//       first_name: user.first_name,
//       last_name: user.last_name,
//       // email: user.email
//       week_num: user.week_num,
//       comments: user.comments

//     }).then((response) => {
//       console.log(response)
//     })

//   }

//   handleTextBoxChange = (e) => {

//       this.setState({
//         user : {
//           ...this.state.user,
//           [e.target.name] : e.target.value
//         }
//       })

//   }

//   render() {
//     return (
//       <div>
//           <h1>Register This Week's Emotion</h1>
//         <input type="text" onChange={this.handleTextBoxChange} name="first_name" placeholder="First Name" />
//         <input type="text" onChange={this.handleTextBoxChange} name="last_name" placeholder="Last Name" />
//         <input type="text" onChange={this.handleTextBoxChange} name="week_num" placeholder="Week Number" />
//         <input type="text" onChange={this.handleTextBoxChange} name="comments" placeholder="Comments" />
//         <button onClick={this.registerButtonClick}>Press To Register Your Emotion Selection</button>
//       </div>
//     )
//   }

// }
