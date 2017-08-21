const Icon = novi.ui.icon;
const Icons = novi.ui.icons;
const Component = novi.react.Component;
const React = novi.react.React;

export default class Trigger extends Component{
    constructor(){
        super();
    }

    render(){
        return <Icon>{Icons.ICON_FACEBOOK}</Icon>;
    }
}