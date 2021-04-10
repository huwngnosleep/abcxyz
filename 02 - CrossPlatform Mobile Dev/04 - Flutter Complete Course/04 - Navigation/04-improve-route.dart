// Category Screen
// static là cái biến có thể gọi từ ngoài mà không cần instantiate class
static const routeName = 'categoryScreen'

// main.dart
routes: {
  CategoryScreen.routeName: (context) => CategoryScreen()
}