import React, { Component } from 'react';

class Counter extends Component {
    // state = {
    //     value: this.props.counter.value,
    //     tags: []
    // };

    // style={
    //     fontSize: 40,
    //     fontWeight: 'bold'
    // }

    //rendering list

    // renderTags(){
    //     if(this.state.tags.length === 0) return <p>There are no tags</p>;

    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    // }

     //binding event handler
    //  constructor(){
    //      super();
    //      this.handleIncrement = this.handleIncrement.bind(this);
    //  }

    //event handler
    //we use arrow function instead of bind

    // handleIncrement = product =>{
    //     console.log(product);
    //     this.setState({ value: this.state.value + 1 })
    // }

    componentDidUpdate(prevProps,prevState){
        console.log('prevProps',prevProps);
        console.log('prevState',prevState);

        if (prevProps.counter.value !== this.props.counter.value) {
            //ajax call and get new data from server
            
        }
    }

    componentWillUnmount(){
        console.log('Component unmount');
    }

    render() { 
        //console.log(this.props);
        console.log('Counter rendered');

        return ( 
        <div>
            {/* <span style={this.style} className="badge badge-primary m-2">{this.formatCount()}</span>
            <button style={{fontSize:20}} className="btn btn-secondary btn-sm">Increment</button> */}
             
             <h4> {this.props.id} </h4>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            {/* <button 
            onClick={() => this.handleIncrement({id:1})} 
            className="btn btn-secondary btn-sm"
            >
            Increment
            </button> */}

            <button 
            onClick={() => this.props.onIncrement(this.props.counter)} 
            className="btn btn-secondary btn-sm"
            >
            Increment
            </button>


            <button onClick = {()=> this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>

 
            {/* {this.state.tags.length === 0 && 'Please create a new tag'}
            {this.renderTags()} */}

        </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount(){
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;        
    }
}
 
export default Counter;