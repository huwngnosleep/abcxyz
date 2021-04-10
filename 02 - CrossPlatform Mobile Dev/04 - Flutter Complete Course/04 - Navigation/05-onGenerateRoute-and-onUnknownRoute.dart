// onGenerateRoute giúp render tùy theo các arguments mà route có
// dùng khi không biết sẽ ra cái route nào
onGenerateRoute: (settings) {
  // ...
}

// onUnknownRoute sẽ render ra một cái fallback khi named không trùng với bất cứ route nào
// cũng nhận settings làm arguments
onUnknownRoute: (settings) {
  // ...
}