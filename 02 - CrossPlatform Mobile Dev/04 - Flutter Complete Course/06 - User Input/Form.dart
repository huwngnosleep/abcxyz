// key to manage the form
final _form = GlobalKey<FormState>;

@override
void dispose() {
  // clear focusNode or any controller for avoiding memory leaks
  _priceFocusNode.dispose();
  _imageController.dispose();
  super.dispose();
}

Form(
  // connect form with the Key
  key: _form,
  child: ListView(
    children: [
      // textFormField là widget đặc biệt của cái form, nó sẽ tự liên kết với nhau
      TextFormField(

        validator: (value) {
          // validate here
          return String
        }
        decoration: InputDecoration(labelText: 'title'),
        // add a button
        textInputAction TextInputAction.next,
      )
    ]
  )
)