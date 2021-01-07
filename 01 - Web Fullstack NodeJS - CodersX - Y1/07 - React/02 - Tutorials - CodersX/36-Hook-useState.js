import { func } from 'prop-types'
import React, {useState} from 'react'

export default function() {
    // tham số đầu vào là giá trị khởi tạo
    const [count, setCount] = useState(0)

    return(
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    ) 
}