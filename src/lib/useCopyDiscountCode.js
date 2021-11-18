import copy from 'copy-to-clipboard';
import {useState,useEffect} from "react";
export const useCopyDiscountCode = ({resetInterval = null}) => {
    const [isCopied,setIsCopied] = useState(false);

    useEffect(() => {
        let timeout;
        if(isCopied && resetInterval){
            timeout = setTimeout(() =>{
                setIsCopied(false);
            } ,resetInterval)
        }
        return () => {
            clearTimeout(timeout);
        }
    },[resetInterval,isCopied]);

    const copyDiscountCode = (code) => {
        if (typeof code === "string") {
            copy(code);
            setIsCopied(true);
        } else {
            console.error("Cannot copy this code!")
        }
    }
    return [isCopied,copyDiscountCode];
}