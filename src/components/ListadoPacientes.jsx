import React from "react";
import Pacientes from "./Pacientes";


const ListadoPacientes = ({ pacientes, setPaciente }) => {
  // useEffect(() => {
  //   if(pacientes.length > 0){

  //     console.log('nuevo paciente añadido');
  //   }
  // }, [pacientes])

  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen overflow-scroll">

      {pacientes?.length ?(
        <>
        
          <h2 className="font-black text-3xl text-center">ListadoPacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y citas</span>
          </p>
        
          {pacientes.map(paciente => (

            <Pacientes
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
            />

          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Empieza agregando pacientes
            <span className="text-indigo-600 font-bold"> y se mostraran aqui</span>
          </p>
        </>
      )}
      

    </div>
  );
};

export default ListadoPacientes;
