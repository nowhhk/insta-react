/*
import React, { Component } from "react";
import Card from "./Card";

const arr = [
  { title: "aa", number: 1 },
  { title: "bb", number: 2 },
];

export default class extends Component {
  constructor() {
    super(props);

    state = {
      users:[];
    };
  }

  componentDidMount() {
    // data loading
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json()) //then. data가 들어왔을때 처리하겠다. reponse를 가지고 자바스크립트화
      .then((res) => this.setState({ data: res})); //response로 하려고하는 것. data배열안에 넣기
  }

  render() {
      console.log(this.state);
      return (
          <div>
              {this.state.users.map((user, idx) => {
                  return <Card key={idx} name={user.name} number={user.phone} /> 
                  //key값에 고유값 찾아서 넣어줘도됨 ex.이메일
                }
              )
            }
          </div>
      )
  }
}
