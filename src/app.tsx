import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import "./styles/global.css";

export function App() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-zinc-100">
      <div className="w-full max-w-2xl rounded-md bg-white p-8 shadow">
        <h1 className="text-center text-2xl font-bold">Registration</h1>
        <form className="mt-8 flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>First name</Label>
              <Input type="text" />
            </div>
            <div>
              <Label>Last name</Label>
              <Input type="text" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>E-mail</Label>
              <Input type="email" />
            </div>
            <div>
              <Label>Company</Label>
              <Input type="text" />
            </div>
          </div>

          <div className="grid grid-cols-3 items-end gap-4">
            <div>
              <Label>Date of birth</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  {Array(12)
                    .fill(1)
                    .map((_, index) => {
                      const value = String(index + 1);
                      return (
                        <SelectItem key={String(index)} value={value}>
                          {value}
                        </SelectItem>
                      );
                    })}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Day" />
                </SelectTrigger>
                <SelectContent>
                  {Array(31)
                    .fill(1)
                    .map((_, index) => {
                      const value = String(index + 1);
                      return (
                        <SelectItem key={String(index)} value={value}>
                          {value}
                        </SelectItem>
                      );
                    })}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  {Array(200)
                    .fill(1)
                    .map((_, index) => {
                      const value = String(index + 1901);
                      return (
                        <SelectItem key={String(index)} value={value}>
                          {value}
                        </SelectItem>
                      );
                    })}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button type="submit" className="mt-8">
            Register
          </Button>
        </form>
      </div>
    </div>
  );
}
