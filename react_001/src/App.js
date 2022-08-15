import Message from "./Message";

function App() {
  const name = 'React'; //прописывается то что передаём пропсом в компонент
  return (
    <Message nom={name} /> //присваиваем имя для передачи в комп
  );
}

export default App;
