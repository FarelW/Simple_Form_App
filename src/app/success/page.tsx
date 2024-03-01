"use client"
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

interface FormData {
    total: number;
    email: {
      email: string;
    };
    name: {
      name: string;
    };
    address: {
      address: string;
    };
    city: {
      city: string;
    };
    country: {
      country: string;
    };
    postal: {
      postal: string;
    };
  }

export default function Success() {
    const [clickedBill, setClicked] = React.useState(false);
    const router = useRouter();
    const queryParams = window.location.search.substring(1);
    const searchParams = new URLSearchParams(queryParams);


    const formDataString = searchParams.get('formData');
    const decodedFormData = formDataString ? decodeURIComponent(formDataString) : null;
    const formData: FormData | null = decodedFormData ? JSON.parse(decodedFormData) : null;


  console.log(formData)

  return (
    <div>
      {!clickedBill ? (
        <div className="main-container">
          <div className="check-container">
            <div className="check-background">
              <svg viewBox="0 0 65 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 25L27.3077 44L58.5 7" stroke="#FFF" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="check-shadow"></div>
          </div>
          <div className="successful-title">Payment Successful</div>
          <div className="successful-label">Redirecting to Bill details</div>
          <button className="redirect-button" onClick={() => setClicked(true)}>
            Go to Bill
          </button>
        </div>
      ) : formData ? (
        <div className="flex items-center justify-center h-screen">
          <div className="max-w-xl w-[80%] p-6 bg-white shadow-md rounded-md font-montserrat">
            <h2 className="text-2xl font-semibold mb-4">Receipt</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 sm:col-span-1">
                <p className="font-semibold">Total:</p>
                <p>${formData.total}</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="font-semibold">Email:</p>
                <p>{formData.email.email}</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="font-semibold">Name:</p>
                <p>{formData.name.name}</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="font-semibold">Address:</p>
                <p>{formData.address.address}</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="font-semibold">City:</p>
                <p>{formData.city.city}</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="font-semibold">Country:</p>
                <p>{formData.country.country}</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="font-semibold">Postal:</p>
                <p>{formData.postal.postal}</p>
              </div>
            </div>
            <div className="mt-4 text-center">
              <Link href="/" className="text-blue-500 hover:text-blue-700 font-semibold underline">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen font-montserrat sm:p-5 flex items-center justify-center">
          <div className="text-3xl sm:text-4xl font-semibold text-gray-600 text-normal mb-10">There is no such data :(</div>
        </div>
      )}
    </div>
  );
}