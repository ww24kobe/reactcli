import A from "./components/Acom/index.jsx"
import B from "@/components/Bcom/index.jsx"
import C from "@/components/Ccom/index.jsx"
import D from "@/components/Dcom/index.jsx"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


function App() {
  return (

    <div className="App">
        <h3>APP根组件</h3>
        {/* / 重定向到 /home */}
        <Redirect from='/def'  to="/users"/> 

        {/* <Route path="/abc/def"  component={abc} /> */}
        <Switch>
            {/* 配置路由规则  exact表示精确匹配，防止匹配其他页面的时候匹配到/，也就是首页 */}
            <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route  path="/users">
            <Users />
          </Route>
          <Route path="*">
            <ErrPage />
          </Route>
        </Switch>
        <A title='tom'/>
        <B title='jack'/>
        <C />
        <D />
        
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}


function ErrPage() {
    return <h2>not fountd 404</h2>;
}

export default App;
