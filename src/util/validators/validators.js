

export const required = values=>{
    if (values) return undefined
        return `field id required`
}
export const maxLengthCreator = (maxLength) => values=>{
    if (values.length > maxLength) return `max length should be shorter than ${maxLength} symbols`
        return undefined
}