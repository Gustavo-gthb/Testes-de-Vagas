import styles from "./page.module.css";
import ValueSoma from './../components/Exercises/EX1/index';
import VerificaSequenciaFibonacci from "@/components/Exercises/EX2";
import Sequencias from "@/components/Exercises/EX3";
import InterruptoresELampadas from "@/components/Exercises/EX4";
import InverteString from "@/components/Exercises/EX5";
import SomaNumeros from "./../components/Exercises/EX1/index";

export default function Home() {
  return (
    <main className={styles.main}>
     <SomaNumeros/>
     <VerificaSequenciaFibonacci/>
     <Sequencias/>
     <InterruptoresELampadas/>
     <InverteString/>
    </main>
  );
}
