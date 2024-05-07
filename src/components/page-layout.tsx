import {
  SearchHeadlessProvider,
  provideHeadless,
} from "@yext/search-headless-react";
import { useState } from "react";
import Site from "../types/Site";
import Footer from "./footer";
import Header from "./header";
import searchConfig from "./searchConfig";
type Props = {
  _site?: Site;
  children?: React.ReactNode;
};
// const chatConfig: ChatConfig = {
//   apiKey: import.meta.env.YEXT_PUBLIC_CHAT_APIKEY,
//   botId: import.meta.env.YEXT_PUBLIC_CHAT_BOTID,
// };
const PageLayout = ({ _site, children }: Props) => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen">
      <Header _site={_site} />
      <div className="py-8">
        <SearchHeadlessProvider searcher={provideHeadless(searchConfig)}>
          {children}
        </SearchHeadlessProvider>
      </div>
      <Footer _site={_site}></Footer>
    </div>
  );
};

export default PageLayout;
