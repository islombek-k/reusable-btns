import { Button } from "./components/button";
import { SocialButton } from "./components/social-button";

function App() {
  return (
    <div style={{display: "flex", gap: "12px"}}>
      <Button
        variant="blackClassic"
        onClick={() => console.log("1st btn clicked")}
      >
        Normal btn
      </Button>
      <SocialButton
        storeName="Play Store"
        variant="filled"
        onClick={() => console.log("clicked")}
      />
    </div>
  );
}

export default App;
