// có thể thêm rất nhiều props vào cho từng loại thẻ để config như sau
// Input.js
const Input = (props) => {
    return(
        <TextInput {...props} style={{...styles.input, ...props.style}} />
    )
}

// Screen
<Input 
    style={styles.input}
    placeholder="Enter a number"
    blurOnSubmit
    autoCapitalize="none"
    autoCorrect={false}
    keyboardType="number-pad"
    maxLength={2}
/>

// xem các loại props trong documents