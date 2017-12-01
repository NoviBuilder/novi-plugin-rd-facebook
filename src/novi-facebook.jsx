import FacebookEditor from "./FacebookEditor";
const React = novi.react.React;
import FacebookSettings from "./FacebookSettings";
import * as ExcerptFunction from "./ExcerptFunction";
const Language = novi.language;
const Plugin = {
    name: "novi-plugin-rd-facebook",
    title: "Novi RD Facebook",
    description: "Novi RD Facebook description",
    version: "1.0.2",
    dependencies: {
        plugin: "1.0.0",
        novi: "0.8.6"
    },
    defaults: {
        querySelector: ".facebook"
    },
    ui: {
        editor: [FacebookEditor],
        settings: <FacebookSettings />,
    },
    excerpt : ExcerptFunction.validFacebook,
    onLanguageChange: onLanguageChange
};
function onLanguageChange(plugin){
    let messages = Language.getDataByKey("novi-plugin-rd-facebook");
    plugin.ui.editor[0].title = messages.editor.title;
    plugin.ui.editor[0].tooltip = messages.editor.tooltip;
    plugin.ui.editor[0].header[1] = <span>{messages.editor.header}</span>;

    return plugin;
}
novi.plugins.register(Plugin);
