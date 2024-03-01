import React from "react";

interface product_props {
    image?: JSX.Element,
    realprice : number,
    discountprice : number,
    productname : string,
    currentQuantity ?: number,
    onQuantityChange ?: (quantity: number) => void,
}

export default function ProductCard(props: product_props){
    const [currentQuantity, setCurrentQuantity] = React.useState(props.currentQuantity || 0);

    const handleQuantityChange = (quantity : number) => {
        const newQuantity = Math.max(quantity, 1);
        setCurrentQuantity(newQuantity);
        if (props.onQuantityChange){ 
            props.onQuantityChange(quantity);
        }
    }

    const [minusButton, setMinusButton] = React.useState(false);

    React.useEffect(() => {
        if (currentQuantity === 0) {
            setMinusButton(true);
        } else {
            setMinusButton(false);
        }
    }, [currentQuantity])

    return(
        <div className="space-x-3 flex flex-row h-[150px]">
            {props.image}
            <div className="flex flex-col space-y-3">
                <label>{props.productname}</label>
                <label className="text-[#F2994A] font-bold">${(props.discountprice * currentQuantity).toFixed(2)} <span className="line-through text-[#4E5150] text-xs ml-2">${(props.realprice * currentQuantity).toFixed(2)}</span></label>
                <div className="border border-black flex flex-row space-x-5 py-2 px-4 w-fit rounded-lg">
                    <button onClick={() => handleQuantityChange(currentQuantity-1)} disabled={minusButton}>-</button>
                    <label>{currentQuantity}</label>
                    <button onClick={() => handleQuantityChange(currentQuantity+1)}>+</button>
                </div>
            </div>
        </div>
    )
}