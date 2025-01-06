import { useEffect, useState } from "react"
import { getFlag } from "./utils/capturer";

function App() {
  const [flag, setFlag] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchFlag = async () => {
      const newflag: string | undefined = await getFlag();
      if (newflag) setFlag(newflag);
    }

    fetchFlag();
  }, []);

  return (
    <>
      {flag ? <h1 id="flag-text"> {flag}</h1> : <h1 >Loading...</h1>}
    </>
  )
}

export default App
