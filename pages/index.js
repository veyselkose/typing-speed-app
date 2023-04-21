import { Inter } from "next/font/google";
import Words from "../components/Words";
import { useDispatch, useSelector } from "react-redux";
import { changeText, getData } from "@/store/typingSlice";
import { useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const dispatch = useDispatch();
  const { data, text } = useSelector((state) => state.typing);
  useEffect(() => {
    dispatch(getData({ lang: "tr" }));
  }, []);
  console.log(text);
  return (
    <main className={`${inter.className} h-screen`}>
      <select
        name="lang"
        id="lang"
        defaultValue={"tr"}
        onChange={(e) => dispatch(getData({ lang: e.target.value }))}
      >
        <option value="tr">Türkçe</option>
        <option value="en">İngilizce</option>
      </select>
      <select
        name="wordtext"
        id="wordtext"
        defaultValue={text}
        onChange={(e) => dispatch(changeText(e.target.value))}
      >
        {data.map((item) => {
          return (
            <option key={item.name} value={item.name}>
              {item.name}
            </option>
          );
        })}
      </select>
      <h1 className="text-6xl font-bold text-center mb-4">Typing Test</h1>

      <Words />
    </main>
  );
}
