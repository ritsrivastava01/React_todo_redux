import React from 'react';
import Home from './components/home';
import TodoList from './components/todoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
//import store from './redux/store';
import Header from './shared/header';
import configStore from './redux/store';

export default function App({ pageName }) {
  const DisplayPage = ({ pageName }) => {
    if (pageName === 'home') return <Home></Home>;
    if (pageName === 'todoList') return <TodoList></TodoList>;
    return <div>404 page not found</div>;
  };
  const store = configStore();
  return (
    <div className="bg-light">
      <Provider store={store}>
        <Container>
          <Header> </Header>
          <DisplayPage pageName={pageName}> </DisplayPage>
        </Container>
      </Provider>
    </div>
  );
}
