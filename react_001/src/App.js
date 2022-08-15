import Message from "./Message";
import './App.css';

function App() {
  const name = 'React - "Message.js"'; //прописывается то что передаём пропсом в компонент
  return (
    <Message nom={name} /> //присваиваем имя для передачи в комп
  );
}

export default App;
