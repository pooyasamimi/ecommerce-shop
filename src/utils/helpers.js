


export function numFa(number) {
    const numFa = new Intl.NumberFormat('fa-IR', { style: "decimal" }).format(number).replace(/٬/g, "")
    return numFa
}