import React, { useState, useEffect } from "react";
import "./home.css"
import { useForm, FormProvider } from "react-hook-form";
import { UserService } from "../../userService.js"

const AdminList = () => {
  const [adminList, setAdminList] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const methods = useForm();
  const {
    formState: { errors },
  } = methods;

  async function getData() {
    let users = await UserService.getAllUsers();
    setAdminList(users);
  }

  useEffect(() => {
    getData();
  }, [adminList]);

  async function handleDeleteUser(userId) {
    await UserService.deleteUser(userId);
    let updatedUsers = adminList.filter((user) => user.id !== userId);
    setAdminList(updatedUsers);
  }

  function showAlert(message) {
    alert(message);
  }

  const onSubmit = methods.handleSubmit(async (data) => {
    if (editingUserId) {
      // Si hay un ID de usuario en edición, actualiza el usuario
      await UserService.updateUser(editingUserId, data);
      showAlert("Usuario actualizado correctamente");
      setEditingUserId(null);
    } else {
      // Si no hay un ID de usuario en edición, crea un nuevo usuario
      await UserService.submitUser(data);
      showAlert("Usuario creado correctamente");
    }
    methods.reset();
  });

  const handleEditUser = (userId, userData) => {
    setEditingUserId(userId);
    // Establece los valores del formulario con los datos del usuario que se está editando
    methods.reset(userData);
  };


  return (
    <section className="container">
      <section className="Form">
        <FormProvider {...methods}>
          <form onSubmit={onSubmit}>
            <label>
              <h3>Nombre:</h3>
              <input
                className="imputStyle"
                type="text"
                id="textUserName"
                name="userName"
                {...methods.register("userName", { required: true })}
              />
              {errors.userName && (
                <p className="error">El nombre de usuario es requerido.</p>
              )}
            </label>

            <label>
              <h3>Primer Apellido:</h3>
              <input
                className="imputStyle"
                type="text"
                id="texSurName"
                name="surName"
                {...methods.register("surName", { required: true })}
              />
              {errors.surName && (
                <p className="error">El Primer Apellido es requerido.</p>
              )}
            </label>

            <label>
              <h3>Segundo Apellido:</h3>
              <input
                className="imputStyle"
                type="text"
                id="textLastName"
                name="lastName"
                {...methods.register("lastName", { required: true })}
              />
              {errors.lastName && (
                <p className="error">El Segundo Apellido es requerido.</p>
              )}
            </label>

            <label>
              <h3>Correo Electrónico:</h3>
              <input
                className="imputStyle"
                type="text"
                id="textEmail"
                name="email"
                {...methods.register("email", { required: true })}
              />
              {errors.email && (
                <p className="error">El correo electrónico es requerido.</p>
              )}
            </label>

            <label>
              <h3>Número de Teléfono:</h3>
              <input
                className="imputStyle"
                type="text"
                id="textPhoneNumer"
                name="phoneNumber"
                {...methods.register("phoneNumber", { required: true })}
              />
              {errors.phoneNumber && (
                <p className="error">El teléfono es requerido.</p>
              )}
            </label>

            <button className="buttonForm" type="submit">
              {editingUserId ? "Actualizar usuario" : "Añadir usuario"}
            </button>
          </form>
        </FormProvider>
      </section>

      <section className="listForm">
        <table>
          <thead>
            <tr>
              <th className="title">Nombre</th>
              <th className="title">Primer Apellido</th>
              <th className="title">Segundo Apellido</th>
              <th className="title">Correo Electrónico</th>
              <th className="title">Número de Teléfono</th>
              <th className="title"></th>
            </tr>
          </thead>
          <tbody>
            {adminList.map((user) => (
              <tr key={user.id}>
                <td className="dataUser">{user.userName}</td>
                <td className="dataUser">{user.surName}</td>
                <td className="dataUser">{user.lastName}</td>
                <td className="dataUser">{user.email}</td>
                <td className="dataUser">{user.phoneNumber}</td>
                <td>
                  <button onClick={() => handleEditUser(user.id, user)}>
                    Editar
                  </button>
                  <button onClick={() => handleDeleteUser(user.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default AdminList;
