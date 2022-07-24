import Form from "./components/form";
import List from "./components/list";

const App = () => {
  return (
    <div className="container w-50 mt-5">
      <h3 className="text-center">TO DO APP</h3>
      <Form />
      <List />
    </div>
  );
};

export default App;
