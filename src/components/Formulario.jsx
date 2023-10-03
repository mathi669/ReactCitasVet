import { useState, useEffect } from "react";
import Errors from "./Errors";

const Formulario = ({ pacientes, setPacientes, paciente }) => {
  const [nombre, setNombre] = useState("");
  const [dueño, setDueño] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [error, setError] = useState(false);

  useEffect(()=>{
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setDueño(paciente.dueño)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setDescripcion(paciente.descripcion)
    }
  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36)
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, dueño, email, fecha, descripcion].includes("")) {
      console.log("hay almenos un campo vacio");

      setError(true);
      return;
    }
    setError(false);

    //Objeto de pacientes
    const objetoPaciente = {
      nombre,
      dueño,
      email,
      fecha,
      descripcion
    };

    if(paciente.id){
      // Edictando registro
      objetoPaciente.id = paciente.id
    }else{
      //Nuevo registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }


    //reiniciar form
    setNombre("");
    setDueño("");
    setEmail("");
    setFecha("");
    setDescripcion("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className=" text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && (
          <Errors>
            <p>Todos los campos son obligatorios</p>
          </Errors>
        )}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de mascota"
            className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="dueño"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Dueño/a
          </label>
          <input
            id="dueño"
            type="text"
            placeholder="Nombre del dueño/a"
            className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
            value={dueño}
            onChange={(e) => setDueño(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="text"
            placeholder="Email contacto dueño"
            className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Descripcion
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los Sintomas"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value="Agregar Paciente"
        />
      </form>
    </div>
  );
};

export default Formulario;
