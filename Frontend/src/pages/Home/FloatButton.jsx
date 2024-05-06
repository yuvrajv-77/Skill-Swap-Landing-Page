import {
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
  Typography,
} from "@material-tailwind/react";
import IdeaSvg from "../../assets/icons/idea.svg?react";
import GithubSvg from "../../assets/icons/github.svg?react";

export function FloatButton() {
  const labelProps = {
    variant: "small",
    color: "blue-gray",
    className:
      "absolute top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-poppins  bg-blue-gray-50 rounded-full px-3 py-1",
  };

  return (
    <div>
      <div className="fixed bottom-[1rem] right-[1rem] sm:bottom-[3rem] sm:right-[3rem]">
        <SpeedDial>
          <SpeedDialHandler>
            <span className="bg-black p-4 border-white border-2 hover:border-[#8c52ff] rounded-full block ">
              <IdeaSvg/>
            </span>
          </SpeedDialHandler>
          

          <SpeedDialContent className="rounded-full border border-blue-gray-50 bg-white shadow-2xl space-y-3 shadow-black/10">

            <SpeedDialAction className="relative bg-blue-gray-50 hover:bg-[#00ffb7]">
              <a href="">
                <GithubSvg/>
              </a>
              <Typography  {...labelProps}>Github</Typography>
            </SpeedDialAction>

            {/* <SpeedDialAction className="relative bg-blue-gray-50 hover:bg-[#00ffb7]">
              <CogIcon className="h-5 w-5" />
              <Typography {...labelProps}>Settings</Typography>
            </SpeedDialAction> */}

            <SpeedDialAction className="relative bg-blue-gray-50 hover:bg-[#00ffb7]">
              <a href="mailto:yfg74125@gmail.com?subject=Hi There">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.75 -0.75 24 24" height={24} width={24} id="Mail-Send-Email-Message--Streamline-Plump" ><desc>{"Mail Send Email Message Streamline Icon: https://streamlinehq.com"}</desc><g id="Mail-Send-Email-Message--Streamline-Plump"><path id="Subtract" fill="#e6e6e6" d="M1.8703125 3.4359375c-0.42562500000000003 -1.0481250000000002 0.53625 -2.0475000000000003 1.605 -1.6771874999999998 3.6234375 1.2557812499999998 10.510781249999999 3.9478125000000004 16.55765625 8.055a1.72640625 1.72640625 0 0 1 0 2.87203125c-6.046875 4.10671875 -12.9346875 6.7992187500000005 -16.55765625 8.055 -1.0687499999999999 0.37031250000000004 -2.030625 -0.62953125 -1.60546875 -1.67765625 0.9140625 -2.25140625 1.9584375 -4.411875 2.4782812499999998 -5.45765625a1.8309375 1.8309375 0 0 1 1.0209375 -0.9046875L9.375 11.249531249999999l-4.0059375 -1.4507812500000001a1.8309375 1.8309375 0 0 1 -1.0209375 -0.9046875c-0.5198437499999999 -1.0457812499999999 -1.56421875 -3.20625 -2.4782812499999998 -5.458125Z" strokeWidth={1.5} /><path id="Subtract_2" stroke="#000000" strokeLinejoin="round" d="M1.869375 3.43640625c-0.42515625 -1.0481250000000002 0.53671875 -2.0475000000000003 1.60546875 -1.6771874999999998 3.6234375 1.2557812499999998 10.510781249999999 3.9478125000000004 16.55765625 8.055a1.72640625 1.72640625 0 0 1 0 2.87203125c-6.046875 4.10671875 -12.93421875 6.7992187500000005 -16.55765625 8.055 -1.0687499999999999 0.37031250000000004 -2.030625 -0.62953125 -1.60546875 -1.67765625 0.9140625 -2.25140625 1.9584375 -4.411875 2.4782812499999998 -5.45765625a1.8314062500000001 1.8314062500000001 0 0 1 1.0209375 -0.9046875L9.375 11.25l-4.00640625 -1.4507812500000001a1.8314062500000001 1.8314062500000001 0 0 1 -1.0209375 -0.9046875c-0.5198437499999999 -1.0457812499999999 -1.56421875 -3.20625 -2.4782812499999998 -5.458125Z" strokeWidth={1.5} /></g></svg>
              </a>
              <Typography {...labelProps}>Message Me</Typography>
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </div>
  );
}
