import './Center.css';

export const Center = () => {
    
  const handleRandomCalculation = () => {
    //Generar dos números aleatorios (1 al 100)
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;

    //Mostrar los números y el resultado con alertas
    alert(`Los números generados son: ${num1} y ${num2}`);
    alert(`El resultado de la suma es: ${num1 + num2}`);
  };

  return (
    <section className="center">
      <div className="center__content">
        <h1 className="center__title">
          Building things <br /> is our mission.
        </h1>
        <button className="center__button" onClick={handleRandomCalculation}>
          Addition
        </button>
      </div>
    </section>
  );
};