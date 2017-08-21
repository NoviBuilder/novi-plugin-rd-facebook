import FacebookEditor from "./FacebookEditor";
const React = novi.react.React;
import FacebookSettings from "./FacebookSettings";
import * as ExcerptFunction from "./ExcerptFunction";

const Plugin = {
    name: "novi-plugin-rd-facebook",
    title: "Novi RD Facebook",
    description: "Novi RD Facebook description",
    version: "1.0.1",
    dependencies: {
        plugin: "1.0.0"
    },
    defaults: {
        querySelector: ".facebook"
    },
    ui: {
        editor: [FacebookEditor],
        settings: <FacebookSettings />,
    },
    excerpt : ExcerptFunction.validFacebook
};

novi.plugins.register(Plugin);
