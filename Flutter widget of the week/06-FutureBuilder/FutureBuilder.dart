// FutureBuilder can render dynamic content base on loading state

FutureBuilder(
  future: http.get('...'),
  builder: (context, snapshot) {
    if(snapshot.connectionState == ConnectionState.done) {
      return ...
    } else {
      return ...
    }
  }
)