import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, login, logout } from './Action';


const App = () => {
  const count = useSelector(state => state.counter.count);
  const isLogged = useSelector(state => state.auth.isLogged);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>

      <hr />

      <h2>{isLogged ? 'User is Logged In' : 'User is Logged Out'}</h2>
      <button onClick={() => dispatch(login())}>Login</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default App;
