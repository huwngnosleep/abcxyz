confirmDismiss: (direction) {
  // confirmDissmiss cần return một future là true or false
  // showDialog lại cũng return ra một future
  return showDialog(
      context: context,
      builder: (context) => AlertDialog(
            title: Text('Are you sure?'),
            content: Text('Do you want to remove this?'),
            actions: <Widget>[
              ElevatedButton(
                  onPressed: () {
                    // navigator.pop sẽ return một giá trị ra cái screen trước nó
                    // nên confirmDissmiss sẽ return ra true or false dựa vào cái này
                    Navigator.of(context).pop(false);
                  },
                  child: Text('No')),
              ElevatedButton(
                  onPressed: () {
                    Navigator.of(context).pop(true);
                  },
                  child: Text('Yes')),
            ],
          ));
},