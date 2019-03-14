import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { InputGroup, InputGroupAddon, Button, Input, Card, CardTitle } from 'reactstrap';

class App extends Component {

  state = {
    items: [] //Array of all the images to display with url and title
  }

  postData = () => {
    let details = {'url': this.url.value,
      'title': this.title.value},
        items = this.state.items;

   items.push(details);
      this.setState({
        items: [...items]
      });
      document.getElementById("url").value = "";
      document.getElementById("title").value = "";
  }

  render() {
     let items = this.state.items;
    return (
      <div className="App">
        <div className="container">
        <InputGroup>
          {/* Input element to type url of the image */}
            <Input placeholder="URL" innerRef={(input) => {this.url = input}} name="url" id="url" />
        </InputGroup>
        <InputGroup>
          {/* Input element to add title of the image. */}
            <Input placeholder="Title" innerRef={(input) => {this.title = input}} name="title" id="title"/>
            <InputGroupAddon addonType="append">
              {/* Image Post Button */}
              <Button className="postBtn" onClick={this.postData} color="secondary">New POST</Button>
            </InputGroupAddon>
          </InputGroup>  
          <br/>
        {
          items.map((item, index) => {
            return(
              <Card key={index} className="cardBox">
                {/* Images with title */}
                <div className="cardBody">
                    <CardTitle className="title">{item.title}</CardTitle>
                    <img width="96%" src={item.url} alt="Not available sorry!!" className="imgBox" />
                </div>
              </Card>
            )
          })
        }
      
        </div>
      </div>
    );
  }
}

export default App;
