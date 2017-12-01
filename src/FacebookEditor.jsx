const React = novi.react.React;
import Trigger from "./editor/Trigger";
import Body from "./editor/Body";
const Icons = novi.ui.icons;
const messages = novi.language.getDataByKey("novi-plugin-rd-facebook");
const EditorItem = {
    trigger: <Trigger/>,
    tooltip: messages.editor.tooltip,
    header: [Icons.ICON_FACEBOOK, <span>{messages.editor.header}</span>],
    body: [<Body/>],
    closeIcon: "submit",
    title: messages.editor.title,
    onSubmit: onSubmitAction,
    width: 360,
    height: 240
};

export default EditorItem;

function onSubmitAction(headerStates, bodyStates) {
    let state = bodyStates[0];

    if ( state.id === state.initId && state.access === state.initAccess && state.type === state.initType) return;

    novi.element.setAttribute(state.element, "data-fb-id", state.id);
    novi.element.setAttribute(state.element, "data-fb-page-type", state.type);
    novi.element.setAttribute(state.element, "data-fb-access", state.access);
    novi.page.forceUpdate();

}