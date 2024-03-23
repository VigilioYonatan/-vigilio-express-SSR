import path from "node:path";

export function pathUploads() {
    return path.resolve(import.meta.dir, "..", "..", "public", "images");
}
export function holiday() {
    const fechaActual = new Date();
    const mesActual = fechaActual.getMonth() + 1;
    switch (mesActual) {
        // january
        case 1:
            return "new-year";
        // july
        case 7:
            return "independency-day";
        // october
        case 10:
            return "halloween";
        // december
        case 12:
            return "merry-christmas";
        default:
            return null;
    }
}
