import { Inter } from "next/font/google";
import Words from "../components/Words";
import { useDispatch, useSelector } from "react-redux";
import { changeInput, changeText, changeTime, getData } from "@/store/typingSlice";
import { useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const dispatch = useDispatch();
  const { data, text, accuracy, input, time, status, allTypedEntries } = useSelector(
    (state) => state.typing
  );
  useEffect(() => {
    dispatch(getData({ lang: "tr" }));
  }, []);

  useEffect(() => {
    const timer = time > 0 && setInterval(() => dispatch(changeTime()), 1000);
    return () => clearInterval(timer);
  }, [time]);
  return (
    <main className={`${inter.className} h-screen`}>
      <h1 className="text-5xl">{time}</h1>
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
      <input
        value={input}
        type="text"
        placeholder="metin girin"
        onChange={(e) => dispatch(changeInput(e.target.value))}
      />
      {time === 0 && status && (
        <div className="">
          <button onClick={(e) => dispatch(changeText(text))}>Tekrar</button>
          <div className="bg-red-500 p-4 rounded-lg">
            <h1 className="text-4xl font-bold text-center mb-4">Test Sonucu</h1>
            <h1 className="text-2xl font-bold text-center mb-4">
              Hız: {Math.round((allTypedEntries.length / 5 - accuracy.incorrect) / 1)} / Dakika
            </h1>
            <h1 className="text-2xl font-bold text-center mb-4">
              Doğruluk: {((accuracy.incorrect + accuracy.correct) / accuracy.correct) * 100}%
            </h1>
          </div>
        </div>
      )}
    </main>
  );
}
