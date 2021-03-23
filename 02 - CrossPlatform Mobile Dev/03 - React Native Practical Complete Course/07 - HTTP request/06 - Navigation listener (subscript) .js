// muốn khi chuyển lại tab thì refetch data
useEffect(() => {
    const willFocusSubscript = props.navigation.addListener(
        'willFocus', 
        loadProducts
    )
    // để remove subscript thì ném nó vào trong call back return như này
    return () => {
        willFocusSubscript.remove()
    }
}, [loadProducts])