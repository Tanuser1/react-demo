import React from "react";


class MyComponent extends React.Component {
    state ={
        name : 'user',
        address : "quan nhan",
        age : 21 ,
           };

        handleonChangeInput = (event) => {
            this.setState({
                name : event.target.value
            })
        }

        handleClick = (event) => {
            event.preventDefault()
            console.log(this.state)
        }



           
//JSX
    render () {
        return (
            <div>
               toi la nguoi su dung :{this.state.name} anf i 'm from {this.state.address}
               <form onSubmit={(event) => this.handleClick(event)}>
                <input onChange={(event) => this.handleonChangeInput(event) }/>
                <button>click me </button>


               </form>

            </div>
        );
    }
}

export default MyComponent;