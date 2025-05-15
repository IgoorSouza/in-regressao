import { useState } from "react";
import IHeader from "../components/iheader";
import { Link } from "react-router-dom";

export default function ICalcular() {
  const [IArea, ISetIArea] = useState<number | null>(null);
  const [IRendimento, ISetIRendimento] = useState<number | null>(null);
  const [IValorProducao, ISetIValorProducao] = useState<string | null>(null);

  const ICoeficienteArea = 3.853;
  const ICoeficienteRendimento = 116.0121;
  const ICoeficienteArea2 = 0.0019;
  const ICoeficienteRendimento2 = -0.1416;
  const ICoeficienteArea3 = -1.23e-6;
  const ICoeficienteRendimento3 = 6.82e-5;
  const ICoeficienteArea4 = 2.59e-10;
  const ICoeficienteRendimento4 = -1.1e-8;
  const IIntercepto = -34885.1777;

  function ICalcularPrevisao() {
    if (
      IArea === null ||
      IArea === undefined ||
      IRendimento === null ||
      IRendimento === undefined
    ) {
      ISetIValorProducao("Informe os dados corretamente.");
      return;
    }

    const IValorProducaoResultado =
      (IIntercepto +
        ICoeficienteArea * IArea +
        ICoeficienteRendimento * IRendimento +
        ICoeficienteArea2 * Math.pow(IArea, 2) +
        ICoeficienteRendimento2 * Math.pow(IRendimento, 2) +
        ICoeficienteArea3 * Math.pow(IArea, 3) +
        ICoeficienteRendimento3 * Math.pow(IRendimento, 3) +
        ICoeficienteArea4 * Math.pow(IArea, 4) +
        ICoeficienteRendimento4 * Math.pow(IRendimento, 4)) *
      1000;

    ISetIValorProducao(
      `A previsão do Valor de Produção para os valores dados é de R$ ${IValorProducaoResultado.toLocaleString(
        "pt-BR",
        {
          maximumFractionDigits: 0,
        }
      )}!`
    );
  }

  return (
    <IHeader>
      <div className="flex flex-col items-center gap-4 mt-6 bg-orange-200 p-4 rounded-md shadow-md bg-opacity-90">
        <div>
          <label className="font-medium mr-3">Informe a área plantada:</label>
          <input
            type="number"
            className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-orange-300"
            placeholder="Ex: 1500"
            onChange={(e) => ISetIArea(parseInt(e.target.value))}
          />
        </div>

        <div>
          <label className="font-medium mr-3">Informe o rendimento:</label>
          <input
            type="number"
            className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-orange-300"
            placeholder="Ex: 2500"
            onChange={(e) => ISetIRendimento(parseInt(e.target.value))}
          />
        </div>

        <button
          onClick={ICalcularPrevisao}
          className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-4 py-1 rounded-md"
        >
          Calcular
        </button>
      </div>

      <div className="flex flex-col items-center gap-4 mt-6 bg-orange-200 p-4 rounded-md shadow-md w-1/2">
        <p className="italic">
          <strong>f(Área plantada, Rendimento)</strong> = {ICoeficienteArea} *{" "}
          {IArea || "Área"} + {ICoeficienteRendimento} *{" "}
          {IRendimento || "Rendimento"} + {ICoeficienteArea2} * (
          {IArea || "Área"}
          <sup>2</sup>) + {ICoeficienteRendimento2} * (
          {IRendimento || "Rendimento"}
          <sup>2</sup>) + {ICoeficienteArea3} * ({IArea || "Área"}
          <sup>3</sup>) + {ICoeficienteRendimento3} * (
          {IRendimento || "Rendimento"}
          <sup>3</sup>) + {ICoeficienteArea4} * ({IArea || "Área"}
          <sup>4</sup>) + {ICoeficienteRendimento4} * (
          {IRendimento || "Rendimento"}
          <sup>4</sup>) + {IIntercepto}
        </p>
      </div>

      {IValorProducao && (
        <div className="mt-4 bg-orange-200 text-center p-4 rounded-md shadow-md w-[400px]">
          <p className="font-semibold">{IValorProducao}</p>
        </div>
      )}

      <Link
        to="/"
        className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-4 py-2 rounded-md mt-5"
      >
        Voltar
      </Link>
    </IHeader>
  );
}
