import CodePreview from "./components/CodePreview/CodePreview";
import SeparatedList from "./components/SeparatedList/SeparatedList";
import SplitPane from "./components/SplitPane/SplitPane";
import UserForm from "./components/UserForm/UserForm";

function App() {
  return (
    <SeparatedList>
      <SplitPane
        title="User Form"
        leftContent={<UserForm />}
        rightContent={
          <CodePreview
            data={{ name: "John Doe", age: 20, email: "john@doe.com" }}
          />
        }
      />
    </SeparatedList>
  );
}

export default App;
