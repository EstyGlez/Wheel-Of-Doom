// import React from 'react';
// import { useForm } from 'react-hook-form';

// const Form = ({ onSubmit }) => {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const submitForm = data => {
//     onSubmit(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(submitForm)}>
//       <div>
//         <label>Nombre:</label>
//         <input {...register('nombre', { required: true })} />
//         {errors.nombre && <span>Este campo es obligatorio</span>}
//       </div>
//       <div>
//         <label>Primer Apellido:</label>
//         <input {...register('apellido1', { required: true })} />
//         {errors.apellido1 && <span>Este campo es obligatorio</span>}
//       </div>
//       <div>
//         <label>Segundo Apellido:</label>
//         <input {...register('apellido2', { required: true })} />
//         {errors.apellido2 && <span>Este campo es obligatorio</span>}
//       </div>
//       <div>
//         <label>Correo Electrónico:</label>
//         <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
//         {errors.email && <span>Por favor, introduce un correo electrónico válido</span>}
//       </div>
//       <div>
//         <label>Teléfono:</label>
//         <input {...register('telefono', { required: true, pattern: /^\d+$/ })} />
//         {errors.telefono && <span>Por favor, introduce un número de teléfono válido</span>}
//       </div>
//       <button type="submit">Enviar</button>
//     </form>
//   );
// };

// export default Form;
