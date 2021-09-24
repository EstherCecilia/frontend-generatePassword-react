import React from "react";
import Label from "../Label/Label";
import Slider from "../Slider/Slider";
import InputCheck from "../InputCheck/Check";
import Button from "../Button/Button";
import styles from "./Card.module.scss";
import { generate } from "./utils";

export default function Card() {
  const [passWord, setPassWord] = React.useState("CLICK GENERATE");
  const [length, setLength] = React.useState(8);
  const [includes, setIncludes] = React.useState({
    uppercase: true,
    lowercase: false,
    numbers: false,
    symbols: false,
  });

  const handleGenerate = () => {
    let auxPassword = "";

    let tamanho = Object.values(includes).filter((el) => el).length;

    if (tamanho === 0) {
      setPassWord("SELECT A FILTER");
      return;
    }

    let index = 0;
    Object.keys(includes).forEach((key) => {
      if (includes[key]) {
        let soma = index === 0 ? length % tamanho : 0;
        auxPassword += generate({
          type: key,
          length: length / tamanho + soma,
        });
        console.log(soma);
        index++;
      }
    });

    setPassWord(auxPassword);
  };

  const onChangeIncludes = ({ type }) => {
    if (!type) return;

    setIncludes({ ...includes, [type]: !includes[type] });
  };

  const onChangeValue = (event) => {
    setLength(event.target.value);
  };
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Password Generator</h1>
      <Label text={passWord} />
      <div>
        <p className={styles.text}>{`LENGTH: ${length}`}</p>
        <Slider onChangeValue={onChangeValue} value={length} />
      </div>
      <div>
        <p className={styles.text}>SETTINGS</p>
        <InputCheck
          text="Include Uppercase"
          value={includes.uppercase}
          type="uppercase"
          onChange={onChangeIncludes}
        />
        <InputCheck
          text="Include Lowercase"
          value={includes.lowercase}
          type="lowercase"
          onChange={onChangeIncludes}
        />
        <InputCheck
          text="Include Numbers"
          value={includes.numbers}
          type="numbers"
          onChange={onChangeIncludes}
        />
        <InputCheck
          text="Include Symbols"
          value={includes.symbols}
          type="symbols"
          onChange={onChangeIncludes}
        />
      </div>
      <Button onClick={handleGenerate} />
    </main>
  );
}
