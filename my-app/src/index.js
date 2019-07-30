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
  const ff = <h1>fsdf</h1>;
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

  function formatName(user){
    return user.firstname + " " + user.lastname; 
  }

  const user = {
      firstname: 'lei',
      lastname: 'zhou'
  }

//const element = <h1>{formatName(user)}</h1>;

function Welcome(props1){
    return <h1>HHH, {props1.name}</h1>;
}

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date : new Date(),
            counter: props.increament
        };
    }

    tick(){
        this.setState((state, props) => ({
            counter: parseInt(state.counter) + 1
        }));
    }

    componentDidMount(){
        this.TimerId = setInterval(()=>this.tick(), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.TimerId);
    }

    render(){
        return (
            <div>
                <h1>Hello World!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
                <h3>counter: {this.state.counter}</h3>
            </div>
        );   
    }
}

function tick(){
    ReactDOM.render(<Clock increament="6" />, document.getElementById('root'));
}

class MyButton extends React.Component{
    constructor(props){
        super(props);
        this.state={isToggle:true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(state =>({ isToggle : !state.isToggle}));
    }

    render(){
        return (
            <button onClick={this.handleClick}>
            {this.state.isToggle ? 'YES' : 'NO'}
            </button>
        )
    }
}

//ReactDOM.render(<MyButton />, document.getElementById('root'));

//setInterval(tick, 1000);

function UserGreeting(props){
    return <div>I'm a User.</div>
}

function GuestGreeting(props){
    return <div>I'm a Guest</div>
}

function Greeting(props){
    if (props.isUser){
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

//ReactDOM.render(<Greeting isUser={false} />, document.getElementById('root'));

function LoginButton(props){
    return (
        <button onClick={props.onClick}>
        Logout
        </button>
    );
}

function LogoutButton(props){
    return (
        <button onClick={props.onClick}>
        Login
        </button>
    );
}

function MailBox(props){
    const unreadMessage = props.unreadMessage;
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessage.length > 0 && 
                <h2>
                    you have {unreadMessage.length} to read.
                </h2>}
        </div>
    );
}

class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.state={isLoggedin: false};
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogin(){
        this.setState({isLoggedin : true});
    }

    handleLogout(){
        this.setState({isLoggedin: false});
    }

    render(){
        const messages = [];
        const isLoggedin = this.state.isLoggedin;
        let button = (
            isLoggedin ? <LogoutButton onClick={this.handleLogout} /> : <LoginButton onClick={this.handleLogin} />
        );
        return (
            <div>
                <Greeting isUser={isLoggedin} />
                {button}
                <MailBox unreadMessage={messages} />
            </div>
        );
    }
}

//ReactDOM.render(<LoginControl />, document.getElementById('root'));

const list = [1,2,3,4,5];

function ListItem(props){
    return (
        <li key={props.value.toString()}>{props.value}</li>
    );
}

const listItems = list.map((item) => <ListItem value={item} /> );


class PostForm extends React.Component{
    constructor(props){
        super(props);
        this.input = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.input.current.value);
        event.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="username" ref={this.input} />
                <input type="submit" value="提交之后会怎样" />
            </form>
        );
    }
}


//ReactDOM.render(<PostForm />, document.getElementById('root'));

function BoilingVerdict(props){
    if (props.celsius >= 100){
        return <p>The water would boil</p>;
    }
    return <p>The water would not boil</p>
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''};   
    }

    handleChange(e){
        this.props.onTemperateChange(e.target.value);
    }

    render(){
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>
                    Enter temperature in {scaleNames[scale]}:
                </legend>
                <input value={temperature} onChange={this.handleChange} />
            </fieldset>

        );
    }
}

function tryConvert(temperature, convert){
    const input = parseFloat(temperature);
    debugger
    if (Number.isNaN(input)){
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {temperature: '', scale: 'c'};
        this.handleCelsiusChange=this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelsiusChange(temperature){
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange(temperature){
        this.setState({scale: 'f', temperature});
    }

    render(){
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <TemperatureInput scale="c" temperature={celsius} onTemperateChange={this.handleCelsiusChange} />
                <TemperatureInput scale="f" temperature={fahrenheit} onTemperateChange={this.handleFahrenheitChange} />
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        );
    }
}

function FancyBorder(props){
    return (
        <div className={props.color}>
            {props.children}
        </div>
    );
}

function WelcomeDialog(){
    return (
        <FancyBorder color="red">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
    );
}

class TableLong extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[]};
        this.HandleSearch = this.HandleSearch.bind(this);
    }

    HandleSearch(val){
        const data=[
            {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
            {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
            {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
            {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
            {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
            {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
          ];
        let tempdata = data.filter(item => item.name.indexOf(val) > -1);
        debugger
        this.setState({
            data : tempdata
        });
    }
    render(){

        return (
            <div>
                <TextBoxShow onSearch={this.HandleSearch}/>
                <div>
                    <TableBody data={this.state.data}/>
                </div>
            </div>
        );
    }   
}

class TextBoxShow extends React.Component{
    constructor(props){
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange(e){
        this.props.onSearch(e.target.value);
    }

    render(){
        return (
            <div>
                <div>
                    <input type="text" placeholder="input something ..." onChange={this.handleTextChange} />
                </div>
                <div>
                    <label><input type="radio" />only show</label>
                </div>
            </div>
        );
    }
}

class TableBody extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let rows = [];
        let currentCategory = null;

        this.props.data.forEach(element => {
            if (element.category !== currentCategory){
                rows.push( <TableTHRow category={element.category} key={element.category} />);
            }
            rows.push(<TableTdRow name={element.name} price={element.price} key={element.name} />);
            currentCategory = element.category;
        });

        return (
            <table>
                <thead>
                    <tr><th>Name</th><th>Price</th></tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

function TableTHRow(props){
    return (
        <tr><th colSpan="2">{props.category}</th></tr>
    );
}

function TableTdRow(props){
    return (
        <tr><td>{props.name}</td><td>{props.price}</td></tr>
    );
}

ReactDOM.render(<TableLong />, document.getElementById('root'));