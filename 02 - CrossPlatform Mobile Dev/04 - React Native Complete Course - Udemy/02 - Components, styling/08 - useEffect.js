import { useEffect } from "react";

// useEffect giống như lifecycle Mount
useEffect(() => {
    // logic
}, [dependencies])

// khi dependencies thay đổi thì useEffect sẽ tự rerun