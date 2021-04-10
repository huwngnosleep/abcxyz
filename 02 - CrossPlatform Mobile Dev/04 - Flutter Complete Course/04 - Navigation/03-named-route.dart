// main.dart
home: HomeScreen(),
routes: {
  'Category': (context) => CategoryScreen,
}

//
Navigator.of(context).pushNamed(
  'Category',
  arguments: {
    'arg1': arg1,
    'arg2': arg2,
  },
)

// destination screen
final routeArgs = ModalRoute.of(context).settings.arguments as Map<String, String>;
final arg1 = routeArgs['arg1']