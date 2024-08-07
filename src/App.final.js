let MNMLogo = 'assets/imgs/small-logo-flower1.jpg';
const emailRgx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

class SimpleExample extends React.Component {
    showHint = false;
    state = {emailInput: ''};
    title = 'Simple Component with Email validation';

    handleChange = e => {
        let {value, name} = e.target;
        if (value && (!value.trim().length || !emailRgx.test(value))) {
            value = false;
            this.showHint = true;
        } else this.showHint = false;
        this.setState({[name]: value});
    }

    handleClick = e => {
        alert('Your email is "'+this.state.emailInput+'"');
    }

    componentDidMount(){
        document.title = this.title;
    }

    render() {
        return (
            <div className="w3-container">
                <h1>{this.title}</h1>
                <div className="form-group">
                    <input style={{width:'30%', 'border-radius': '12px'}} className="w3-input w3-border w3-animate-input" placeholder="Email" onChange={this.handleChange} id="emailInput" name="emailInput" />
                    <span data-disabled={!this.showHint} className="hint-span">Invalid email, form cannot be submitted.</span>
                </div>
                <div className="form-group">
                    <button style={{'border-radius': '12px'}} onClick={this.handleClick} type="button" className="btn btn-primary" disabled={!this.state.emailInput}>Submit</button>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<SimpleExample />, document.getElementById('example'));
