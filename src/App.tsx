import { Button } from "./components/button";
import { SocialButton } from "./components/social-button";

function App() {
  return (
    <div style={{ display: "flex", gap: "12px" }}>
      <Button
        variant="orangeClassic"
        onClick={() => console.log("1st btn clicked")}
      >
        Orange Classic
      </Button>
      <div style={{backgroundColor: "#000", padding: "15px"}}>
        <Button
          variant="clearOutlined"
          onClick={() => console.log("1st btn clicked")}
        >
          Clear Outlined
        </Button>

        <span style={{color: "#fff", marginLeft: "10px"}}>Bu yaxshi ko'rinishi uchun background berib qo'yganman</span>
      </div>
      <Button
        variant="blackClassic"
        onClick={() => console.log("1st btn clicked")}
      >
        Black Classic
      </Button>
      <Button
        variant="blackOutlined"
        onClick={() => console.log("1st btn clicked")}
      >
        Black Outlined
      </Button>

      <SocialButton
        storeName="Play Store"
        variant="filled"
        onClick={() => console.log("clicked")}
      />
      <SocialButton
        storeName="Apple Store"
        variant="outlined"
        onClick={() => console.log("clicked")}
      />
    </div>
  );
}

export default App;
