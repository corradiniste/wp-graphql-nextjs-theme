export const getTextAlign = (textAlign = "left") => {
    const textAlign = {
        "left": "text-left",
        "right": "text-right",
        "center": "text-center"    
    };

    return `${textAlignMap[textAlign] || ""}`;
};

export const getFontSizeForHeading = (level) => {
    const fontSizeMap = {
        1: "text-6XL",
        2: "text-5XL",
        3: "text-4XL",
        4: "text-3XL",
        5: "text-2XL",
        6: "text-XL"
    }

    return `${fontSizeMap[level] || ""}`;

}
