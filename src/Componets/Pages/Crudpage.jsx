import React, {
  useEffect,
  useState,
} from "react";

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import {
  db,
} from "../FireBase/Firebase";

import {
  useAuth,
} from "../context/AuthContext";

const CrudPage = () => {

  const { currentUser } = useAuth();

  const [title, setTitle] =
    useState("");

  const [products, setProducts] =
    useState([]);

  // ADD PRODUCT
  const addProduct = async (e) => {

    e.preventDefault();

    try {

      await addDoc(
        collection(db, "products"),
        {
          title: title,

          createdBy:
            currentUser.uid,

          createdByEmail:
            currentUser.email,

          createdAt:
            new Date(),
        }
      );

      alert("Product Added");

      setTitle("");

      fetchProducts();

    } catch (error) {

      console.log(error);
    }
  };

  // FETCH PRODUCTS
  const fetchProducts =
    async () => {

      try {

        let q;

        // ADMIN
        if (
          currentUser.role ===
          "admin"
        ) {

          q = collection(
            db,
            "products"
          );

        } else {

          // USER ONLY OWN DATA
          q = query(
            collection(
              db,
              "products"
            ),

            where(
              "createdBy",
              "==",
              currentUser.uid
            )
          );
        }

        const snapshot =
          await getDocs(q);

        const data =
          snapshot.docs.map(
            (doc) => ({
              id: doc.id,
              ...doc.data(),
            })
          );

        setProducts(data);

      } catch (error) {

        console.log(error);
      }
    };

  // DELETE PRODUCT
  const deleteProduct =
    async (id) => {

      try {

        await deleteDoc(
          doc(
            db,
            "products",
            id
          )
        );

        alert("Deleted");

        fetchProducts();

      } catch (error) {

        console.log(error);
      }
    };

  useEffect(() => {

    if (currentUser) {

      fetchProducts();
    }

  }, [currentUser]);

  return (

    <div className="p-10">

      <h1 className="text-3xl font-bold mb-5">
        Secure CRUD System
      </h1>

      {/* ROLE */}
      <h2 className="mb-5 text-xl">

        Logged In As:

        <span className="font-bold text-blue-600 ml-2">

          {currentUser?.role}

        </span>

      </h2>

      {/* ADD PRODUCT */}
      <form
        onSubmit={addProduct}
        className="flex gap-3 mb-8"
      >

        <input
          type="text"
          placeholder="Enter Product"
          value={title}
          onChange={(e) =>
            setTitle(
              e.target.value
            )
          }
          className="border p-3 rounded w-80"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-3 rounded"
        >
          Add Product
        </button>

      </form>

      {/* PRODUCTS */}
      <div className="grid gap-4">

        {
          products.map((item) => (

            <div
              key={item.id}
              className="border p-5 rounded shadow"
            >

              <h2 className="text-xl font-bold">
                {item.title}
              </h2>

              <p className="text-gray-500">
                {item.createdByEmail}
              </p>

              {/* DELETE BUTTON */}

              {
                currentUser.role ===
                  "admin"

                ||

                currentUser.uid ===
                  item.createdBy

                ? (

                  <button
                    onClick={() =>
                      deleteProduct(
                        item.id
                      )
                    }
                    className="bg-red-600 text-white px-4 py-2 rounded mt-3"
                  >
                    Delete
                  </button>

                ) : null
              }

            </div>
          ))
        }

      </div>

    </div>
  );
};

export default CrudPage;