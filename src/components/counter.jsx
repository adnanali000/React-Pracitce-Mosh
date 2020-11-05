import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: []
    };

    // style={
    //     fontSize: 40,
    //     fontWeight: 'bold'
    // }

    // renderTags(){
    //     if(this.state.tags.length === 0) return <p>There are no tags</p>;

    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    // }

    //Handling Event

    handleIncrement(){
        console.log('Increment Clicked',this);
    }

    render() { 
        return ( 
        <div>
            {/* <span style={this.style} className="badge badge-primary m-2">{this.formatCount()}</span>
            <button style={{fontSize:20}} className="btn btn-secondary btn-sm">Increment</button> */}

            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button 
                onClick={this.handleIncrement} 
                className="btn btn-secondary btn-sm"
            >
                Increment
            </button>
 
            {/* {this.state.tags.length === 0 && 'Please create a new tag'}
            {this.renderTags()} */}

        </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;        
    }
}
 
export default Counter;