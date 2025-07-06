import React, { useState } from "react";

export default function Babylonian() {

    const [numero, setNumero] = useState('');
    const [resultado, setResultado] = useState(null);

    const calcularRaiz = () => {
        if (!numero || numero < 0) return;

        const S = parseFloat(numero);
        let x = S / 2;
        let anterior;

        do {
            anterior = x;
            x = (x + S / x) / 2;
        } while (Math.abs(x - anterior) > 0.00001);

        setResultado(x);
    };

    return (
        <div className="flex items-center justify-center h-full">
            <div className="p-6 bg-white/20 backdrop-blur-md rounded-xl shadow-md max-w-md mx-auto text-white space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">Raíz Cuadrada - Método Babilónico</h2>

                <input
                    type="number"
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                    placeholder="Ingrese un número"
                    className="w-full p-2 rounded-md bg-white/20 placeholder-white/70 text-gray-800 outline-none focus:ring-2 focus:ring-white/50"
                />

                <button
                    onClick={calcularRaiz}
                    className="w-full py-2 rounded-md bg-white/20 text-gray-800 hover:bg-white/50 transition duration-300"
                >
                    Calcular
                </button>

                {resultado && (
                    <p className="text-gray-800 text-center">
                        √{numero} ≈ <span className="font-semibold">{resultado.toFixed(6)}</span>
                    </p>
                )}
            </div>
        </div>

    )
}