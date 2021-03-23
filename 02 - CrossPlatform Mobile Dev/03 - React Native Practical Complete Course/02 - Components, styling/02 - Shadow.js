// shadow không có short-handed nên phải viết đủ ra
inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 5,
    shadowOpacity: 0.25,
    elevation: 5,
    // do Androi bình thường không hỗ trợ shadow
    // nên phải thêm cái elevation này vào
    // còn bản chất nó là gì thì không biết
    backgroundColor: 'white',
    padding: 20,
},