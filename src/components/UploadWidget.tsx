import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
type SetMyComponentState = Dispatch<SetStateAction<any>>;

const CloudinaryScriptContext = createContext({ loaded: false });

function UploadWidget({
  uwConfig,
  setState,
}: {
  uwConfig: {};
  setState: SetMyComponentState;
}) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      const uwScript = document.getElementById("uw");
      if (!uwScript) {
        const script = document.createElement("script");
        script.setAttribute("async", "");
        script.setAttribute("id", "uw");
        script.src = "https://upload-widget.cloudinary.com/global/all.js";
        script.addEventListener("load", () => setLoaded(true));
        document.body.appendChild(script);
      } else {
        setLoaded(true);
      }
    }
  }, [loaded]);

  const initializeCloudinaryWidget = () => {
    if (loaded) {
      var myWidget = window.cloudinary.createUploadWidget(
        uwConfig,
        (
          error: boolean,
          result: {
            event: string;
            info: {
              secure_url: string;
            };
          }
        ) => {
          if (!error && result && result.event === "success") {
            console.log(result.info);
            setState((prev) => [...prev, result.info.secure_url]);
          }
        }
      );

      document.getElementById("upload_widget")?.addEventListener(
        "click",
        function () {
          myWidget.open();
        },
        false
      );
    }
  };

  return (
    <CloudinaryScriptContext.Provider value={{ loaded }}>
      <button
        id="upload_widget"
        className="cloudinary-button"
        onClick={initializeCloudinaryWidget}
      >
        Upload
      </button>
    </CloudinaryScriptContext.Provider>
  );
}

export default UploadWidget;
export { CloudinaryScriptContext };
