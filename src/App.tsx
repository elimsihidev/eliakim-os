import { useMediaQuery } from "react-responsive";

import Desktop from "./components/Desktop";
import Tablet from "./components/Tablet";
import Mobile from "./components/mobile/Mobile";

export default function App() {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1199 });
  const isDesktop = useMediaQuery({ minWidth: 1200 });

  if (isDesktop) return <Desktop />;
  if (isTablet) return <Tablet />;
  return <Mobile />;
}
