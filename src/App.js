import Navbar from './Navbar';
import Home from './Home';
import HomeNew from './HomeNew';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import Welcome from './study/Welcome';
import FunctionClick from './study/FunctionClick';
import ClassClick from './study/ClassClick';
import EventBind from './study/EventBind';
import ParentComponent from './study/ParentComponent';
import UserGreetings from './study/UserGreetings';
import NameList from './study/NameList';
import Stylesheet from './study/Stylesheet';
import Form from './study/Form';
import FragmentDemo from './study/FragmentDemo';
import PureComp from './study/PureComp';
import ParentComp from './study/ParentComp';
import RefsDemo from './study/RefsDemo';
import FocusInput from './study/FocusInput';
import ClickCounter from './study/ClickCounter';
import HoverCounter from './study/HoverCounter';
import ClickCounterTwo from './study/ClickCounterTwo';
import HoverCounterTwo from './study/HoverCounterTwo';
import User from './study/User';
import Counter from './study/Counter';
import ComponentE from './study/context/ComponentE';
import { UserProvider } from './study/context/UserContext';

function App() {
  const title = "welcome react tutorial";
  const likes = 50;
  const person = { name : "hey yummiee", age : 25 };
  const link = "http://www.google.com";

  return (
    // <Router>
    //   <div className="App">
    //     <Navbar />
    //       <div className="content">
    //       <Switch>
    //         <Route exact path="/">
    //           <HomeNew />
    //         </Route>
    //         <Route path="/create">
    //           <Create />
    //         </Route>
    //       </Switch>
    //     </div>
    //   </div>
    // </Router>
    <div className='App'>
      {/* <Welcome name = "Muthu!"/> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      <EventBind />
      {/* <ParentComponent />  */}
      {/* <UserGreetings /> */}
      {/* <NameList /> */}
      {/* <Stylesheet primary = {true} /> */}
      {/* <Form /> */}
      {/* <FragmentDemo /> */}
      {/* <PureComp /> */}
      {/* <ParentComp /> */}
      {/* <RefsDemo /> */}
      {/* <FocusInput /> */}
      {/* <ClickCounter name = 'muthu' />
      <HoverCounter /> */}
      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User name = { (isTrue) => isTrue ? 'muthu' : 'Guest' } /> */}
{/* 
      <Counter render = { (count, incrementCount) => (
        <ClickCounterTwo count = {count} incrementCount = {incrementCount} />
      )} />

      <Counter render = { (count, incrementCount) => (
        <HoverCounterTwo count = {count} incrementCount = {incrementCount} />
      )} /> */}

      {/* context */}

      <UserProvider value= 'Muthu'>
        <ComponentE />
      </UserProvider>

    </div>
  );
}

export default App;
