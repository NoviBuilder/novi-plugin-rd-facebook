const React = novi.react.React;
import Trigger from "./editor/Trigger";
import Body from "./editor/Body";
const Icons = novi.ui.icons;

const EditorItem = {
    trigger: <Trigger/>,
    tooltip: "Change Facebook settings",
    header: [Icons.ICON_FACEBOOK, <span>Facebook Settings</span>],
    body: [<Body/>],
    closeIcon: "submit",
    title: "Facebook settings",
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