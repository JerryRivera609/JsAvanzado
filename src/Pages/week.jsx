import { useState } from 'react';

export default function Weeks() {
    const diasDeLaSemana = [
        { dia: 'Domingo', frase: '¡Disfruta tu domingo! c:' },
        { dia: 'Lunes', frase: '¡Buen inicio de semana! :D' },
        { dia: 'Martes', frase: '¡Ánimo con el martes! .-.' },
        { dia: 'Miércoles', frase: '¡Mitad de semana, sigue así! Gaaaa' },
        { dia: 'Jueves', frase: '¡Casi es viernes! :c' },
        { dia: 'Viernes', frase: "¡Feliz viernes! (':" },
        { dia: 'Sábado', frase: '¡Disfruta el sábado! Siuuuu' }
    ];
    const [indiceDiaActual, setIndiceDiaActual] = useState(new Date().getDay());
    const siguienteDia = () => {
        setIndiceDiaActual((indiceAnterior) => (indiceAnterior + 1) % 7);
    };
    const diaAnterior = () => {
        setIndiceDiaActual((indiceAnterior) => (indiceAnterior - 1 + 7) % 7);
    };
    const diaActual = diasDeLaSemana[indiceDiaActual];

    return (
        <div className='flex flex-col items-center h-full justify-center'>
            <div className='text-center'>
                <h2 className='text-purple-700 text-6xl font-bold mb-4'>{diaActual.dia}</h2>
                <p className="text-2xl text-gray-700 mb-8">{diaActual.frase}</p>
            </div>
            <div className='flex justify-center'>
                <button
                onClick={diaAnterior}
                className='bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l-xl text-2xl hover:cursor-pointer'>
                    -
                </button>
                <button
                onClick={siguienteDia}
                className='bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r-xl text-2xl hover:cursor-pointer'>
                    +
                </button>
            </div>
        </div>
    )
}