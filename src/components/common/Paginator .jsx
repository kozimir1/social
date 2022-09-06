import React, {useState} from "react";
import cl from "./Paginator.module.css";

const Paginator = ({totalItemsCount, pageCount, onPageNumber, pageNumber, portionSize}) => {
    const pageAmount = Math.ceil(totalItemsCount / pageCount)
    const page = []
    for (let i = 1; i <= pageAmount; i++) {
        page.push(i)
    }
    const portionCount = Math.ceil(pageAmount / portionSize)
    const [portionNumber, SetPortionNumber] = useState(1)
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionNumber = portionNumber * portionSize

    return <div className={cl.spanBox}>
        {portionNumber>1 && <button onClick={()=>SetPortionNumber(portionNumber-1)} className={cl.button}>Prev</button>}
        {page.filter(p=> p>=leftPortionNumber && p <= rightPortionNumber)
            .map(p => <span onClick={() => onPageNumber(p)}
                            className={pageNumber === p ? cl.selected : undefined}>{p}</span>)}
        {portionCount>portionNumber && <button onClick={()=>SetPortionNumber(portionNumber+1)} className={cl.button}>Next</button>}
    </div>
}


export default Paginator