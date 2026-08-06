import { useMediaQuery } from "react-responsive";

import Desktop from "./components/Desktop";
import Tablet from "./components/Tablet";
import Mobile from "./components/Mobile";

export default function App() {
  const isDesktop = useMediaQuery({
    minWidth: 1024,
  });

  const isTablet = useMediaQuery({
    minWidth: 768,
    maxWidth: 1023,
  });

  if (isDesktop) {
    return <Desktop />;
  }

  if (isTablet) {
    return <Tablet />;
  }

  return <Mobile />;
}