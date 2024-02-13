import { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { UserService } from "../../../userService.js"
import "./adminList.css"
import editIcon from './editicon.svg'
import deleteIcon from './deleteicon.svg'
import addIcon from './addicon.svg'


const AdminList = () => {
  const [adminList, setAdminList] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [selectedUsers, setSelectedUsers] = useState([]);
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

  const handleSelectUser = (user) => {
    // Verifica si el usuario ya está seleccionado; si no lo está, agrégalo al estado selectedUsers
    if (!selectedUsers.some((selectedUser) => selectedUser.id === user.id)) {
      setSelectedUsers([...selectedUsers, user]);
    }
  };

  const handleRemoveFromSelection = (userId) => {
    const updatedSelectedUsers = selectedUsers.filter((user) => user.id !== userId);
    setSelectedUsers(updatedSelectedUsers);
  };


  return (
    <>
      <p className="texthome">Bienvenidos a la web del colegio de la reina cotilla de las desarrolladoras.
      Te invitamos a a jugar y a investigar,
      ¡encontrarás muchas noticias frescas!</p>
      <section className="container">
        <section className="Form">
          <FormProvider {...methods}>
            <form className="formhome" onSubmit={onSubmit}>
              <label>

                <input
                  className="imputStyle"
                  type="text"
                  placeholder='Nombre'
                  id="textUserName"
                  name="userName"
                  {...methods.register("userName", { required: true })}
                />
                {errors.userName && (
                  <p className="error">El nombre de usuario es requerido.</p>
                )}
              </label>

              <label>

                <input
                  className="imputStyle"
                  type="text"
                  placeholder='Primer apellido'
                  id="texSurName"
                  name="surName"
                  {...methods.register("surName", { required: true })}
                />
                {errors.surName && (
                  <p className="error">El Primer Apellido es requerido.</p>
                )}
              </label>

              <label>

                <input
                  className="imputStyle"
                  type="text"
                  placeholder='Segundo apellido'
                  id="textLastName"
                  name="lastName"
                  {...methods.register("lastName", { required: true })}
                />
                {errors.lastName && (
                  <p className="error">El Segundo Apellido es requerido.</p>
                )}
              </label>

              <label>

                <input
                  className="imputStyle"
                  type="text"
                  placeholder='Correo Electrónico'
                  id="textEmail"
                  name="email"
                  {...methods.register("email", { required: true })}
                />
                {errors.email && (
                  <p className="error">El correo electrónico es requerido.</p>
                )}
              </label>

              <label>

                <input
                  className="imputStyle"
                  type="text"
                  placeholder='Teléfono'
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
              <tr className="headerform">
                <th className="title">Nombre</th>
                <th className="title">Primer Apellido</th>
                <th className="title">Segundo Apellido</th>
                <th className="title">Correo Electrónico</th>
                <th className="title">Nº Teléfono</th>
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

                    <img
                      src={editIcon}
                      alt="Editar"
                      onClick={() => handleEditUser(user.id, user)}
                    />

                    <img
                      src={deleteIcon}
                      alt="Eliminar"
                      onClick={() => handleDeleteUser(user.id)}
                    />

                    <img
                      src={addIcon}
                      alt="Añadir al sorteo"
                      onClick={() => handleSelectUser(user)}
                    />

                  </td>
                </tr>
              ))}
            </tbody>
            <section className="selectedUsers">
              <h2>Participantes en Sorteo</h2>
              <table>
                <thead>
                  <tr>
                    <th className="title">Nombre</th>
                    <th className="title">Primer Apellido</th>
                    {/* Agrega otros encabezados según sea necesario */}
                  </tr>
                </thead>
                <tbody>
                  {selectedUsers.map((user) => (
                    <tr key={user.id}>
                      <td className="dataUser">{user.userName}</td>
                      <td className="dataUser">{user.surName}</td>
                      <button onClick={() => handleRemoveFromSelection(user.id)}>
                        Eliminar
                      </button>
                      {/* Agrega otros datos del usuario según sea necesario */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </table>
        </section>
      </section>
    </>
  );
};

export default AdminList
