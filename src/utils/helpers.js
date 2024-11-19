import React from "react";
import toast from "react-hot-toast";
import supabase from "../Api/config";


export function numFa(number) {
    const numFa = new Intl.NumberFormat('fa-IR', { style: "decimal" }).format(number).replace(/٬/g, "")
    return numFa
}