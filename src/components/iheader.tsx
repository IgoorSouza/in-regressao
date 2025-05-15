import type { PropsWithChildren } from "react";
import ifeijao from "../assets/ifeijao.jpg";

export default function IHeader({ children: ichildren }: PropsWithChildren) {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${ifeijao})` }}
      ></div>

      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

      <div className="relative z-10 min-h-screen flex flex-col items-center p-6">
        <h1 className="text-3xl font-bold text-center mb-2 text-orange-300">
          Aprendizado semi-supervisionado: <br /> Valor da Produção de Feijão em
          Patrocínio
        </h1>
        <h2 className="text-xl text-center mb-4 text-white">
          Aluno: Igor Souza de Castro
        </h2>

        {ichildren}
      </div>
    </div>
  );
}
