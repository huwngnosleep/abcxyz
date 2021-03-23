// vẫn là config trong theme
theme: ThemeData(
  primarySwatch: Colors.purple,
  accentColor: Colors.amber,
  fontFamily: 'OpenSans',
  appBarTheme: AppBarTheme(
    textTheme: ThemeData.light().textTheme.copyWith(
      title: TextStyle(
        fontFamily: 'OpenSans', 
        fontSize: 20,
        fontWeight: FontWeight.bold,
      )
    ),
  ),
),

// ở widget nào muốn lấy style thì dùng như sau
style: Theme.of(context).textTheme.titletitle