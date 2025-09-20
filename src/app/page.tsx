import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function Home() {
  return (
    <div className="p-5 text-center space-y-3 border-2">
      <div>
        <Button>I am a Button</Button>
      </div>
      <div>
        <progress value={50}></progress>
      </div>
      <div>
        <input placeholder="I am a input" />
      </div>
      <div>
        <textarea value="I am text area"></textarea>
      </div>
      <div>
        <Checkbox></Checkbox>{" "}
      </div>
    </div>
  );
}
