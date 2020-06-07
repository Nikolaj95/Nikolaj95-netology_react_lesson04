import React, {useState} from "react";
import hexToRgb from "../hexToRgb";

const errorBG = "rgb(169, 27, 27)";

export default function Converter() {
    const [hex, setHex] = useState("#");
    const [rgb, setRgb] = useState("");
    const [err, setErr] = useState(false);
    const [hide, setClassHide] = useState(true);

    const handleHex = e => {
        const target = e.target;

        if (target.value.length <= 7) {
            if (!target.value) {
                setHex("#")
            } else {
                setHex(target.value);
            }
            setClassHide(true);
            setRgb("");
            setErr(false);
        }

        if (target.value.length === 7) {
            const res = hexToRgb(target.value);
            setRgb(res || errorBG);
            setClassHide(false);
            if (!res) {
                setErr(true);
            }
        }
    };

    return (
        <div className="converter" style={{background: rgb}}>
            <input type="text" defaultValue={hex} onChange={handleHex} placeholder="#123456"/>
            <input className={hide ? "result hide" : "result"} type="text" id="result"
                   defaultValue={err ? "Ошибка!" : rgb}
            />
        </div>
    );
};