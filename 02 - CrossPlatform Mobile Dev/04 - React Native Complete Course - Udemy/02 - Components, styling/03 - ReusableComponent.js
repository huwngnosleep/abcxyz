// nên viết một cái component như này
const Card = (props) => {
    return(
        // viết như này để đè cái style từ props vào cái style có sẵn
        <View style={{...styles.cardContainer, ...props.style}}>
            {props.children}
        </View>
    )
}

// rồi import nó vào
// xong thì cho children các kiểu
<Card style={styles.inputContainer}>
    <TextInput placeholder="Enter a number"/>
    <View style={styles.buttonContainer}>
        <Button title="Reset"/>
        <Button title="Confirm"/>
    </View>
</Card>