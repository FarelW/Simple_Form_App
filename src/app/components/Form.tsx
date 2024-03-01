"use client"
import React, { useState, FormEvent } from "react";
import Image from "next/image";
import ProductCard from "./ProductCard";
import photo1 from "../../../public/photo1.png";
import photo2 from "../../../public/photo2.png";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoMdHome } from "react-icons/io";
import { FaCity } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { BsFillPostageFill } from "react-icons/bs";
import Success from "../success/page";
import { useRouter } from "next/navigation";

interface Product {
  image: JSX.Element;
  realprice: number;
  discountprice: number;
  productname: string;
  currentQuantity: number;
}

const Form: React.FC = (): JSX.Element => {
  const [products, setProducts] = useState<Product[]>([
    {
      image: (
        <Image src={photo1} alt="Product1" width={150} height={150} className="rounded-2xl" />
      ),
      realprice: 94.99,
      discountprice: 54.99,
      productname: "Vintage Backbag",
      currentQuantity: 1,
    },
    {
      image: (
        <Image src={photo2} alt="Product2" width={150} height={150} className="rounded-2xl" />
      ),
      realprice: 124.99,
      discountprice: 74.99,
      productname: "Levi Shoes",
      currentQuantity: 1,
    },
  ]);

  const [totalPrice, setTotalPrice] = useState(0);
  const shipcost = 19;

  React.useEffect(() => {
    let totalPrice = 0;
    products.forEach((product) => {
      totalPrice += product.currentQuantity * product.discountprice;
    });
    setTotalPrice(parseFloat(totalPrice.toFixed(2)));
  }, [products]);

  const handleQuantityChange = (key: number, quantity: number) => {
    const updatedProducts = [...products];
    updatedProducts[key].currentQuantity = Math.max(quantity, 1);
    setProducts(updatedProducts);
  };

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postal, setPostal] = useState("");
  const router = useRouter();
  

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formDataObject = {
      total: totalPrice + shipcost,
      email: { email },
      phone: { phone },
      name: { name },
      address: { address },
      city: { city },
      country: { country },
      postal: { postal },
    };

    router.push(`/success?formData=${JSON.stringify(formDataObject)}`);
  };

    return(
        <div className="min-h-screen font-montserrat sm:p-5">
            <div className=" flex items-center flex-col text-3xl sm:text-4xl font-semibold text-gray-600 text-normal mb-10">
                Checkout
            </div>

            <form onSubmit={(e)=>handleSubmit(e)}>
                <div className="lg:sticky lg:top-[200px] lg:left-[65%] mx-auto bg-gray-200 w-fit px-4 py-4 sm:px-6 sm:py-6 flex justify-center flex-col rounded-xl h-3/4">
                {products.map((item, index) => (
                    <div className="mt-4" key={index}> {/* Add key prop here */}
                        <ProductCard
                            currentQuantity={item.currentQuantity}
                            onQuantityChange={(quantity) => handleQuantityChange(index, quantity)}
                            image={item.image}
                            realprice={item.realprice}
                            discountprice={item.discountprice}
                            productname={item.productname}
                        />
                    </div>
                ))}
                    <div className="border-t-2 font-bold border-t-slate-500 mt-16 flex flex-row justify-between">
                        <label>Shipping</label>
                        <label>${shipcost.toFixed(2)}</label>
                    </div>
                    <div className="border-t-2 font-bold border-t-slate-500 mt-4 flex flex-row justify-between">
                        <label>Total</label>
                        <label>${totalPrice}</label>
                    </div>
                </div>

                <div className=" lg:mt-[-500px] lg:w-[65%] static max-w-[1000px] p-10">
                    <div className=" font-semibold sm:text-xl text-lg text-gray-700">
                        Contact information
                    </div>
                    <div className="flex flex-col pt-2 sm:pt-4 sm:pl-4">
                        <label id="email" className="text-sm font-bold text-gray-500 ml-2 mb-2">
                            E-mail
                        </label>
                        <span className="absolute pt-[40px] pl-[10px] sm:pl-[20px]">
                            <MdEmail color="rgb(107,114,128)" size="30px" className=" w-[80%] h-[80%] sm:w-full sm:h-full"/>
                        </span>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email..."
                            required
                            className=" text-sm sm:text-base pl-10 sm:pl-16 cursor-default h-12 sm:h-14 border border-gray-400 rounded-xl px-4 py-2 mr-2 font-semibold"
                            onChange={(e)=>{setEmail(e.target.value)}}
                        />
                    </div>
                    <div className="flex flex-col pt-2 sm:pt-4 sm:pl-4">
                        <label id="phone" className="text-sm font-bold text-gray-500 ml-2 mb-2">
                            Phone
                        </label>
                        <span className="absolute pt-[40px] pl-[10px] sm:pl-[20px]">
                            <FaPhone color="rgb(107,114,128)" size="25px" className=" w-[80%] h-[80%] sm:w-full sm:h-full"/>
                        </span>
                        <input
                            id="phone"
                            type="tel" 
                            pattern="[+][0-9]{2}-[0-9]{3}-[0-9]{8}"
                            required
                            placeholder="Enter your phone..."
                            title="+62-888-12345678"
                            className=" text-sm sm:text-base pl-10 sm:pl-16 cursor-default h-12 sm:h-14 border border-gray-400 rounded-xl px-4 py-2 mr-2 font-semibold"
                            onChange={(e)=>{setPhone(e.target.value)}}
                        />
                    </div>
                </div>

                <div className=" lg:w-[65%] max-w-[1000px] p-10">
                    <div className=" font-semibold sm:text-xl text-lg text-gray-700">
                        Shipping Address
                    </div>
                    <div className="flex flex-col pt-2 sm:pt-4 sm:pl-4">
                        <label id="name" className="text-sm font-bold text-gray-500 ml-2 mb-2">
                            Fullname
                        </label>
                        <span className="absolute pt-[40px] pl-[10px] sm:pl-[20px]">
                            <CgProfile color="rgb(107,114,128)" size="30px" className=" w-[80%] h-[80%] sm:w-full sm:h-full"/>
                        </span>
                        <input
                            id="name"
                            type="text"
                            placeholder="Your name..."
                            required
                            className=" text-sm sm:text-base pl-10 sm:pl-16 cursor-default h-12 sm:h-14 border border-gray-400 rounded-xl px-4 py-2 mr-2 font-semibold"
                            onChange={(e)=>{setName(e.target.value)}}
                        />
                    </div>
                    <div className="flex flex-col pt-2 sm:pt-4 sm:pl-4">
                        <label id="address" className="text-sm font-bold text-gray-500 ml-2 mb-2">
                            Address
                        </label>
                        <span className="absolute pt-[40px] pl-[10px] sm:pl-[20px]">
                            <IoMdHome color="rgb(107,114,128)" size="30px" className=" w-[80%] h-[80%] sm:w-full sm:h-full"/>
                        </span>
                        <input
                            id="address"
                            type="text"
                            placeholder="Your address..."
                            required
                            className=" text-sm sm:text-base pl-10 sm:pl-16 cursor-default h-12 sm:h-14 border border-gray-400 rounded-xl px-4 py-2 mr-2 font-semibold"
                            onChange={(e)=>{setAddress(e.target.value)}}
                        />
                    </div>
                    <div className="flex flex-col pt-2 sm:pt-4 sm:pl-4">
                        <label id="city" className="text-sm font-bold text-gray-500 ml-2 mb-2">
                            City
                        </label>
                        <span className="absolute pt-[40px] pl-[10px] sm:pl-[20px]">
                            <FaCity color="rgb(107,114,128)" size="30px" className=" w-[80%] h-[80%] sm:w-full sm:h-full"/>
                        </span>
                        <input
                            id="city"
                            type="text"
                            placeholder="Your city..."
                            required
                            className=" text-sm sm:text-base pl-10 sm:pl-16 cursor-default h-12 sm:h-14 border border-gray-400 rounded-xl px-4 py-2 mr-2 font-semibold"
                            onChange={(e)=>{setCity(e.target.value)}}
                        />
                    </div>
                    <div className="flex pt-2 sm:pt-4 sm:pl-4 w-[110%] sm:w-[102.5%]">
                        <div className="w-[60%]">
                            <label id="country" className="text-sm font-bold text-gray-500 ml-2 mb-2">
                                Country
                            </label>
                            <span className="absolute pt-[38px] ml-[-56px] sm:ml-[-46px]">
                                <BiWorld color="rgb(107,114,128)" size="30px" className=" w-[80%] h-[80%] sm:w-full sm:h-full"/>
                            </span>
                            <input
                                id="country"
                                type="text"
                                placeholder="Your country.."
                                required
                                className=" text-sm sm:text-base pl-10 sm:pl-16 cursor-default h-12 sm:h-14 border border-gray-400 rounded-xl px-4 py-2 mr-2 font-semibold"
                                style={{ width: 'calc(100% - 2rem)' }}
                                onChange={(e)=>{setCountry(e.target.value)}}
                            />
                        </div>
                            
                        <div className="w-[60%]">
                            <label id="postal" className="text-sm font-bold text-gray-500 ml-2 mb-2">
                                Postal code
                            </label>
                            <span className="absolute pt-[38px] ml-[-85px] sm:ml-[-78px]">
                                <BsFillPostageFill color="rgb(107,114,128)" size="30px" className=" w-[80%] h-[80%] sm:w-full sm:h-full"/>
                            </span>
                            <input
                                id="postal"
                                placeholder="Your postal.."
                                type="tel" 
                                required
                                pattern="[0-9]{5}" 
                                title=" example : 99999"
                                className=" text-sm sm:text-base pl-10 sm:pl-16 cursor-default h-12 sm:h-14 border border-gray-400 rounded-xl px-4 py-2 mr-2 font-semibold"
                                style={{ width: 'calc(100% - 2rem)' }}
                                onChange={(e)=>{setPostal(e.target.value)}}
                            />
                        </div>
                    </div>
                    <div className="flex justify-end pt-8 pl-4">
                            <input
                                type="submit"
                                className=" w-[160px] mr-2 cursor-pointer h-14 border border-white bg-orange-400 text-white rounded-xl font-semibold"
                            />
                    </div>
                    
                </div>
            </form>
        </div>
    )
}

export default Form