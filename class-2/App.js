
const Heading = React.createElement("h1",{id:"heading1",class:"heading" ,hello:"world"}, "Heading 1");
const Heading2 = React.createElement("h2",{id:"heading2", hello:"world"}, "Heading 2");

const container = React.createElement("div",{class:"container"},[Heading, Heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);