import "@google/model-viewer";

const ModelTree = ({ glb, isCard }) => {
  return (
    <div>
      {isCard ? (
        <model-viewer
          style={{ width: "100%" }}
          src={glb}
          bounds="tight"
          environment-image="neutral"
          ar
          camera-controls
          ar-modes="scene-viewer webxr quick-look"
          shadow-intensity="1"
          magic-leap
          background-color="#FFF"
        >
          <button
            slot="ar-button"
            className=" bg-white border rounded position-absolute font-weight-lighter"
            style={{
              top: "10px",
              right: "10px",
            }}
          >
            Activate AR
          </button>
        </model-viewer>
      ) : (
        <model-viewer
          style={{ width: "100%", height: "87vh" }}
          src={glb}
          bounds="tight"
          environment-image="neutral"
          camera-controls
          shadow-intensity="1"
          magic-leap
          background-color="#FFF"
        ></model-viewer>
      )}
    </div>
  );
};

export default ModelTree;
