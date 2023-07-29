import { getInitialTheme } from "@/utils";

function App() {
  const theme = getInitialTheme();

  console.log(theme);
  return (
    <>
      <div className="text-red-500 text-5xl">Hello World</div>
    </>
  );
}

export default App;
