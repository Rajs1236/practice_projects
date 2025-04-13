
function InfoPopup() {
    const [showPara, setShowPara] = useState(false);
  
    return (
      <div>
        <button onClick={() => setShowPara(!showPara)}>
          {showPara ? "Hide Info" : "Show Info"}
        </button>
  
        {showPara && (
          <p style={{ marginTop: "10px", background: "#f0f0f0", padding: "10px", borderRadius: "8px" }}>
            This is your popup paragraph. You can add any info here!
          </p>
        )}
      </div>
    );
  }
  
  export default InfoPopup;