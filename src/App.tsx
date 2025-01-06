import { useEffect, useState } from "react"
import { getFlag } from "./utils/capturer";
import { Flag } from "./Flag";

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
      {flag ? <Flag flag={flag} /> : <h1 >Loading...</h1>}
    </>
  )
}

export default App
