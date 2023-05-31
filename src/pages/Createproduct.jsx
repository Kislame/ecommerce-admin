import { useState } from 'react';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import app from '../firebase';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

function Newproduct() {
  const userRequest = useAxiosPrivate();
  const [inputs, setInputs] = useState({});
  const [colors, setColors] = useState([]);
  const [size, setSize] = useState([]);
  const [cat, setCat] = useState([]);
  const [file, setFile] = useState(null);

  function handleChange(e) {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  function handleColors(e) {
    setColors(e.target.value.split(','));
  }
  function handleSize(e) {
    setSize(e.target.value.split(','));
  }
  function handleCat(e) {
    setCat(e.target.value.split(','));
  }
  function handleClick(e) {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    // Upload the file and metadata
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = {
            ...inputs,
            img: downloadURL,
            categories: cat,
            color: colors,
            size: size,
          };
          createNewProduct(product);
        });
      }
    );
  }

  const createNewProduct = async (product) => {
    try {
      await userRequest.post('/product', product);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="md:text-3xl text-xl font-semibold  md:text-start text-center">
          New Product
        </h1>
      </div>
      <form className="grid grid-cols-1 mt-8 gap-8 max-w-sm">
        <label htmlFor="file" className="text-slate-700 font-medium text-lg">
          Product Image:
        </label>
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          id="file"
          className=" block  file-input file-input-bordered file-input-primary file-input-sm  max-w-xs"
        />

        <div className="flex flex-col gap-6 ">
          <label className="text-slate-700 font-medium text-lg ">
            Title
            <input
              onChange={handleChange}
              type="text"
              name="title"
              placeholder="white dress"
              className="block w-full mt-2  border-2 py-1 px-2  text-slate-500 font-semibold border-slate-300 rounded-md  placeholder-slate-400 placeholder:font-medium focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-600"
            />
          </label>
          <label className="text-slate-700 font-medium text-lg ">
            Description
            <input
              onChange={handleChange}
              type="text"
              name="description"
              placeholder="white dress"
              className="block w-full mt-2  border-2 py-1 px-2  text-slate-500 font-semibold border-slate-300 rounded-md  placeholder-slate-400 placeholder:font-medium focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-600"
            />
          </label>
          <label className="text-slate-700 font-medium text-lg ">
            Color:
            <input
              onChange={handleColors}
              type="text"
              name="color"
              placeholder="white,black"
              className="block w-full mt-2  border-2 py-1 px-2  text-slate-500 font-semibold border-slate-300 rounded-md  placeholder-slate-400 placeholder:font-medium focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-600"
            />
          </label>
          <label className="text-slate-700 font-medium text-lg ">
            Price
            <input
              onChange={handleChange}
              type="number"
              name="price"
              placeholder="100"
              className="block w-full mt-2  border-2 py-1 px-2  text-slate-500 font-semibold border-slate-300 rounded-md  placeholder-slate-400 placeholder:font-medium focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-600"
            />
          </label>
          <label className="text-slate-700 font-medium text-lg ">
            Rating:
            <input
              onChange={handleChange}
              type="number"
              name="rating"
              placeholder="4"
              className="block w-full mt-2  border-2 py-1 px-2  text-slate-500 font-semibold border-slate-300 rounded-md  placeholder-slate-400 placeholder:font-medium focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-600"
            />
          </label>
          <label className="text-slate-700 font-medium text-lg ">
            Categories
            <input
              onChange={handleCat}
              type="text"
              name="categories"
              placeholder="coats,jacket,swimwear"
              className="block w-full mt-2  border-2 py-1 px-2  text-slate-500 font-semibold border-slate-300 rounded-md  placeholder-slate-400 placeholder:font-medium focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-600"
            />
          </label>

          <label className="text-slate-700 font-medium text-lg ">
            Size
            <input
              onChange={handleSize}
              type="text"
              name="size"
              placeholder="L,Xl,M"
              className="block w-full mt-2  border-2 py-1 px-2  text-slate-500 font-semibold border-slate-300 rounded-md  placeholder-slate-400 placeholder:font-medium focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-600"
            />
          </label>
          <label className="text-slate-700 font-medium text-lg">
            In Stock:
            <select
              onChange={handleChange}
              name="inStock"
              className="py-2 pl-2  mt-2 font-medium bg-white border-slate-300 border  text-lg w-full"
            >
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </label>
          <label className="text-slate-700 font-medium text-lg">
            nbStk
            <input
              onChange={handleChange}
              type="number"
              name="numberInStock"
              placeholder="380"
              className="block  w-full mt-2 border-2 py-1 px-2  text-slate-500 font-semibold border-slate-300 rounded-md  placeholder-slate-400 placeholder:font-medium focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-600"
            />
          </label>
        </div>
        <button onClick={handleClick} className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default Newproduct;
