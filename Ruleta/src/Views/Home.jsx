// import React, { useState, useEffect } from "react";
// import "./home.css";
// import { useForm, FormProvider } from "react-hook-form";
// import { UserService } from "../../userService.js";
// import { v4 as uuidv4 } from 'uuid';

// const AdminList = () => {
//   const [adminList, setAdminList] = useState([]);
//   const [editingUserId, setEditingUserId] = useState(null);
//   const [drawParticipants, setDrawParticipants] = useState([]);
//   const methods = useForm();
//   const { formState: { errors } } = methods;

 
//   useEffect(() => {
//     getData();
//     const savedDrawParticipants = JSON.parse(localStorage.getItem('drawParticipants') || '[]');
//     setDrawParticipants(savedDrawParticipants);
//   }, []);

  
//   useEffect(() => {
//     const savedDrawParticipants = JSON.parse(localStorage.getItem('drawParticipants') || '[]');
//     setDrawParticipants(savedDrawParticipants);
//   }, [adminList]);

//   async function getData() {
//     let users = await UserService.getAllUsers();
//     setAdminList(users);
//   }

//   async function handleDeleteUser(userId) {
//     await UserService.deleteUser(userId);
//     let updatedUsers = adminList.filter((user) => user.id !== userId);
//     setAdminList(updatedUsers);
//   }

//   function showAlert(message) {
//     alert(message);
//   }

//   const onSubmit = methods.handleSubmit(async (data) => {
//     if (editingUserId) {
//       await UserService.updateUser(editingUserId, data);
//       showAlert("Usuario actualizado correctamente");
//       setEditingUserId(null);
//     } else {
//       await UserService.submitUser(data);
//       showAlert("Usuario creado correctamente");
//     }
    
//     getData();
//     methods.reset();
//   });

//   const handleEditUser = (userId, userData) => {
//   setEditingUserId(userId);
//   methods.reset();
//   Object.keys(userData).forEach(key => {
//     methods.setValue(key, userData[key]);
//   });
// };

// const handleAddToDraw = async (userId) => {
//   try {
//     // Agregar participante al estado local
//     const updatedParticipants = [...drawParticipants, userId];
//     setDrawParticipants(updatedParticipants);
//     localStorage.setItem('drawParticipants', JSON.stringify(updatedParticipants));

//     // Agregar participante a la base de datos JSON en el servidor
//     await UserService.addToDraw(updatedParticipants);
//   } catch (error) {
//     console.error('Error al agregar participante al sorteo:', error);
//   }
// };

//   const handleSaveDraw = async () => {
//     try {
//       await UserService.addToDraw(drawParticipants);
//       alert("La lista de sorteo ha sido guardada.");
//     } catch (error) {
//       console.error("Error al guardar la lista de sorteo:", error);
//     }
//   };

//   const handleRemoveFromDraw = (userId) => {
//     const updatedParticipants = drawParticipants.filter((id) => id !== userId);
//     setDrawParticipants(updatedParticipants);
//     localStorage.setItem('drawParticipants', JSON.stringify(updatedParticipants));
//   };



//   return (
//     <section className="container">
//       <section className="Form">
//         <FormProvider {...methods}>
//           <form onSubmit={onSubmit}>
//             <label>
//               <h3>Nombre:</h3>
//               <input
//                 className="imputStyle"
//                 type="text"
//                 id="textUserName"
//                 name="userName"
//                 {...methods.register("userName", { required: true })}
//               />
//               {errors.userName && (
//                 <p className="error">El nombre de usuario es requerido.</p>
//               )}
//             </label>

//             <label>
//               <h3>Primer Apellido:</h3>
//               <input
//                 className="imputStyle"
//                 type="text"
//                 id="texSurName"
//                 name="surName"
//                 {...methods.register("surName", { required: true })}
//               />
//               {errors.surName && (
//                 <p className="error">El Primer Apellido es requerido.</p>
//               )}
//             </label>

//             <label>
//               <h3>Segundo Apellido:</h3>
//               <input
//                 className="imputStyle"
//                 type="text"
//                 id="textLastName"
//                 name="lastName"
//                 {...methods.register("lastName", { required: true })}
//               />
//               {errors.lastName && (
//                 <p className="error">El Segundo Apellido es requerido.</p>
//               )}
//             </label>

//             <label>
//               <h3>Correo Electrónico:</h3>
//               <input
//                 className="imputStyle"
//                 type="text"
//                 id="textEmail"
//                 name="email"
//                 {...methods.register("email", { required: true })}
//               />
//               {errors.email && (
//                 <p className="error">El correo electrónico es requerido.</p>
//               )}
//             </label>

//             <label>
//               <h3>Número de Teléfono:</h3>
//               <input
//                 className="imputStyle"
//                 type="text"
//                 id="textPhoneNumer"
//                 name="phoneNumber"
//                 {...methods.register("phoneNumber", { required: true })}
//               />
//               {errors.phoneNumber && (
//                 <p className="error">El teléfono es requerido.</p>
//               )}
//             </label>

//             <button className="buttonForm" type="submit">
//               {editingUserId ? "Actualizar usuario" : "Añadir usuario"}
//             </button>
//           </form>
//         </FormProvider>
//       </section>

//         <section className="listForm">
//         <table>
//           <thead>
//             <tr>
//               <th className="title">Nombre</th>
//               <th className="title">Primer Apellido</th>
//               <th className="title">Segundo Apellido</th>
//               <th className="title">Correo Electrónico</th>
//               <th className="title">Número de Teléfono</th>
//               <th className="title"></th>
//             </tr>
//           </thead>
//              <tbody>
//                 {adminList.map((user, index) => (
//                 <tr key={uuidv4()}>
//                 <td className="dataUser">{user.userName}</td>
//                 <td className="dataUser">{user.surName}</td>
//                 <td className="dataUser">{user.lastName}</td>
//                 <td className="dataUser">{user.email}</td>
//                 <td className="dataUser">{user.phoneNumber}</td>
//                 <td>
//                 <button onClick={() => handleEditUser(user.id, user)}>
//                     Editar
//                 </button>
//                 <button onClick={() => handleDeleteUser(user.id)}>
//                     Eliminar
//                 </button>
//                 <button onClick={() => handleAddToDraw(user.id)}>
//                     Añadir a sorteo
//                 </button>
//                 </td>
//                 </tr>
//                 ))}
//                 </tbody>
//                 </table>
//             </section>
//             <button onClick={handleSaveDraw}>Guardar Lista Sorteo</button>
//             <section><h1>Participantes para el sorteo:</h1></section>
//             <section className="drawTable">
//         <table>
//           <thead>
//             <tr>
//               <th className="title">Nombre</th>
//               <th className="title">Primer Apellido</th>
//               <th className="title">Segundo Apellido</th>
//               <th className="title">Correo Electrónico</th>
//               <th className="title">Número de Teléfono</th>
//               <th className="title">Acciones</th>
//             </tr>
//           </thead>
//           <tbody>
//             {drawParticipants.map((userId) => {
//               const user = adminList.find((u) => u.id === userId);
//               return user ? (
//                 <tr key={user.id}>
//                   <td>{user.userName}</td>
//                   <td>{user.surName}</td>
//                   <td>{user.lastName}</td>
//                   <td>{user.email}</td>
//                   <td>{user.phoneNumber}</td>
//                   <td>
//                     <button onClick={() => handleRemoveFromDraw(user.id)}>
//                       Eliminar del sorteo
//                     </button>
//                   </td>
//                 </tr>
//               ) : null;
//             })}
//           </tbody>
//         </table>
//       </section>
//     </section>
//   );
// };

// export default AdminList;

import React from 'react';

function Home() {
    return (
        <div>
            <h1>¡Bienvenido a la página de inicio!</h1>
            <p>Aquí puedes agregar contenido relevante para la página de inicio.</p>
        </div>
    );
}

export default Home;


             