import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ShoppingList extends React.Component {
    constructor(props){
        super(props);
        this.state= {clickTimes:0};
    }

    render() {
      return (
        <div className="shopping-list">
            <h1>Now Click Times: {this.state.clickTimes}</h1>
          <h1>Shopping List for {this.props.name}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
          <Border value="ffff" onClick={() => this.click()} />
        </div>
      );
    }
    click = ()=>{
        this.setState({
            clickTimes: this.state.clickTimes + 1
        });
        alert(1);
    }
  }

  class Border extends React.Component{
      render(){
          return(
            <button className="nn" onClick={this.click}>{this.props.value}</button>
          )
      }
      click = () => {
        alert(this.props.value);
        this.props.onClick();
      }
  }

  ReactDOM.render(<ShoppingList />, document.getElementById('root'));