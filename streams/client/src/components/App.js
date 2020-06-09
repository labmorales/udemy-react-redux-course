import React from "react";
import { Router, Route } from "react-router-dom";
import StreamList from "./Streams/StreamList";
import StreamCreate from "./Streams/StreamCreate";
import StreamEdit from "./Streams/StreamEdit";
import StreamShow from "./Streams/StreamShow";
import StreamDelete from "./Streams/StreamDelete";
import Header from "./Header";
import history from "../history";

function App() {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/edit/:id" component={StreamEdit} />
          <Route path="/streams/show:id" component={StreamShow} />
          <Route path="/streams/delete/:id" component={StreamDelete} />
        </div>
      </Router>
    </div>
  );
}

export default App;
