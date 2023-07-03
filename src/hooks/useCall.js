import { useContext } from "react";
import axios from "axios";
import { UsersContext } from "../contex/UsersContext";

const useCall = () => {
  const { users, setUsers } = useContext(UsersContext);

  //!------- GET CALLS (Promise.all -->
  const getUsers = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/users");

      setUsers(response.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  //!------- GET UsersByName CALLS (Promise.all -->
  const getUsersByName = async (name) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/users/search?q=${name}`
      );

      // İstenilen işlemleri gerçekleştirin
      setUsers(response.data.users);
    } catch (error) {
      console.error(error);
    }
  };
  //!------------- DELETE CALLS ----------------
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`https://dummyjson.com/users/${id}`);

      if (response.status === 200) {
        // Silme işlemi başarılı
        // Rows listesinden silinen satırı kaldırabilirsiniz
        // Örneğin:
        const updatedRows = users.filter((row) => row.id !== id);
        setUsers(updatedRows);
      } else {
        // Silme işlemi başarısız
        // Hata mesajını gösterebilir veya uygun bir işlem yapabilirsiniz
      }
    } catch (error) {
      // Hata durumunda yapılacak işlemler
      console.error("Error deleting row:", error);
    }
  };
  //!------------- POST CALLS ----------------
  const handleAdd = async (item) => {
    try {
      const response = await axios.post(
        "https://dummyjson.com/users/add",
        item
      );

      if (response.status === 200) {
        // Kullanıcı başarıyla eklendi
        // İşlem sonrası yapılacak işlemleri buraya ekleyebilirsiniz
        console.log("Kullanıcı başarıyla eklendi:", response.data);
        const updatedUsers = [response.data].concat(users);
        setUsers(updatedUsers);

        // getUsers();
      } else {
        // Kullanıcı ekleme işlemi başarısız oldu
        // Hata mesajını gösterebilir veya uygun bir işlem yapabilirsiniz
        console.log("Kullanıcı ekleme işlemi başarısız oldu");
      }
    } catch (error) {
      // Hata durumunda yapılacak işlemler
      console.error("Kullanıcı eklenirken hata oluştu:", error);
    }
  };
  //!------------- PUT CALLS ----------------
  const handleEdit = async (item) => {
    try {
      const response = await axios.put(
        `https://dummyjson.com/users/${item.id}`,
        {
          ...item,
          firstName: item?.firstName,
          email: item?.email,
          phone: item?.phone,
          website: item?.website,
          company: {
            name: item?.companyName,
          },
        }
      );

      if (response.status === 200) {
        const updatedRows = users.map((row) => {
          if (row.id === item.id) {
            return {
              ...item,
              name: response.data.firstName,
              email: response.data.email,
              phone: response.data.phone,
              domain: response.data.domain,
              company: {
                ...row.company,
                name: response.data.company.name,
              },
            };
          }
          return row;
        });
        setUsers(updatedRows);
      } else {
      }
    } catch (error) {
      console.error("Satır güncellenirken hata oluştu:", error);
    }
  };
  return {
    getUsers,
    getUsersByName,
    users,
    setUsers,
    handleEdit,
    handleDelete,
    handleAdd,
  };
};

export default useCall;
