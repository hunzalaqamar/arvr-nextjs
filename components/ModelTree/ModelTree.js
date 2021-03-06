import "@google/model-viewer";
import { isAndroid, isIOS, isMacOs } from "react-device-detect";
import ARButton from "../ARButton/ARButton";

const ModelTree = ({ glb, isCard }) => {
  var urlMaker;

  if (isIOS) {
    urlMaker = "/assests/3d/" + glb + ".usdz";
  } else {
    urlMaker = "/assests/3d/" + glb + ".glb";
  }
  const posterMaker = "/assests/3d/" + glb + ".png";
  return (
    <div>
      {isCard ? (
        isIOS ? (
          <model-viewer
            style={{ width: "100%" }}
            reveal="manual"
            poster={posterMaker}
            ios-src={urlMaker}
            environment-image="neutral"
            ar
            camera-controls
            ar-modes="scene-viewer webxr quick-look"
            shadow-intensity="1"
            background-color="#FFF"
          >
            {!isMacOs && <ARButton btnSlot={"ar-button"} />}
          </model-viewer>
        ) : (
          <model-viewer
            style={{ width: "100%" }}
            reveal="manual"
            poster={posterMaker}
            src={urlMaker}
            environment-image="neutral"
            ar
            camera-controls
            ar-modes="scene-viewer webxr quick-look"
            shadow-intensity="1"
            background-color="#FFF"
          >
            {isAndroid && <ARButton btnSlot={"ar-button"} />}
          </model-viewer>
        )
      ) : (
        <model-viewer
          style={{
            width: "100vw",
            height: "80vh",
            overflow: "auto",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "4vh",
          }}
          src={glb}
          bounds="tight"
          environment-image="neutral"
          camera-controls
          shadow-intensity="1"
          background-color="#FFF"
        ></model-viewer>
      )}
    </div>
  );
};

export default ModelTree;
