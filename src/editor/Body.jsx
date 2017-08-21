const RadioGroup = novi.ui.radioGroup;
const Input = novi.ui.input;
const Component = novi.react.Component;
const React = novi.react.React;

export default class Body extends Component{
    constructor(props){
        super(props);

        let id = novi.element.getAttribute(props.element, 'data-fb-id') || null;
        let type = novi.element.getAttribute(props.element, 'data-fb-page-type') || null;
        let access = novi.element.getAttribute(props.element, 'data-fb-access') || null;

        this.state = {
            type: type,
            initType: type,
            id,
            initId: id,
            access,
            initAccess: access,
            element: props.element
        };

        this._handleAccessChange = this._handleAccessChange.bind(this);
        this._handleNameChange = this._handleNameChange.bind(this);
        this._renderInputName = this._renderInputName.bind(this);
        this._renderAccesInput = this._renderAccesInput.bind(this);
        this._handleRadioButtonClick = this._handleRadioButtonClick.bind(this);
    }

    render(){
        return (
            <div className="facebook-plugin-wrap" style={{"padding": "0 12px", "display": "flex", "flexDirection": "column", "justifyContent": "center", "height": "100%", "color": "#6E778A"}}>
                <p className="novi-label" style={{"marginTop": "0"}}>
                    Facebook Page Type:
                </p>
                <RadioGroup options={["page", "group"]} value={this.state.type} onChange={this._handleRadioButtonClick}/>
                {this._renderAccesInput()}
                {this._renderInputName()}

            </div>
        )
    }


    _handleRadioButtonClick(value){
        this.setState({type: value})
    }

    _renderInputName(){
        return (
            <div>
                <p className="novi-label" style={{marginTop: 15}}>
                    {this.state.type === "group" ? "Facebook Group:" : "Facebook Page:"}
                </p>
                <Input onChange={this._handleNameChange} value={this.state.id}/>
            </div>
        )
    }

    _renderAccesInput(){
        return (
            <div>
                <p className="novi-label" style={{marginTop: 15}}>
                    Facebook Access Token:
                </p>
                <Input onChange={this._handleAccessChange} value={this.state.access}/>
            </div>
        )
    }

    _handleAccessChange(e){
        this.setState({
            access: e.target.value
        })
    }
    _handleNameChange(e){
        this.setState({
            id: e.target.value
        })
    }
}