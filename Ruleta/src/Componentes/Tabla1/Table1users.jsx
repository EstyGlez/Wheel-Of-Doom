// import React from 'react';

// const Table1users = ({ users, onModify, onDelete, onAddToSecondTable }) => {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Nombre</th>
//           <th>Primer Apellido</th>
//           <th>Segundo Apellido</th>
//           <th>Correo Electrónico</th>
//           <th>Teléfono</th>
//           <th>Acciones</th>
//         </tr>
//       </thead>
//       <tbody>
//         {users.map(user => (
//           <tr key={user.id}>
//             <td>{user.nombre}</td>
//             <td>{user.apellido1}</td>
//             <td>{user.apellido2}</td>
//             <td>{user.email}</td>
//             <td>{user.telefono}</td>
//             <td>
//               <button onClick={() => onModify(user)}>Modificar</button>
//               <button onClick={() => onDelete(user)}>Eliminar</button>
//               <button onClick={() => onAddToSecondTable(user)}>Añadir a la segunda tabla</button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default Table1users;
