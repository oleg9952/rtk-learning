import { useSelector } from "react-redux";
import CodePreview from "./components/common/CodePreview/CodePreview";
import SeparatedList from "./components/common/SeparatedList/SeparatedList";
import SplitPane from "./components/common/SplitPane/SplitPane";
import UserForm from "./components/UserForm/UserForm";
import type { RootState } from "./redux/store";
import { selectFullName } from "./redux/features/user/userSelectors";

function App() {
  const user = useSelector((state: RootState) => state.user);
  const fullname = useSelector(selectFullName);

  return (
    <SeparatedList>
      <SplitPane
        title="User Form"
        leftContent={<UserForm />}
        rightContent={
          <CodePreview
            data={{
              store: {
                user: {
                  slice: user,
                  selectors: {
                    fullname,
                  },
                },
              },
            }}
          />
        }
      />
    </SeparatedList>
  );
}

export default App;
